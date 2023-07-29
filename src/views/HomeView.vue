<template>
  <MfpPopup />
  <HibrizyPopup />
  <AboutPopup />
  <Preloader />
  <div class="hibrizy_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInUp" data-exit="">
    <!-- WAVE DOTS -->
    <div class="waves"></div>
    <!-- WAVE DOTS -->

    <!-- SETTINGS -->
    <Settings />
    <!-- HEADER -->
    <HeaderC />
    <!-- /HEADER -->

    <!-- CONTENT -->
    <div class="hibrizy_tm_content">
      <!-- HOME -->
      <Home />
      <!-- /HOME -->

      <!-- ABOUT -->
      <About />
      <!-- /ABOUT -->

      <!-- PORTFOLIO -->
      <Portofolio />
      <!-- /PORTFOLIO -->

      <!-- NEWS -->
      <News />
      <!-- /NEWS -->

      <!-- CONTACT -->
      <Contact />
      <!-- /CONTACT -->
    </div>
    <!-- /CONTENT -->

    <!-- MAGIC CURSOR -->
    <Cursor />
    <!-- /MAGIC CURSOR -->
  </div>
</template>

<script>
import Preloader from '@/components/layout/Preloader.vue'
import AboutPopup from '@/components/popup/AboutPopup.vue'
import HibrizyPopup from '@/components/popup/HibrizyPopup.vue'
import MfpPopup from '@/components/popup/MfpPopup.vue'
import Cursor from '@/components/layout/Cursor.vue'
import HeaderC from '@/components/layout/Header.vue'
import Settings from '@/components/layout/Settings.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import Portofolio from '@/components/Portofolio.vue'
import { dataImage, imgToSVG } from '@/utilits'
import { waves } from "./waves"

export default {
  name: `HomeView`,
  mounted() {
    waves()
    imgToSVG()
    dataImage()
  },
  components: {
    Home,
    About,
    Portofolio,
    News,
    Contact,
    HeaderC,
    Settings,
    Cursor,
    Preloader,
    MfpPopup,
    HibrizyPopup,
    AboutPopup
  }
}
</script>

<!-- about chart -->
