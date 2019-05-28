import { marsStore } from "../../store/MarsStore";

export const curiosityPhotosLoader = () => {
  return marsStore.fetchCuriosityPhotos()
}