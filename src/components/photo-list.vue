<template lang="pug">
.photo-list
  list-item(
    v-for="photo in photos.slice(0, -2)",
    :key="photo.id",
    :photo="photo",
  )
  v-waypoint(
    @waypoint-in="nextBatch",
  )
  list-item(
    v-for="photo in photos.slice(-2)",
    :key="photo.id",
    :photo="photo",
  )
</template>

<script>
import ListItem from "@/components/list-item"
import { bus } from "@/global"

export default {
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    }
  },
  methods: {
    nextBatch () {
      bus.$emit("nextBatch")
    },
  },
  components:{ ListItem },
}
</script>

<style lang="stylus">
</style>
