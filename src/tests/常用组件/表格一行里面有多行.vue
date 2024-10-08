<!-- eslint-disable vue/no-lone-template -->
<script setup name='TestOrgList'>
import usePagination from '@/util/usePagination.js'
import FormMode from './components/FormMode/index.vue'
const { pagination, onSortChange, getParams2, onSizeChange, onCurrentChange } = usePagination()
const { proxy } = getCurrentInstance()
const data = ref({
    loading: false,
    search: {
        unitIds: null,
        groupType: null,
        teamId: null,
        testType: null
    },
    dataList: [],
    teams: [],
    multipleSelection: [],
    itemDataList: []
})
const changeTeams = () => {

}
const myDialogVisible = ref({
    dialogVisible: false,
    id: null,
    query:{}
})
onMounted(() => {
    getDataList()
})
function getDataList() {
    var params = getParams2()
    params.serialNo = data.value.search.teamId
    data.value.search.testType && (params.testType = data.value.search.testType)
    var str = ""
    if (data.value.search.unitIds) {
        var arrr = data.value.search.unitIds.split(",")
        arrr.forEach(item => {
            str = str + "unitIds=" + item + "&"
        })
        str = str.substring(0, str.length - 1);
    }
    proxy.$api.get("/api/app/test-data-history/test-rebar-group-v2s?" + str, { params })
        .then(res => {
            data.value.dataList = res.items
            var arr = []
            data.value.dataList.forEach((item, index) => {
                item.testInfos.forEach((item2, index2) => {
                    console.log(item2)
                    var a = {}
                    a = Object.assign({}, item, item2)
                    if (index2 == 0) {
                        a.span = item.testInfos.length
                        a.index = index + 1
                    } else {
                        a.span = 0
                        a.index = 0
                    }
                    arr.push(a)
                })
            })
            data.value.dataList = arr
            data.value.dataList.forEach(item => {
                item.name = item.projectName + "(" + item.unitDisPlayName + ')'
                item.groupTimeNew = item.groupTime.substring(0, 10)
            });

            console.log(data.value.dataList)
            data.value.loading = false
            pagination.value.total = res.totalCount
        })
}
function selected(node) {
    console.log("node", node)
    if (node.isProject) {
        data.value.search.unitIds = node.contractorUnitIds.toString()
    } else {
        data.value.search.unitIds = node.contractorUnitId.toString()
    }
    getTeams()
    getDataList()
}
function getTeams() {
    var arr = data.value.search.unitIds.split(",")
    var str = ""
    arr.forEach(item => {
        str = str + "unitIds=" + item + "&"
    })
    proxy.$api.get("/api/app/test-data-history/devices?" + str + "groupType=1")
        .then(res => {
            data.value.teams = res
        })
}
function sizeChange(size) {
    onSizeChange(size).then(() => getDataList())
}
function currentChange(page = 1) {
    onCurrentChange(page).then(() => getDataList())
}
const openDetail = (row) => {
    myDialogVisible.value.dialogVisible = true
    myDialogVisible.value.id = row.id
    myDialogVisible.value.query=row
}
const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
    console.log("row",row.span)
    if (row.span != 0) {
        if (columnIndex < 9 || columnIndex > 13) {
            return [row.span, 1]
        }
    } else {
        if (columnIndex < 9 || columnIndex > 13) {
            return [0, 0]
        }
    }
}
</script>

<template>
    <div>
        <!-- <page-header title='万能机试验数据' /> -->
        <page-main style="margin: 0;">
            <search-bar>
                <el-form :model='data.search' size='default' label-width='120px' label-suffix='：'>
                    <el-row>
                        <el-col :span='7' :gutter='10'>
                            <el-form-item label='项目单位' label-width='100px'>
                                <ProjectContractorUnitTree ref='projectTree' @select='selected' />
                            </el-form-item>
                        </el-col>
                        <el-col :span='6' :gutter='10'>
                            <el-form-item label='设备名称' label-width='100px'>
                                <el-select v-model='data.search.teamId' clearable @change='changeTeams'>
                                    <el-option v-for='item in data.teams' :key='item.id' :label='item.name'
                                        :value='item.id' />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span='5' :gutter='10'>
                            <el-form-item label='试验类型' label-width='100px'>
                                <el-select v-model="data.search.testType">
                                    <el-option label="全部" :value="null"></el-option>
                                    <el-option label="混凝土抗压" :value="1"></el-option>
                                    <el-option label="混凝土轴心抗压" :value="2"></el-option>
                                    <el-option label="建筑砂浆抗压" :value="3"></el-option>
                                    <el-option label="水泥胶砂抗压" :value="4"></el-option>
                                    <el-option label="水泥胶砂抗折" :value="5"></el-option>
                                    <el-option label="钢筋机械连接试验" :value="6"></el-option>
                                    <el-option label="钢筋焊接连接试验" :value="7"></el-option>
                                    <el-option label="热轧带肋钢筋" :value="8"></el-option>
                                    <el-option label="热轧光圆钢筋" :value="9"></el-option>
                                    <el-option label="金属拉伸" :value="10"></el-option>
                                    <el-option label="金属弯曲" :value="11"></el-option>
                                    <el-option label="冷轧带肋钢筋" :value="12"></el-option>
                                    <el-option label="冷轧光圆钢筋" :value="13"></el-option>
                                    <el-option label="钢筋试验" :value="14"></el-option>
                                    <el-option label="混凝土抗折" :value="16"></el-option>
                                    <el-option label="无侧限抗压" :value="17"></el-option>
                                    <el-option label="水泥净浆抗压" :value="31"></el-option>
                                    <el-option label="水泥净浆抗折" :value="21"></el-option>
                                    <el-option label="公路岩体抗压" :value="33"></el-option>
                                    <el-option label="公路工程水泥及水泥混凝土弯拉强度" :value="34"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span='4' :gutter='10'>
                            <el-form-item label='试验编号' label-width='100px'>
                                <el-input v-model="data.search.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span='2' style='padding-left: 20px;'>
                            <el-button type='primary' size='default' icon='el-icon-search' @click='getDataList'>
                                查询
                            </el-button>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="boxcenter">
                                <el-button type="primary" round>总数</el-button>
                                <div class="right">123</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="boxcenter">
                                <el-button type="success" round>合格数</el-button>
                                <div class="right">123</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="boxcenter">
                                <el-button type="danger" round>不合格数</el-button>
                                <div class="right">123</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="boxcenter">
                                <el-button type="warning" round>异常数</el-button>
                                <div class="right">123</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-form>
            </search-bar>
            <el-table ref='table' v-loading='data.loading' :span-method="objectSpanMethod" class='list-table'
                :data='data.dataList' border stripe highlight-current-row :cell-style="{ textAlign: 'center' }"
                :header-cell-style="{ textAlign: 'center' }" @selection-change="handleSelectionChange">
                <!-- <el-table-column type="selection" width="35" /> -->
                <el-table-column prop="index" label="序号" width="50" />
                <el-table-column prop='name' label='单位名称' width="200" />
                <el-table-column prop='testDeviceDeviceName' label='设备名称' width="180" />
                <el-table-column prop='testName' label='试验类型' width="150" />
                <el-table-column prop='testNumber' label='试验编号' width="200" />
                <el-table-column prop='projectPart' label='施工部位' width="120" />
                <el-table-column prop='sampleNumber' label='试块数量' width="70" />
                <el-table-column prop='groupTimeNew' label='试验日期' width="150" />
                <el-table-column prop='diameter' label='直径' width="80" />
                <el-table-column prop='firstValue' label='抗拉力(KN)' width="80" />
                <el-table-column prop='threeValue' label='屈服力(KN)' width="80" />
                <el-table-column prop='tensile' label='抗拉强度(MPa)' width="80" />
                <el-table-column prop='yieldStrength' label='屈服强度(MPa)' width="80" />
                <el-table-column prop='elongation' label='伸长率%' width="80" />
                <el-table-column fixed='right' prop='date' label='试验结果' align='center' width="80">
                    <template #default='scope'>
                        <el-button v-if="scope.row.groupStatus == null" type="warning" size="small"
                            round>未传完</el-button>
                        <el-button v-if="scope.row.groupStatus == 'Unkonw'" type="warning" size="small"
                            round>未知</el-button>
                        <el-button v-if="scope.row.groupStatus == 'Effective'" type="success" size='small' round
                            :title="scope.row.strengthGradeType">合格</el-button>
                        <el-button v-if="scope.row.groupStatus == 'Unqualifi'" type="danger" size="small" round
                            :title="scope.row.strengthGradeType">不合格</el-button>
                        <el-button v-if="scope.row.groupStatus == 'Invalid'" type="danger" size="small" round
                            :title="scope.row.strengthGradeType">{{ scope.row.groupStatusName }}</el-button>
                        <el-button v-if="scope.row.groupStatus == 'InProcess'" type="warning" size="small"
                            round>处理中</el-button>
                        <el-button v-if="scope.row.groupStatus == 'Process'" type="success" size="small"
                            round>已处理</el-button>
                    </template>
                </el-table-column>
                <el-table-column label='操作' width='220' align='center' fixed='right'>
                    <template #default='scope'>
                        <el-button type='primary' size='small' plain @click="openDetail(scope.row)">详情</el-button>
                        <el-button type='success' size='small' plain>生成试验表格</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :current-page='pagination.page' :total='pagination.total' :page-size='pagination.size'
                :page-sizes='pagination.sizes' :layout='pagination.layout' :hide-on-single-page='false'
                class='pagination' background @size-change='sizeChange' @current-change='currentChange' />
            <FormMode v-model="myDialogVisible.dialogVisible" :id="myDialogVisible.id" 
            :search="data.search" :query="myDialogVisible.query"></FormMode>
        </page-main>
    </div>
</template>

<style lang='scss' scoped>
.el-pagination {
    margin-top: 20px;
}

.boxcenter {
    display: flex;
    justify-content: center;
    align-items: center;

    .right {
        margin-left: 20px;
        font-size: 24px;
        font-weight: 700;
    }
}
</style>
