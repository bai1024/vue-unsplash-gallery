<template lang="pug">
.photo-list
  list-item(
    v-for="photo in photos",
    :key="photo.id",
    :photo="photo",
  )
</template>

<script>
import ListItem from "@/components/list-item"

export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  components: { ListItem }
};
</script>

<style lang="css" scoped>
</style>