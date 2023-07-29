<template>
  <div id="preloader">
    <div class="loader_line"></div>
  </div>
</template>

<script>
import { hibrizyPreLoader } from '@/utilits'

export default {
  name: `PreloaderC`,
  mounted() {
    hibrizyPreLoader()
  }
}
</script>
