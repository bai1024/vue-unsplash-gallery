<template lang="pug">
  .grid-item
    .grid__item__container(v-on:click="$emit('zoomIn', photo.urls.full)")
      //- img.grid__item(:src="photo.urls.small") 
      .grid__item(v-bind:style="{backgroundImage:'url(' + photo.urls.small + ')',height:(photo.height / (photo.width / 400)) + 'px',backgroundColor: getRandomColor}")
      .grid__item-hover(v-bind:style="{height:(photo.height / (photo.width / 400)) + 'px'}")
    .grid__item__info
      .grid__item__info-likes
        icon(name="heart") 
        span {{ photo.likes }}
      .grid__item__info-user
        img(:src="photo.user.profile_image.small") 
        a(:href="photo.user.links.html") {{ photo.user.name }}
      a.grid__item__info-download(:href="photo.urls.raw", download) 
        icon(name="arrow-down") 
</template>

<script>
import Icon from "vue-awesome/components/Icon"
import "vue-awesome/icons/heart"
import "vue-awesome/icons/arrow-down"



export default {
  props:{
    photo:{
      type: Object,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  computed:{
    getRandomColor:function (){
      var letters = '789ABCDF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 6)];
      }
      return color;
    }
  },
  components:{ Icon }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .grid-item
    margin-bottom: 20px
    position: relative
    &:hover
      .grid__item-hover
        background-image: linear-gradient(180deg,rgba(0,0,0,.25) 0,transparent 40%,transparent 60%,rgba(0,0,0,.3));
      .grid__item__info
        opacity: 1
        transition: opacity 0.5s
      cursor:zoom-in
    .grid__item
      width: 100%;
      background-color: #ddd
      
    .grid__item-hover
      position: absolute
      width: 100%
      top: 0
    .grid__item__info
      opacity: 0
      height: 100%
      &:hover
        opacity: 1
        transition: opacity 0.5s
      .grid__item__info-likes
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
      .grid__item__info-user
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
      .grid__item__info-download
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
