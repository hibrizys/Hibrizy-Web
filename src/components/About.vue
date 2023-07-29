<template>
  <div class="hibrizy_tm_section" id="about">
    <div class="section_inner">
      <div class="hibrizy_tm_about">
        <div class="left">
          <div class="image">
            <img src="https://github.com/hibrizys/Hibrizy-Web/blob/main/src/assets/img/thumbs/1-1.jpg?raw=true" alt="" />
            <div class="main" data-img-url="https://github.com/hibrizys/Hibrizy-Web/blob/main/src/assets/img/about/izy.jpg?raw=true"></div>
          </div>
        </div>
        <div class="right">
          <div class="short">
            <h3 class="name">Hibrizy <span class="coloring">Sulistiyo</span></h3>
            <h3 class="job">
              <AnimationText />
            </h3>
          </div>
          <div class="text">
            <p>
              My name is <span>Hibrizy Sulistiyo.</span> A passionate Information Technology
              graduate with a keen interest in Frontend Development, Backend Development, and
              DevOps.
            </p>
          </div>
          <div class="hibrizy_tm_button" id="aboutPopup">
            <a href="#">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimationText from './AnimationText.vue'
export default {
  name: `AboutApp`,
  data() {
    return {
      open: false
    }
  },
  components: {
    AnimationText
  }
}
</script>

<style scoped>
.hibrizy_tm_modalbox {
  top: -90px;
}
</style>
