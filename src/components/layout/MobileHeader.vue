<template>
  <div class="hibrizy_tm_topbar">
    <div class="topbar_inner">
      <div class="logo">
        <a href="#" @click="navFuntions.activeSection('home')"
          ><img src="@/assets/img/logo/logo.png" alt=""
        /></a>
      </div>
      <div class="trigger">
        <div class="hamburger hamburger--slider" @click="navFuntions.toggleMobileMenu()">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hibrizy_tm_mobile_menu" :class="navFuntions.mobileToggle ? 'opened' : ''">
    <div class="inner">
      <div class="menu_list">
        <MenuC />
      </div>
    </div>
  </div>
</template>

<script>
import { navFuntions } from '@/navFuntions'
import MenuC from '@/components/layout/Menu.vue'
export default {
  name: `MobileHeaderC`,
  data() {
    return {
      navFuntions
    }
  },
  components: { MenuC }
}
</script>

<style scoped>
.hibrizy_tm_topbar,
.hibrizy_tm_mobile_menu {
  display: none;
}
@media (max-width: 1040px) {
  .hibrizy_tm_topbar,
  .hibrizy_tm_mobile_menu {
    display: block;
  }
}
</style>
