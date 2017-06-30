<template lang="pug">
.photo-grid
  .photo-grid__column(
    v-for="(c, i) in columns(3)"
  )
    grid-item(
      v-for="photo in c.slice(0,-2)",
      :key="photo.id",
      :photo="photo",
    )
    v-waypoint(
      v-if="i === columnNumber - 1",
      @waypoint-in="nextBatch",
    )
    grid-item(
      v-for="photo in c.slice(-2)",
      :key="photo.id",
      :photo="photo",
    )
</template>

<script>
import GridItem from "@/components/grid-item"
import { bus } from "@/global"

export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  data() {
    return{
      columnNumber: 3,
    }
  },
  methods: {
    columns(n) {
      const result = []
      for (var i = 0; i < n;i++){
        result.push(this.photos.filter((_,j) => j % n === i))
      }
      return result
    },
    nextBatch () {
      bus.$emit("nextBatch")
    },
  },
  components: { GridItem }
};
</script>

<style lang="stylus" scoped>
.photo-grid
  display: flex
  justify-content: space-between
  
.photo-grid__column
  width: 32%

</style>