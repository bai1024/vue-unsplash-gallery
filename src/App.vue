<template lang='pug'>
#app
  .gallery__header
    h1 Unsplash Gallery
    p
      span Beautiful,free photos.
      br
      span Gifted by the world's most generous community of photographers. 🎁
  cover-image
  .gallery__layout
    icon-list(
      class="gallery__layout__btn",
      :classObj="{'gallery__layout__btn--active': layout === LIST_LAYOUT}",
      @click.native="layout = LIST_LAYOUT",
    )
    icon-grid(
      class="gallery__layout__btn",
      :classObj="{'gallery__layout__btn--active': layout === GRID_LAYOUT}",
      @click.native="layout = GRID_LAYOUT",
    )
  template(v-if="photos")
    photo-list(
      :photos="photos",
      :isLoading="isLoading",
      v-if="layout === LIST_LAYOUT",
    )
    photo-grid(
      :photos="photos",
      v-if="layout === GRID_LAYOUT",
    )
  _loading(v-if="isLoading")
</template>

<script>
import axios from 'axios'
import PhotoList from '@/components/photo-list'
import PhotoGrid from '@/components/photo-grid'
import IconList from '@/components/icon-list'
import IconGrid from '@/components/icon-grid'
import CoverImage from "@/components/cover-image"
import { bus } from "@/global"

const clientId = '47da73da2b740608b32dd1d201e72606000e8db1df885e6f2c72843cddca23a8'

const PAGE_COUNT = 50 // api page
const BATCH_COUNT = 10

export default {
  data() {
    return {
      page: 1,
      layout: 1,
      isLoading: true,
      batch: 1,
      allPhotos: null,
      LIST_LAYOUT: 1,
      GRID_LAYOUT: 2,
    }
  },
  methods:{
    fetchData() {
      return axios.get('https://api.unsplash.com/photos', {
        params: {
          page: this.page++,
          per_page: PAGE_COUNT,
          client_id: clientId
        }
      }).then(res => {
        if(this.allPhotos == null) {
          this.allPhotos = res.data
        } else {
          this.allPhotos = this.allPhotos.concat(res.data)
        }
        this.isLoading = false
      })
    },
  },
  computed: {
    photos() {
      if(this.allPhotos == null) return null
      return this.allPhotos.slice(0, this.batch * BATCH_COUNT)
    },
  },
  created(){
    bus.$on("nextBatch", () => {
      const total = this.allPhotos.length
      if(this.batch * BATCH_COUNT === total) {
        this.isLoading = true
        this.fetchData().then(() => {
          this.batch++
        })
      } else {
        this.batch++
      }
    })
    this.fetchData()
  },
  components: {
    PhotoList,
    PhotoGrid,
    IconList,
    IconGrid,
    CoverImage,
  },
}
</script>

<style src='normalize.css'></style>
<style>
@font-face {
    font-family: 'Courgette';
    src: url('../static/font/courgette-v4-latin-regular.woff2') format('woff2'),
         url('../static/font/courgette-v4-latin-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
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
  padding-bottom: 72px
  text-align: left
  > h1
    font-family: 'Courgette'
    font-size: 36px
    font-weight: 400
    color: #111
  > p
    font-weight: 400
    line-height: 1.6

.gallery__layout
  margin-bottom: 24px;
  text-align: right

.gallery__layout__btn
  width: 20px;
  fill: gray;
  margin: 0 10px;
  cursor: pointer;
  &:hover
    fill: #111

.gallery__layout__btn--active
  fill: #111
</style>
