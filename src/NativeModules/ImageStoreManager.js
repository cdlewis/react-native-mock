/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Image/RCTImageStoreManager.m
 */

const ImageStoreManager = {
  hasImageForTag(uri, callback) {
    callback(true);
  },
  removeImageForTag(uri) {

  },
  addImageFromBase64(base64ImageData, success, failure) {
    // TODO(lmr):
  },
  getBase64ForTag(base64ImageData, success, failure) {
    // TODO(lmr):
  },
};

module.exports = ImageStoreManager;
