<script setup>
import { ref, onMounted } from 'vue'
import createDictionaryStore from '@/stores/dictionary.store'

const dictionaryStore = createDictionaryStore()
let searchString = ref('')
let currentWord = ref('')

onMounted(() => {
  dictionaryStore.status = 'ready'
})

async function search() {
  this.currentWord = await dictionaryStore.search(searchString.value)
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Status: {{ dictionaryStore.status }}</p>

    <form @click.prevent="">
      <input id="search" type="text" v-model="searchString" />
      <button v-if="dictionaryStore.status !== 'loading'" type="submit" @click="search()">Search</button>
      <p v-if="dictionaryStore.status === 'error'" style="color: red">Nothing found</p>
    </form>

    <pre>{{ currentWord || 'No word selected' }}</pre>
    <pre>{{ dictionaryStore.words }}</pre>
  </div>
</template>

<style scoped lang="scss">
.about {
  h1 {
    color: red;
  }
}
</style>
