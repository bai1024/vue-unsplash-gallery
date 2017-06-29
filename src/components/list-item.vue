<template lang="pug">
.list-item
  div
    img.list-item__photo(
      :src="photo.urls.regular"
      @click="zoomIn"
    )
  .list-item__info
    .list-item__info-likes
      icon(name="heart")
      span {{ photo.likes }}
    .list-item__info-user
      img(:src="photo.user.profile_image.small")
      a(:href="photo.user.links.html") {{ photo.user.name }}
    a.list-item__info-download(:href="photo.urls.raw", download)
      | Download
</template>

<script>
import Icon from "vue-awesome/components/Icon"
import { bus } from "@/global"

export default {
  props:{
    photo:{
      type: Object,
      required: true
    },
  },
  methods: {
    zoomIn() {
      console.log('adfa')
      bus.$emit("zoomIn",this.photo.urls.full)
    }
  },
  components:{ Icon }
}
</script>

<style lang="stylus" scoped>
.list-item
  margin-bottom: 70px

.list-item__photo
  width: 100%
  background-color: #ddd
  cursor: zoom-in

.list-item__info
  display: flex
  align-items: center
  justify-content: space-between
  margin-top: 20px

.list-item__info-likes
  display: flex
  align-items: center
  margin: 0
  color: #999
  border: 1px solid #ddd
  padding: 6px 15px
  border-radius: 5px
  > svg
    color: #f15151
    margin-right: 5px

.list-item__info-user
  display: flex
  align-items: center
  > img
    border-radius: 50%
    margin-right: 10px
  > a
    color: #999
    &:hover
      color: #111

.list-item__info-download
  color: #999
  fill: currentColor
  font-weight: bold
  background-color: transparent
  border: #ddd 1px solid
  border-radius: 5px
  padding: 6px 15px;
  text-decoration: none
  &:hover
    color: #111
    border-color: #999
    box-shadow: 0 1px 2px rgba(0,0,0,.08)
    transition: all .2s ease-in-out;
</style>
