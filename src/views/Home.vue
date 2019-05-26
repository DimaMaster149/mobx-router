<template>
  <div class="home">{{store.users}}</div>
</template>

<script>
// @ is an alias to /src
import { UserStore } from "../store/UserStore";

export default {
  name: "home",

  data() {
    return {
      store: new UserStore()
    };
  },
  mounted() {}
};
</script>
