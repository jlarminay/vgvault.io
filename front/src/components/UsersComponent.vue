<script setup>
import { onMounted } from 'vue'
import { useUsersStore } from '@/stores/users.store'

const usersStore = useUsersStore()

onMounted(() => {
  usersStore.resetStatus()
})

function getAllUsers() {
  usersStore.getAll()
}
</script>

<template>
  <div>
    <p>Status: {{ usersStore.status }}</p>
    <button v-if="usersStore.status !== 'loading'" @click="getAllUsers()">Get All Users</button>
    <p v-if="usersStore.status === 'error'" style="color: red">Nothing found</p>
    <pre>{{ usersStore.allUsers }}</pre>
  </div>
</template>

<style scoped lang="scss"></style>
