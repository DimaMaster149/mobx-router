<template>
  <div class="flex flex-wrap flex-row">
    <div class="w-1/4 h-60" v-for="photo in store.curiosityPhotos" :key="photo.id" >
        <curiosity-photo-item class="w-full h-full" :photo="photo"/>
    </div>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import { marsStore } from "../store/MarsStore";
import CuriosityPhotoItem from "../components/CuriosityPhotoItem"

export default observer({
  name: "CuriosityPhotos",
  components:{
    CuriosityPhotoItem
  },
  data() {
    return {
      store: marsStore
    };
  },
  mounted(){
    console.log(this.store.curiosityPhotos, 'mounted')
  }
});
</script>