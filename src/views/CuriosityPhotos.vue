<template>
  <div>
    <curiosity-photo-item class="w-1/4" v-for="photo in store.photos" :key="photo.id" :photo="photo" />
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
  }
});
</script>