<template lang="pug">
  .gallery__photo-wrapper
    .gallery__photo__container
      img.gallery__photo(:src="photo.urls.regular")
    .gallery__photo__info
      .gallery__photo__info-likes
        icon(name="heart") 
        span {{ photo.likes }}
      .gallery__photo__info-user
        img(:src="photo.user.profile_image.small")
        a(:href="photo.user.links.html") {{ photo.user.name }}
      a.gallery__photo__info-download Download


</template>

<script>
import Icon from "vue-awesome/components/Icon"
import "vue-awesome/icons/heart"


export default {
  props:{
    photo:{
      type: Object,
      required: true
    },
    index:{
      type: Number,
      required:true
    }
  },
  data () {
    return {
      
    }
  },
  components:{ Icon }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  // .gallery__photo-wrapper
  //   margin-bottom: 70px
  //   .gallery__photo
  //     width: 100%
  //     background-color: #ddd
  //   .gallery__photo__info
  //     display: flex
  //     align-items: center
  //     justify-content: space-between
  //     margin-top: 20px
  //     .gallery__photo__info-likes
  //       display: flex
  //       align-items: center
  //       margin: 0
  //       color: #999
  //       border: 1px solid #ddd
  //       padding: 6px 15px
  //       border-radius: 5px
  //       > svg
  //         color: #f15151
  //         margin-right: 5px
  //     .gallery__photo__info-user
  //       display: flex
  //       align-items: center
  //       > img 
  //         border-radius: 50%
  //         margin-right: 10px
  //       > a
  //         color: #999
  //         &:hover
  //           color: #111
  //     .gallery__photo__info-download
  //       color: #999
  //       fill: currentColor
  //       font-weight: bold
  //       background-color: transparent
  //       border: #ddd 1px solid
  //       border-radius: 5px
  //       padding: 6px 15px;
  //       &:hover
  //         color: #111
  //         border-color: #999
  //         box-shadow: 0 1px 2px rgba(0,0,0,.08)
  //         transition: all .2s ease-in-out;
</style>
