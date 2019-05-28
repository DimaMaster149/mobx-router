<template>
  <div>
    <div v-for="photo in store.curiosityPhotos" :key="photo.id">
      <div>
        <img :src="photo.img_src" :alt="photo.rover.name">
      </div>
    </div>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import { marsStore } from "../store/MarsStore";

export default observer({
  name: "CuriosityPhotos",
  data() {
    return {
      store: marsStore
    };
  }
});
</script>