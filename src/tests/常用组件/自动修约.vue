<script setup>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})

const handler = {
    // 拦截目标对象的属性读取操作
    get(target, prop, receiver) {
        console.log(`访问了${prop}属性`);
        // 使用Reflect.get执行目标对象的属性读取操作
        return Reflect.get(target, prop, receiver);
    },
    // 拦截目标对象的属性设置操作
    set(target, prop, value, receiver) {
        console.log(`设置了${prop}属性:`, value);
        // 使用Reflect.set执行目标对象的属性设置操作
        return Reflect.set(target, prop, value, receiver);
    },
}

var proxyData = new Proxy(data.value.dataList, handler);


function defineProxy(res) {
    res.forEach((item, index) => {
        // item.record.standard = new Proxy(item.data.standard, descripterArray(item, rule));
        if (item.data && item.numberRules) {
            let rules = item.numberRules;
            for (let rule in rules) {
                if (Array.isArray(item.data[rule])) {
                    for (let i = 0; i < item.data[rule].length; i++) {
                        Object.defineProperty(data.value.dataList[index].data[rule][i], 'ParamValue', descripterSingle(data.value.dataList[index].numberRules, rule, data.value.dataList[index].data[rule][i].ParamValue))
                    }
                }
                else {
                    Object.defineProperty(data.value.dataList[index].data[rule], 'ParamValue', descripterSingle(data.value.dataList[index].numberRules, rule, data.value.dataList[index].data[rule].ParamValue));
                }
            }
        }

    })
}
function descripterSingle(rules, item, value) {
    return {
        enumerable: true,
        get: function () {
            return value;
        },
        set: function (newvalue) {
            if (!isRealNum(newvalue)) {
                value = '';
                return;
            }
            for (let sub_item in rules[item]) {
                if (rules[item][sub_item].parallelTestNorm != 0) {
                    newvalue = rulePrecision(newvalue,
                        rules[item][sub_item].IsDecimalPlace,
                        rules[item][sub_item].IsKeep25A,
                        rules[item][sub_item].DecimalPlace,
                        rules[item][sub_item].Keep25A
                    );
                }
            }
            value = newvalue;
            proxy.$forceUpdate()
        }
    }
}
onMounted(() => {

})
</script>
<template>
  <div>
  </div>
</template>
<style scoped lang='less'>

</style>