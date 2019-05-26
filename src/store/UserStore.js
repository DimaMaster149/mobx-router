import { action, observable, computed } from 'mobx';
import axios from "axios";

export class UserStore {
    @observable users = [];

    @computed get usersList() {
        return this.users;
    }

    @action.bound async fetchUsers() {
      let users = await axios.get('https://randomuser.me/api/').then(res => res.data.results);
      this.users = users;
      return users
    }
}