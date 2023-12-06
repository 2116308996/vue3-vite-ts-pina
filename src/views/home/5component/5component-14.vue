<script setup lang="ts">
import { ref, isRef, shallowRef, computed, onMounted, getCurrentInstance } from 'vue'
import gsap from 'gsap';
const data = ref({
    names: ["abc", "cba", "nba", "why", "lilei", "hmm", "kobe", "james"],
    keyword: ""
})

onMounted(() => {
    document.querySelectorAll(".boxcolor").forEach(el => {
        el.addEventListener("click", () => {
            gsap.to(".boxcolor", {
                duration: 0.5,
                opacity: 0.5,
                stagger: 0.1,
                width: 100,
                height: 100,
                ease: "back.in"
            })
        })
    })
})
const showNames = computed(() => {
    return data.value.names.filter(item => item.indexOf(data.value.keyword) !== -1)
})
const beforeEnter = (el: any) => {
    el.style.opacity = 0;
    el.style.height = 0;
}
const enter = (el: any, done: any) => {
    console.log(el)
    gsap.to(el, {
        opacity: 1,
        height: "1.5em",
        delay: el.dataset.index * 0.5,
        onComplete: done
    })
}
const leave = (el: any, done: any) => {
    gsap.to(el, {
        opacity: 0.5,
        height: 0,
        delay: el.dataset.index * 0.5,
        onComplete: done
    })
}
const moveinout = () => {

    gsap.to('.boxcolor', {
        duration: 2,
        opacity: 1,
        width: 150,
        height: 150,
        stagger:0.5,
       // delay:1,
        onComplete: () => {
            gsap.to(".boxcolor", {
                duration: 1,
                opacity: 0.5,
                width: 100,
                height: 100,
            })
        }
    })

    // gsap.from(".boxcolor", {
    //             duration: 1,
    //             opacity: 0.5,
    //             width: 150,
    //             height: 150,
    //         })

}
</script>
<template>
    <div>
        <el-button @click="moveinout">进入</el-button>
        <div style="height: 150px;">
            <div class="boxcolor" style="background-color: red;"></div>
            <div class="boxcolor" style="background-color: blue;"></div>
            <div class="boxcolor" style="background-color: yellow;"></div>
            <div class="boxcolor" style="background-color: saddlebrown;"></div>
            <div class="boxcolor" style="background-color: olivedrab;"></div>
        </div>
        <input v-model="data.keyword">
        <transition-group tag="ul" name="coder" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <li v-for="(item, index) in showNames" :key="item" :data-index="index">
                {{ item }}
            </li>
        </transition-group>
    </div>
</template>
  
<style scoped>
.boxcolor {
    height: 100px;
    width: 100px;
    float: left;
    opacity: 0.5;
    margin: 0 20px;
}
</style>
  