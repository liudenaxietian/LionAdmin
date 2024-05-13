<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <nav-bar />
    </div>
    <div class="main-container">
      <sidebar
        id="guide-sidebar"
        class="sidebar-container"
        style="background-color: #304156"
      />
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/layout/components/Sidebar/index.vue'
import AppMain from '@/layout/components/AppMain.vue'
import NavBar from '@/layout/components/NavBar.vue'
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
  z-index: 9999;
  width: calc(100%);
  background-color: aquamarine;
}
</style>
