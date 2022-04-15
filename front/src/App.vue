<script setup>
import { ref } from 'vue'
import HeaderComponent from './components/layouts/HeaderComponent.vue'
import SidebarComponent from './components/layouts/SidebarComponent.vue'

let loggedIn = ref(true)
</script>

<template>
  <div>
    <!-- if logged in -->
    <div id="wrapper" v-if="loggedIn">
      <!-- header -->
      <HeaderComponent />

      <!-- main wrapper -->
      <div class="container-fluid">
        <div class="row">
          <!-- sidebar -->
          <SidebarComponent />

          <!-- main view -->
          <main :class="'col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3'">
            <RouterView />
          </main>
        </div>
      </div>
    </div>

    <!-- if not logged in -->
    <div id="wrapper" v-if="!loggedIn">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss"></style>
