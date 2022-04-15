<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})

let betterMsg = `**${props.msg}**`

let count = ref(0)
function addCount() {
  count.value++
}
</script>

<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>{{ props.msg }}</p>
    <p>{{ betterMsg }}</p>
    <hr />
    <button @click="addCount()">Plus 1</button>
    <span id="value">{{ count }}</span>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: purple;
}
</style>
