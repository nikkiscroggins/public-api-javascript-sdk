/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.24
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
    define(['../ApiClient', '../model/ImageSizeDetails', '../model/Thumbnail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImageSizeDetails'), require('./Thumbnail'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.ImageAssets = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.ImageSizeDetails, root.ShutterstockApiReference.Thumbnail);
  }
}(this, function(ApiClient, ImageSizeDetails, Thumbnail) {
  'use strict';




  /**
   * The ImageAssets model module.
   * @module model/ImageAssets
   * @version 1.1.24
   */

  /**
   * Constructs a new <code>ImageAssets</code>.
   * Information about the assets that are part of an image
   * @alias module:model/ImageAssets
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ImageAssets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageAssets} obj Optional instance to populate.
   * @return {module:model/ImageAssets} The populated <code>ImageAssets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('huge_jpg')) {
        obj['huge_jpg'] = ImageSizeDetails.constructFromObject(data['huge_jpg']);
      }
      if (data.hasOwnProperty('huge_thumb')) {
        obj['huge_thumb'] = Thumbnail.constructFromObject(data['huge_thumb']);
      }
      if (data.hasOwnProperty('large_thumb')) {
        obj['large_thumb'] = Thumbnail.constructFromObject(data['large_thumb']);
      }
      if (data.hasOwnProperty('medium_jpg')) {
        obj['medium_jpg'] = ImageSizeDetails.constructFromObject(data['medium_jpg']);
      }
      if (data.hasOwnProperty('preview')) {
        obj['preview'] = Thumbnail.constructFromObject(data['preview']);
      }
      if (data.hasOwnProperty('preview_1000')) {
        obj['preview_1000'] = Thumbnail.constructFromObject(data['preview_1000']);
      }
      if (data.hasOwnProperty('preview_1500')) {
        obj['preview_1500'] = Thumbnail.constructFromObject(data['preview_1500']);
      }
      if (data.hasOwnProperty('small_jpg')) {
        obj['small_jpg'] = ImageSizeDetails.constructFromObject(data['small_jpg']);
      }
      if (data.hasOwnProperty('small_thumb')) {
        obj['small_thumb'] = Thumbnail.constructFromObject(data['small_thumb']);
      }
      if (data.hasOwnProperty('supersize_jpg')) {
        obj['supersize_jpg'] = ImageSizeDetails.constructFromObject(data['supersize_jpg']);
      }
      if (data.hasOwnProperty('vector_eps')) {
        obj['vector_eps'] = ImageSizeDetails.constructFromObject(data['vector_eps']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ImageSizeDetails} huge_jpg
   */
  exports.prototype['huge_jpg'] = undefined;
  /**
   * @member {module:model/Thumbnail} huge_thumb
   */
  exports.prototype['huge_thumb'] = undefined;
  /**
   * @member {module:model/Thumbnail} large_thumb
   */
  exports.prototype['large_thumb'] = undefined;
  /**
   * @member {module:model/ImageSizeDetails} medium_jpg
   */
  exports.prototype['medium_jpg'] = undefined;
  /**
   * @member {module:model/Thumbnail} preview
   */
  exports.prototype['preview'] = undefined;
  /**
   * @member {module:model/Thumbnail} preview_1000
   */
  exports.prototype['preview_1000'] = undefined;
  /**
   * @member {module:model/Thumbnail} preview_1500
   */
  exports.prototype['preview_1500'] = undefined;
  /**
   * @member {module:model/ImageSizeDetails} small_jpg
   */
  exports.prototype['small_jpg'] = undefined;
  /**
   * @member {module:model/Thumbnail} small_thumb
   */
  exports.prototype['small_thumb'] = undefined;
  /**
   * @member {module:model/ImageSizeDetails} supersize_jpg
   */
  exports.prototype['supersize_jpg'] = undefined;
  /**
   * @member {module:model/ImageSizeDetails} vector_eps
   */
  exports.prototype['vector_eps'] = undefined;



  return exports;
}));


