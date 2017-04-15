/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageStore.js
 */

import ImageStoreManager from '../NativeModules/ImageStoreManager';

class ImageStore {
  static hasImageForTag(uri, callback) {
    ImageStoreManager.hasImageForTag(uri, callback);
  }

  static removeImageForTag(uri) {
    ImageStoreManager.removeImageForTag(uri);
  }

  static addImageFromBase64(base64ImageData, success, failure) {
    ImageStoreManager.addImageFromBase64(base64ImageData, success, failure);
  }

  static getBase64ForTag(uri, success, failure) {
    ImageStoreManager.getBase64ForTag(uri, success, failure);
  }
}

module.exports = ImageStore;
