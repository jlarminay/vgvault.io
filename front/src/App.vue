<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function clearStorage() {
  const confirmation = window.confirm('Are you sure you want to clear all LocalStorage?')
  if (confirmation) {
    localStorage.clear()
    router.go()
  }
}
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink> | <RouterLink to="/users">Users</RouterLink> |
          <RouterLink to="/dictionary">Dictionary</RouterLink> |
          <a href="#" @click.prevent="clearStorage()">Clear Storage</a>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style lang="scss"></style>
