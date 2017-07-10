<template lang="pug">
.cover-image(
  v-show="url !== ''"
  @click="hide"
)
  _loading(v-if="isLoading")
  .cover-image__image(
    v-else,
    :style="{backgroundImage:'url(' + url + ')'}",
  )
</template>

<script>
import { bus } from "@/global"

export default {
  data() {
    return {
      url: "",
      isLoading: false,
    }
  },
  methods: {
    show(fullURL) {
      this.url = fullURL
      this.isLoading = true
      const img = new Image()
      img.src = fullURL
      img.addEventListener("load", () => {
        this.isLoading = false
      })
      // prevent scroll
      window.onwheel = function(e) {
        e.preventDefault()
      }
    },
    hide() {
      this.url = ""
      window.onwheel = null
    },
  },
  created() {
    bus.$on("zoomIn", this.show)
  },
}
</script>

<style lang="stylus">
.cover-image
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: 999
  background-color: rgba(0, 0, 0, 0.5)
  cursor: zoom-out
  > ._loading
    position: absolute
    left: 0
    right: 0
    top: 25vh

.cover-image__image
  height: 100%
  background-position: 50% 50%
  background-size: cover
</style>
