<script setup lang='ts'>
</script>
<template>
    <div class="box">
        <div class="box1">
            <slot name="a"></slot>
        </div>
        <t-collapse>
            <t-collapse-panel header="源代码">
                <slot name="b"></slot>
            </t-collapse-panel>
        </t-collapse>
    </div>
</template>
<style scoped lang="less">
.box {
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    .box1 {
        padding: 5px;
    }

    .box2 {
        font-weight: 800;
        color: rgb(144, 147, 153);
    }

    .box2:hover {
        color: black;
    }
    .box3{
        background-color: rgb(245, 247, 250);
    }
}
</style>