// let data = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Ae2xJqWe6g8BqZsUoDMkgI1NufLVqcnrwLyruNA1")

import { action, runInAction, observable } from 'mobx';
import axios from "axios";

class MarsStore {
  @observable curiosityPhotos = [];

  @action.bound async fetchCuriosityPhotos() {
    try {
      let response = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Ae2xJqWe6g8BqZsUoDMkgI1NufLVqcnrwLyruNA1");
      runInAction(() => {
        let photos = response.data.photos;
        this.curiosityPhotos = photos
      })
    } catch (err) {
      console.log(err, "error")
    }
    
  }
}

export const marsStore = new MarsStore();