<template lang="pug">
svg(
  :class=classObj
  viewBox="0 0 32 32" 
  width="32" 
  height="32" 
)
  <path d="M30 14c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-28c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2m0 18c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2"></path>
</template>

<script>
export default {
  props: {
    classObj: Object,
  },
};
</script>

<style lang="css" scoped>
</style>