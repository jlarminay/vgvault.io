<script setup>
import { HomeIcon, UserIcon } from 'vue-tabler-icons'
</script>

<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <RouterLink active-class="active" class="nav-link" to="/">
            <HomeIcon />
            Home
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink active-class="active" class="nav-link" to="/users">
            <UserIcon />
            Users
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);

  .nav-link {
    font-weight: 500;
    color: #333;
    font-size: 20px;

    &:hover,
    &.active {
      .icon-tabler {
        color: inherit;
      }
    }

    &.active {
      color: #2470dc;
    }

    .icon-tabler {
      width: 20px;
      height: 20px;
      vertical-align: text-bottom;
      margin-right: 4px;
      color: #727272;
    }
  }
}
.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}
</style>
