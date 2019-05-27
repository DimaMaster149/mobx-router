<template>
  <div class="home">
    home
    {{store.users}}
  </div>
</template>

<script>
// @ is an alias to /src
import { observer } from "mobx-vue";
import { userStore } from "../store/UserStore";
export default observer({
  name: "home",

  data() {
    return {
      store: userStore
    };
  }
});
</script>
