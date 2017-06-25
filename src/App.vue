<template lang='pug'>
  #app
    .gallery__header
      h1 Unsplash Gallery
      h2 Beautiful,free photos. 
        br 
        | Gifted by the world's most generous community of photographers. 🎁
    .gallery__zoomin(v-bind:class="{ gallery__zoomin__hide:!isActive }",v-bind:style="{backgroundImage:'url(' + url + ')'}",v-on:click="isActive = false;url = null")
    .gallery__layout
      <svg v-bind:class="{'gallery__layout__btn--active': isDefault }" v-on:click="isDefault = true" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-labelledby="icon-title-4721 icon-desc-4722" aria-hidden="false" data-reactid=".rwftimv01s.0.4.0.3.0.1.$single.0"><path d="M30 14c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-28c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2m0 18c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2" data-reactid=".rwftimv01s.0.4.0.3.0.1.$single.0.1"></path></svg>
      
      <svg version="1.1"  v-bind:class="{'gallery__layout__btn--active': !isDefault }" v-on:click="isDefault = false" viewBox="0 0 32 32" width="32" height="32" aria-labelledby="icon-title-4723 icon-desc-4724" aria-hidden="false" data-reactid=".rwftimv01s.0.4.0.3.0.1.$multi.0"><path d="M0 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10c-1.104 0-2 0.894-2 2zM2 18c-1.104 0-2 0.894-2 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10zM20 18c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10zM20 0c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10z" data-reactid=".rwftimv01s.0.4.0.3.0.1.$multi.0.1"></path></svg>
    
    template(v-if="photos")
      .gallery__list__container(v-if="isDefault")
        photo-list(
          v-for="(photo,index) in photos",
          :key="photo.id",
          :photo="photo", 
          :index="index",
          v-on:listenToChildEvent="showMsg"
        )

      .gallery__grid__container(v-if="!isDefault")
        .gallery__grid
          photo-grid(
            v-for="photo in data1",
            :key="photo.id",
            :photo="photo",
          )
        .gallery__grid
          photo-grid(
            v-for="photo in data2",
            :key="photo.id",
            :photo="photo",
          )
        .gallery__grid
          photo-grid(
            v-for="photo in data3",
            :key="photo.id",
            :photo="photo",
          )
    loading(v-else)  
  </div>
</template>

<script>
import axios from 'axios'
import PhotoList from '@/components/photo-list'
import PhotoGrid from '@/components/photo-grid'
import Loading from '@/components/loading'



const clientId = '47da73da2b740608b32dd1d201e72606000e8db1df885e6f2c72843cddca23a8'
export default {
  name: 'app',
  data() {
    return {
      page: 1,
      isDefault: true,
      photos:null,
      data1:null,
      data2:null,
      data3:null,
      url:null,
      isActive:false
    }
  },
  methods:{
    fetchData:function() {
      axios.get('https://api.unsplash.com/photos',{
        params:{
          page: this.page++,
          per_page: 30,
          client_id: clientId
        }
      }).then(res => {
        this.photos = res.data
        this.data1 = this.photos.filter((d,i) => i % 3 === 0)
        this.data2 = this.photos.filter((d,i) => i % 3 === 1)
        this.data3 = this.photos.filter((d,i) => i % 3 === 2)
        console.log(this.data1 )
      })
    },
    waypointHandler(){

    },
    showMsg:function(data){
      this.url = data
      this.isActive = true
    }
  },
  created(){
    this.fetchData();
  },
  computed:{
    // if(this.index === this.data.length - 6){

    // }
  },
  components:{ PhotoList, PhotoGrid, Loading}
}
</script>

<style src='normalize.css'></style>
<style lang='stylus'>
  #app 
    width: 80%;
    max-width: 1176px;
    margin: auto;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  .gallery__header
    padding-top: 60px;
    padding-bottom: 72px;
    text-align: left;
    > h2
      font-size: 18px
      font-weight: 400
      color: #111

  .gallery__zoomin
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    z-index: 6;
    background-position: 50%;
    background-size: cover
    overflow: auto
    cursor: zoom-out
    
  .gallery__zoomin__hide
    pointer-events: none
    
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
