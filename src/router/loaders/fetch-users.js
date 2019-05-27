import { userStore } from "../../store/UserStore";

export const userLoader = () => {
  return userStore.fetchUsers()
}