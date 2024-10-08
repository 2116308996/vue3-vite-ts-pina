import { ref } from 'vue'

function usePagination() {
    const pagination = ref({
        page: 1,
        size: 10,
        total: 0,
        sizes: [10, 20, 50, 100],
        layout: 'total, sizes, ->, prev, pager, next, jumper',
        sort: null,
        order: null,
        getDataList: () => { }
    })

    function getParams(params = {}) {
        const baseParams = {
            from: (pagination.value.page - 1) * pagination.value.size,
            limit: pagination.value.size
        }
        if (pagination.value.sort && pagination.value.order) {
            baseParams.sort = pagination.value.sort
            baseParams.order = pagination.value.order
        }
        Object.assign(baseParams, params)
        return baseParams
    }

    function getParams2(params = {}) {
        const baseParams = {
            skipCount: pagination.value.page,
            maxResultCount: pagination.value.size
        }
        if (pagination.value.sort && pagination.value.order) {
            baseParams.sort = pagination.value.sort
            baseParams.order = pagination.value.order
        }
        Object.assign(baseParams, params)
        return baseParams
    }

    function onSizeChange(size) {
        pagination.value.size = size
        pagination.value.getDataList()
    }

    function onCurrentChange(page) {
        pagination.value.page = page
        pagination.value.getDataList()
    }
    return {
        pagination,
        getParams,
        getParams2,
        onSizeChange,
        onCurrentChange
    }
}

export default usePagination
