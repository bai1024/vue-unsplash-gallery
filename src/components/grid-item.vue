<template lang="pug">
  .grid-item(@click="zoomIn")
    .grid-item__photo(:style="photoStyle")
    .grid-item__hover
    .grid-item__info
      .grid-item__info-likes
        icon(name="heart")
        span {{ photo.likes }}
      .grid-item__info-user
        img(:src="photo.user.profile_image.small")
        a(:href="photo.user.links.html") {{ photo.user.name }}
      a.grid-item__info-download(:href="photo.urls.raw", download)
        icon(name="arrow-down")
</template>

<script>
import Icon from "vue-awesome/components/Icon"
import { getRandomColor } from "@/utlis"
import { bus } from "@/global"

export default {
  props:{
    photo:{
      type: Object,
      required: true
    }
  },
  methods:{
    zoomIn() {
      bus.$emit("zoomIn",this.photo.urls.full)
    }
  },
  computed:{
    photoStyle() {
      return{
        backgroundImage:`url(${this.photo.urls.small})`,
      }
    }
  },
  mounted() {
    const width = this.$el.clientWidth
    const height = this.photo.height / this.photo.width * width
    this.$el.style.height = height + "px"
    this.$el.style.backgroundColor = getRandomColor()
  },
  components:{ Icon }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.grid-item
  margin-bottom: 20px
  position: relative
  cursor:zoom-in
  &:hover
    .grid-item__hover
      background-image: linear-gradient(180deg,rgba(0,0,0,.25) 0,transparent 40%,transparent 60%,rgba(0,0,0,.3));
    .grid-item__info
      opacity: 1
      transition: opacity 0.5s

.grid-item__photo
  background-color: #ddd
  position: absolute
  width: 100%;
  height: 100%

.grid-item__hover
  position: absolute
  width: 100%;
  height: 100%

.grid-item__info
  opacity: 0
  height: 100%
  &:hover
    opacity: 1
    transition: opacity 0.5s

.grid-item__info-likes
  position: absolute
  top: 20px;
  right: 20px;
  margin: 0
  color: #999
  background: #f0f0f0;
  opacity: .8;
  padding: 6px 15px
  border-radius: 5px
  display: flex
  align-items: center
  > svg
    color: #f15151
    margin-right: 5px
  &:hover
    opacity: .9
    transition: all .2s ease-in-out;

.grid-item__info-user
  position: absolute
  bottom: 20px;
  left: 10px;
  display: flex
  align-items: center
  > img
    border-radius: 50%
    margin-right: 10px
  > a
    color: #ffffff
    opacity: 0.8
    text-decoration: none
    &:hover
      opacity: 1
      transition: all .2s ease-in-out;

.grid-item__info-download
  color: #999
  fill: currentColor
  font-weight: bold
  background-color: #ffffff
  border-radius: 5px
  padding: 6px 15px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  opacity: .7;
  &:hover
    color: #111
    opacity: .9
    box-shadow: 0 1px 2px rgba(0,0,0,.08)
    transition: all .2s ease-in-out;
</style>
