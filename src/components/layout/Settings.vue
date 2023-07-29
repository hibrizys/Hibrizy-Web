<template>
  <div class="hibrizy_tm_settings" :class="toggle ? 'opened' : ''">
    <div class="icon" @click="toggle = !toggle">
      <img class="svg" src="@/assets/img/setting.svg" alt="" />
      <a class="link" href="#"></a>
    </div>
    <div class="wrapper">
      <span class="title">Unlimited Colors</span>
      <ul class="colors">
        <li v-for="(color, i) in colors" :key="i">
          <a
            href="#"
            :data-color="color"
            :style="{ 'background-color': color }"
            @click="changeColor(color)"
          ></a>
        </li>
      </ul>
      <span class="title">Magic Cursor</span>
      <ul class="cursor">
        <li>
          <a
            class="show"
            :class="magicCursor === 'show' ? 'showme' : ''"
            @click="magicCursorFun('show')"
            href="#"
          ></a>
        </li>
        <li>
          <a
            class="hide"
            :class="magicCursor === 'hide' ? 'showme' : ''"
            href="#"
            @click="magicCursorFun('hide')"
            ><img class="svg" src="@/assets/img/arrow.svg" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: `SettingsC`,
  data() {
    return {
      toggle: false,
      magicCursor: true,
      colors: [
        '#4169e1',
        '#66B95C',
        '#ff9800',
        '#ff5e94',
        '#fa5b0f',
        '#f39977',
        '#9200ee',
        '#00D4BD',
        '#5e9e9f',
        '#EB4A4C',
        '#666d41',
        '#fe0000'
      ]
    }
  },
  methods: {
    changeColor(value) {
      this.color = value
      document.querySelector('html').style.setProperty('--main-color', value)
      localStorage.setItem('hibrizy-color', value)
    },
    magicCursorFun(value) {
      this.magicCursor = value
      localStorage.setItem('hibrizy-cursor', value)
      const hibrizy_tm_all_wrap = document.querySelector('.hibrizy_tm_all_wrap')
      hibrizy_tm_all_wrap.setAttribute('data-magic-cursor', value)
    }
  },
  mounted() {
    const color = localStorage.getItem('hibrizy-color'),
      cursor = localStorage.getItem('hibrizy-cursor')
    if (color) {
      this.changeColor(color)
    }
    if (cursor) {
      this.magicCursorFun(cursor)
    }
  }
}
</script>

<style scoped>
.colors li {
  margin: 0 2.5px;
}
</style>
