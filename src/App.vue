<template lang='pug'>
  <div id="app">
    h1 Unsplash Gallery
    .gallery__layout
      <svg v-bind:class="{'gallery__layout__btn--active': isActive }" v-on:click="isActive = true" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-labelledby="icon-title-4721 icon-desc-4722" aria-hidden="false" data-reactid=".rwftimv01s.0.4.0.3.0.1.$single.0"><path d="M30 14c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-28c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2m0 18c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2" data-reactid=".rwftimv01s.0.4.0.3.0.1.$single.0.1"></path></svg>
      
      <svg version="1.1"  v-bind:class="{'gallery__layout__btn--active': !isActive }" v-on:click="isActive = false" viewBox="0 0 32 32" width="32" height="32" aria-labelledby="icon-title-4723 icon-desc-4724" aria-hidden="false" data-reactid=".rwftimv01s.0.4.0.3.0.1.$multi.0"><path d="M0 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10c-1.104 0-2 0.894-2 2zM2 18c-1.104 0-2 0.894-2 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10zM20 18c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10zM20 0c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10z" data-reactid=".rwftimv01s.0.4.0.3.0.1.$multi.0.1"></path></svg>

    .gallery__list__container(v-if="isActive")
      photo-list(
        v-for="(photo,index) in photos",
        :key="photo.id",
        :photo="photo", 
        :index="index"
      )

    .gallery__grid__container(v-if="!isActive")
      p hahah
      //- .gallery__grid
      //-   photo-grid(
      //-     v-for="(data1,index) in photos",
      //-     :key="data1.id",
      //-     :index="index"
      //-   )
      //- .gallery__grid
      //-   photo-grid(
      //-     v-for="(data2,index) in photos",
      //-     :key="data2.id",
      //-     :index="index"
      //-   )
      //- .gallery__grid
      //-   photo-grid(
      //-     v-for="(data3,index) in photos",
      //-     :key="data3.id",
      //-     :index="index"
      //-   )
        
  </div>
</template>

<script>
import axios from 'axios'
import PhotoList from '@/components/photo-list'
import PhotoGrid from '@/components/photo-grid'



const clientId = '47da73da2b740608b32dd1d201e72606000e8db1df885e6f2c72843cddca23a8'
export default {
  name: 'app',
  data() {
    return {
      page: 1,
      isActive: true,
      photos:null,
      data1:null,
      data2:null,
      data3:null,
      isDefault: true
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
        console.log(this.photos)
      })
    },
    waypointHandler(){

    }
  },
  created(){
    this.fetchData();
  },
  computed:{
    // if(this.index === this.data.length - 6){

    // }
  },
  components:{ PhotoList, PhotoGrid }
}
</script>

<style src='normalize.css'></style>
<style lang='stylus'>
  #app 
    width: 80%;
    max-width: 1176px;
    margin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

  .gallery__layout
    margin-bottom: 24px;
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
