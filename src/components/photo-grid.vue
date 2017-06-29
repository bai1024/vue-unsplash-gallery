<template lang="pug">
.photo-grid
  .photo-grid__column(
    v-for="c in columns(3)"
  )
    grid-item(
      v-for="photo in c",
      :key="photo.id",
      :photo="photo",
    )
</template>

<script>
import GridItem from "@/components/grid-item"

export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  methods: {
    columns(n) {
      const result = []
      for (var i = 0; i < n;i++){
        result.push(this.photos.filter((_,j) => j % n === i))
      }
      return result
    }
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