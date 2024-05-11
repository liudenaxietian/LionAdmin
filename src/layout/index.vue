<template>
  <div class="app-wrapper">
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      style="background-color: #304156"
    />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
</script>

<style lang="scss" coped>
@import '../styles/mixin.scss';
@import '../styles/variables.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 0;
  width: calc(100% - #{$sideBarWidth});
  background-color: aquamarine;
}
</style>
