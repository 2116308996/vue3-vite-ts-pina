<script setup>
const { proxy } = getCurrentInstance()

const props = defineProps({
    id: {
        type: [Number, String],
        default: ''
    }
})

const data = ref({
    loading: false,
    playerOptions: null,
    url: null,
    form: {
        id: props.id
    }
})

onMounted(() => {
    if (data.value.form.id != '') {
        getInfo()
    } else {
        data.value.form.id = 0
    }
})

function getInfo() {
    data.value.loading = true
    proxy.$api.get('/api/app/three-card-video/' + data.value.form.id + '/one'
    ).then(res => {
        data.value.loading = false
        if (res.attachments.length > 0) {
            initVideo(res.attachments[0].url)
            data.value.url = res.attachments[0].url
        }
    })
}

function initVideo(url) {
    data.value.playerOptions = {
        controls: true,
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, // 如果true,浏览器准备好时开始自动播放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
            {
                withCredentials: false,
                type: 'video/mp4',
                src: url
            }],
        flash: {
            hls: { withCredentials: false }
        },
        html5: {
            hls: { withCredentials: false }
        },
        liveui: true,
        notSupportedMessage: '此视频暂无法播放,请稍后再试'
    }
}
</script>

<template>
    <div v-loading="data.loading">
        <VideoPlayer
            v-if="data.url"
            ref="videoPlayer"
            style="width:800px;height:450px"
            :options="data.playerOptions"
        />
    </div>
</template>

<style lang="scss" scoped>
// scss
</style>
