<template>
  <div>
    <div v-for="user in store.users" :key="user.id.value">
      <div>
        <img :src="user.picture.medium" :alt="user.name">
        {{user.name.title}} {{user.name.first}} {{user.name.last}}
      </div>
    </div>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import { UserStore } from "../store/UserStore";
export default observer({
  name: "User",
  data() {
    return {
      store: new UserStore()
    };
  },
  mounted() {
    this.store.fetchUsers().then(() => {
      console.log(this.store.users.length, this.store.users, "user");
    });
  }
});
</script>