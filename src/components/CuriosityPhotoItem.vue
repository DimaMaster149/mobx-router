<template>
  <div class="w-full h-full">
    <div class="w-full h-35">
      <!-- <img :src="photo.img_src" :alt="photo.rover.name"> -->
    </div>
    <div class="flex flex-col w-full">
      <div>
        Earth day: {{photo.earth_date}}
      </div>
      <div>
        Soul: {{photo.sol}}
      </div>
    </div>
    
   
  </div>
</template>

<script>
export default {
  name: "CuriosityPhotoItem",
  props: {
    photo: {
      type: Object,
      required: true
    }
  }
}
</script>