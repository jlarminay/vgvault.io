<script setup></script>

<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">VGVault.io</a>
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">Sign out</a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
/* Navbar */
.navbar {
  .navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
  }

  .navbar-toggler {
    top: 0.25rem;
    right: 1rem;
  }

  .form-control {
    padding: 0.75rem 1rem;
    border-width: 0;
    border-radius: 0;

    &.form-control-dark {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.1);

      &:focus {
        border-color: transparent;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
      }
    }
  }
}
</style>
