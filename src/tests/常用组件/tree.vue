<script setup name="ProjectUnitTree">
import api2 from "@/api/index2";
import { useProjectStore } from "@/store/modules/project";
const emit = defineEmits(["change"]);
const useProject = useProjectStore();
const data = ref({
  options: [],
  treeOptions: {
    id: "id",
    label: "label",
    children: "children",
    isLeaf: "leaf",
  },
  treeVisible: true,
});
function loadNode(node, resolve) {
  if (node.level === 0) {
    useProject
      .getProjectsAll()
      .then((res) => {
        data.value.options = res;
        data.value.options.forEach((item) => {
          item.label = item.shortName;
          item.leaf = false;
          item.isProject = true;
        });
        data.value.options = data.value.options.filter((item) => {
          return item.id != 1;
        });
        return resolve(data.value.options);
      })
      .catch(() => { });
  } else if (node.level === 1) {
    console.log(node.data.id);
    api2.get(
      "/api/app/unit/project-units?projectId=" + node.data.id + "&categoryId=4", {})
      .then((res) => {
        res.forEach((item) => {
          item.label = item.shortName;
          item.leaf = false;
          item.isProject = false;
        });
        return resolve(res);
      });
  } else if (node.level === 2) {
    var params = {
      projectId: node.data.projectId,
      contractorUnitId: node.data.id,
      skipCount: 1,
      maxResultCount: 1000
    }
    api2.get(
      "http://localhost:3500/api/app/project-item-division", { params })
      .then((res) => {
        var result = res.items
        result.forEach((item) => {
          item.label = item.name;
          item.leaf = false;
          item.isProject = false;
        });
        return resolve(result);
      })
  } else if (node.level >= 3) {
    var params = {
      projectId: node.data.projectId,
      contractorUnitId: node.data.contractorUnitId,
      skipCount: 1,
      maxResultCount: 1000,
      parentId: node.data.id
    }
    api2.get(
      "http://localhost:3500/api/app/project-item-division", { params })
      .then((res) => {
        var result = res.items
        result.forEach((item) => {
          item.label = item.name;
          item.leaf = false;
          item.isProject = false;
        });
        return resolve(result);
      })
  }
}
const senode = ref({})
const treeRef = ref(null)
function nodeClick(data, node, item) {
  senode.value = node
  emit("change", data);
}
defineExpose({
  updateTree() {
    senode.value.loaded = false
    senode.value.expand()
  },
  //proxy.$refs['formMode'].updateTree2(addData, data.value.selectedNode)
  updateTree2(data, node) {
        data.isLeaf = true;
        node.isLeaf = false;
        proxy.$refs["treeRef"].append(data, node);

        node.expanded = true;
        proxy.$refs["treeRef"].$forceUpdate();
    },
});

</script>

<template>
  <el-tree v-if="data.treeVisible" ref="treeRef" :props="data.treeOptions" :expand-on-click-node="false"
    :load="loadNode" lazy node-key="id" highlight-current @node-click="(data, node, item) => nodeClick(data, node, item)">
    <template #default="{ node, data }">
      <span v-if="data.isProject" class="label1">项目</span>
      <span v-if="data.categoryId == 4" class="label1">标段</span>
      <span v-if="data.type == 'Unit'" class="label1">单位工程</span>
      <span v-if="data.type == 'Part'" class="label1">分部工程</span>
      <span v-if="data.type == 'SubPart'" class="label1">子分部工程</span>
      <span v-if="data.type == 'Item'" class="label1">分项工程</span>
      <span v-if="data.type == 'SubItem'" class="label1">子分项工程</span>
      <span v-if="data.type == 'Virtual'" class="label1">虚拟节点</span>
      {{ node.label }}
    </template>
  </el-tree>
</template>
<style lang="scss" scoped>
.label1 {
  background-color: rgb(68, 126, 217);
  color: white;
  padding: 0 5px;
  border-radius: 3px;
  margin-right: 5px;
  font-size: 12px;
}
</style>
