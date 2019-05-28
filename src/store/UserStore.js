import { action, runInAction, observable, computed } from 'mobx';
import axios from "axios";

class UserStore {
  @observable users = [];

  @computed get usersList() {
      return this.users;
  }

  @action.bound async fetchUsers() {
    try {
      let users = await axios.get('https://randomuser.me/api/').then(res => res.data.results);
      runInAction(() => {
        this.users = users
      })
      return users
    } catch (err) {
      console.log(err, 'error')
    }
    
  }
}

export const userStore = new UserStore();