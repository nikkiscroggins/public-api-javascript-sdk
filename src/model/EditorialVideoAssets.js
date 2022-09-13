/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/VideoPreviewUrl', '../model/VideoSizeDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VideoPreviewUrl'), require('./VideoSizeDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialVideoAssets = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.VideoPreviewUrl, root.ShutterstockApiReference.VideoSizeDetails);
  }
}(this, function(ApiClient, VideoPreviewUrl, VideoSizeDetails) {
  'use strict';




  /**
   * The EditorialVideoAssets model module.
   * @module model/EditorialVideoAssets
   * @version 1.1.30
   */

  /**
   * Constructs a new <code>EditorialVideoAssets</code>.
   * Asset information, including size and thumbnail URLs
   * @alias module:model/EditorialVideoAssets
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EditorialVideoAssets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialVideoAssets} obj Optional instance to populate.
   * @return {module:model/EditorialVideoAssets} The populated <code>EditorialVideoAssets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('original')) {
        obj['original'] = VideoSizeDetails.constructFromObject(data['original']);
      }
      if (data.hasOwnProperty('preview_mp4')) {
        obj['preview_mp4'] = VideoPreviewUrl.constructFromObject(data['preview_mp4']);
      }
      if (data.hasOwnProperty('preview_webm')) {
        obj['preview_webm'] = VideoPreviewUrl.constructFromObject(data['preview_webm']);
      }
      if (data.hasOwnProperty('thumb_jpg')) {
        obj['thumb_jpg'] = VideoPreviewUrl.constructFromObject(data['thumb_jpg']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VideoSizeDetails} original
   */
  exports.prototype['original'] = undefined;
  /**
   * @member {module:model/VideoPreviewUrl} preview_mp4
   */
  exports.prototype['preview_mp4'] = undefined;
  /**
   * @member {module:model/VideoPreviewUrl} preview_webm
   */
  exports.prototype['preview_webm'] = undefined;
  /**
   * @member {module:model/VideoPreviewUrl} thumb_jpg
   */
  exports.prototype['thumb_jpg'] = undefined;



  return exports;
}));


