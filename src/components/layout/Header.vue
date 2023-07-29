<template>
  <MobileHeaderComponent />
  <!-- Header -->
  <div class="hibrizy_tm_header">
    <div class="header_inner">
      <div class="logo">
        <a href="#" @click="navFuntions.activeSection('home')"
          ><img src="@/assets/img/logo/logo.png" alt=""
        /></a>
      </div>
      <div class="menu">
        <AppMenu />
      </div>
    </div>
  </div>
</template>

<script>
import { navFuntions } from '@/navFuntions'
import AppMenu from '@/components/layout/Menu.vue'
import MobileHeaderComponent from '@/components/layout/MobileHeader.vue'
export default {
  name: `HeaderC`,
  components: { MobileHeaderComponent, AppMenu },
  data() {
    return {
      navFuntions
    }
  }
}
</script>
