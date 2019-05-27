<template>
  <div class="home">{{store.users}}</div>
</template>

<script>
// @ is an alias to /src
import { userStore } from "../store/UserStore";

export default {
  name: "home",

  data() {
    return {
      store: userStore
    };
  },
  mounted() {}
};
</script>
