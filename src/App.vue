<template lang='pug'>
#app
  .gallery__header
    h1 Unsplash Gallery
    p
      span Beautiful,free photos.
      br
      span Gifted by the world's most generous community of photographers. 🎁
  .gallery__zoom-in(
    v-show="zoomInPhotoURL !== ''"
    :style="{backgroundImage:'url(' + zoomInPhotoURL + ')'}",
    @click="zoomInPhotoURL = ''"
  )
  .gallery__layout
    icon-list(
      :classObj="{ 'gallery__layout__btn--active': layout === 1 }"
      @click.native="layout = LIST_LAYOUT"
    )
    icon-grid(
      :classObj="{ 'gallery__layout__btn--active': layout === GRID_LAYOUT }"
      @click.native="layout = GRID_LAYOUT"
    )
  template(v-if="photos")
    .gallery__list__container(v-if="layout === LIST_LAYOUT")
      list-item(
        v-for="photo in photos",
        :key="photo.id",
        :photo="photo",
        @zoomIn="zoomInPhoto",
      )
    .gallery__grid__container(v-if="layout === GRID_LAYOUT")
      .gallery__grid
        grid-item(
          v-for="photo in data1",
          :key="photo.id",
          :photo="photo",
          @zoomIn="zoomInPhoto",
        )
      .gallery__grid
        grid-item(
          v-for="photo in data2",
          :key="photo.id",
          :photo="photo",
          @zoomIn="zoomInPhoto",
        )
      .gallery__grid
        grid-item(
          v-for="photo in data3",
          :key="photo.id",
          :photo="photo",
          @zoomIn="zoomInPhoto",
        )
  loading(v-else)
</template>

<script>
import axios from 'axios'
import ListItem from '@/components/list-item'
import GridItem from '@/components/grid-item'
import Loading from '@/components/loading'
import IconList from '@/components/icon-list'
import IconGrid from '@/components/icon-grid'

const clientId = '47da73da2b740608b32dd1d201e72606000e8db1df885e6f2c72843cddca23a8'

export default {
  data() {
    return {
      page: 1,
      layout: 1,
      photos: null,
      zoomInPhotoURL: null,
      LIST_LAYOUT: 1,
      GRID_LAYOUT: 2,
    }
  },
  methods:{
    fetchData:function() {
      axios.get('https://api.unsplash.com/photos', {
        params: {
          page: this.page++,
          per_page: 30,
          client_id: clientId
        }
      }).then(res => {
        this.photos = res.data
        this.data1 = this.photos.filter((d,i) => i % 3 === 0)
        this.data2 = this.photos.filter((d,i) => i % 3 === 1)
        this.data3 = this.photos.filter((d,i) => i % 3 === 2)
      })
    },
    waypointHandler(){

    },
    zoomInPhoto(fullURL){
      this.zoomInPhotoURL = fullURL
    }
  },
  computed: {

  },
  created(){
    this.fetchData()
  },
  components: {
    ListItem,
    GridItem,
    Loading,
    IconList,
    IconGrid,
  },
}
</script>

<style src='normalize.css'></style>
<style lang='stylus'>
#app
  width: 80%
  max-width: 1176px
  margin: auto
  font-family: Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.gallery__header
  padding-top: 60px
  padding-bottom: 72px
  text-align: left
  > h2
    font-size: 18px
    font-weight: 400
    color: #111
    line-height: 1.6

.gallery__zoom-in
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: 6
  background-position: 50%
  background-size: cover
  cursor: zoom-out
  transition: transform .35s cubic-bezier(.77,0,.175,1),-webkit-transform .35s cubic-bezier(.77,0,.175,1);

.gallery__layout
  margin-bottom: 24px;
  text-align: right
  svg
    width: 20px;
    fill: gray;
    margin: 0 10px;
    cursor: pointer;
    &:hover
      fill: #111
  .gallery__layout__btn--active
    fill: #111

.gallery__grid__container
  display: flex
  justify-content: space-between
  .gallery__grid
    width: 32%
</style>
