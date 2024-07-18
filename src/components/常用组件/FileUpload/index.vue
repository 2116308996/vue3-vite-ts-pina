<script setup name="ImageOrFileUpload">
import api from '@/api'
import { onMounted } from 'vue'
const { proxy } = getCurrentInstance()
const props = defineProps({
    name:{
        type:Number,
        default:0
    },
    action:{
        type:String,
        default:""
    },
    headers: {
        type: Object,
        default: () => {}
    },
    data: {
        type: Object,
        default: () => {}
    },
    name: {
        type: String,
        default: 'file'
    },
    modelValue: {
        type: Object,
        default: () => {}
    },
    size: {
        type: Number,
        default: 50
    },
    width: {
        type: Number,
        default: 150
    },
    height: {
        type: Number,
        default: 150
    },
    placeholder: {
        type: String,
        default: ''
    },
    notip: {
        type: Boolean,
        default: true
    },
    ext: {
        type: Array,
        default: () => ['pdf','png','jpg']
    }
})
const disabled=ref(false)
const result=computed({
    get: function() {
        if(props.modelValue&&props.modelValue.url){
            disabled.value=true
            return props.modelValue
        }else{
            return {}
        }    
    },
    set: function(val) {
        emit('update:modelValue', val)
    }
})
const emit = defineEmits(['update:modelValue', 'on-success'])
const uploadData = ref({
    imageViewerVisible: false,
    progress: {
        preview: '',
        percent: 0
    }
})

// 移除
function remove() {
    result.value={}
    setTimeout(() => {
        disabled.value=false
    }, 0);
    emit('on-success', {})
}
function beforeUpload(file) {
    const fileName = file.name.split('.')
    const fileExt = fileName[fileName.length - 1]
    const isTypeOk = props.ext.indexOf(fileExt) >= 0
    const isSizeOk = file.size / 1024 / 1024 < props.size
    if (!isTypeOk) {
        proxy.$message.error(`上传文件只支持 ${ props.ext.join(' / ') } 格式！`)
    }
    if (!isSizeOk) {
        proxy.$message.error(`上传文件大小不能超过 ${props.size}MB！`)
    }
    if (isTypeOk && isSizeOk) {
        uploadData.value.progress.preview = URL.createObjectURL(file)
    }
    return isTypeOk && isSizeOk
}
function onProgress(file) {
    uploadData.value.progress.percent = ~~file.percent
}
function onSuccess(res) {
    uploadData.value.progress.preview = ''
    uploadData.value.progress.percent = 0
    result.value=res
    disabled.value=true
    emit('on-success', res)
}
function upLoadFile(content) {
    var form = new FormData()
    form.append('file', content.file)
    api.post(content.action, form).then(res => {
        if (res.url) {
            content.onSuccess(res)
        } else {
            content.onError('文件上传失败, code:' + res.data.code)
        }
    }).catch(error => {
        if (error.response) {
            content.onError('文件上传失败,' + error.response.data)
        } else if (error.request) {
            content.onError('文件上传失败，服务器端无响应')
        } else {
            content.onError('文件上传失败，请求封装失败')
        }
    })
}
</script>

<template>
    <div class="upload-container">
        <el-upload
            :show-file-list="false"
            :headers="props.headers"
            action="/api/app/file/upload"
            :http-request="upLoadFile"
            :data="props.data"
            :name="props.name"
            :before-upload="beforeUpload"
            :on-progress="onProgress"
            :on-success="onSuccess"
            :disabled="disabled"
            drag
        >
            <el-image v-if="result.url==null" :style="`width:${width}px;height:50px;`" fit="fill">
                <template #error>
                    <div class="image-slot">
                        <svg-icon name="el-icon-plus" />
                    </div>
                </template>
            </el-image>
            <div v-else class="content">
                <a :href="result.url" target="_blank" :title="result.name" fit="fill">{{ result.name }}</a>
                <el-button style="margin-left: 20px;" size="small" type="danger" @click="remove">移除</el-button>
            </div>
        </el-upload>
        <div v-if="!notip" class="el-upload__tip">
            <div style="display: inline-block;">
                <el-alert :title="`上传文件支持 ${ ext.join(' / ') } 格式，且文件大小不超过 ${ size }MB`" type="info" show-icon :closable="false" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.upload-container {
    line-height: initial;
}
.image {
    position: relative;
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
}
:deep(.el-upload) {
    .el-upload-dragger {
        width: auto;
        height: auto;
        &.is-dragover {
            border-width: 1px;
        }
        .el-image {
            display: block;
            .image-slot {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                color: #909399;
                background-color: transparent;
                i {
                    font-size: 30px;
                }
            }
        }
        .progress {
            position: absolute;
            top: 0;
            &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background-color: rgb(0 0 0 / 20%);
            }
            .el-progress {
                z-index: 1;
                @include position-center(xy);
                .el-progress__text {
                    color: #fff;
                }
            }
        }
    }
}
</style>
