/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.32
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
    root.ShutterstockApiReference.EditorialAssets = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.ImageSizeDetails, root.ShutterstockApiReference.Thumbnail);
  }
}(this, function(ApiClient, ImageSizeDetails, Thumbnail) {
  'use strict';




  /**
   * The EditorialAssets model module.
   * @module model/EditorialAssets
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>EditorialAssets</code>.
   * Asset information, including size and thumbnail URLs
   * @alias module:model/EditorialAssets
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>EditorialAssets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialAssets} obj Optional instance to populate.
   * @return {module:model/EditorialAssets} The populated <code>EditorialAssets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('original')) {
        obj['original'] = ImageSizeDetails.constructFromObject(data['original']);
      }
      if (data.hasOwnProperty('thumb_170')) {
        obj['thumb_170'] = Thumbnail.constructFromObject(data['thumb_170']);
      }
      if (data.hasOwnProperty('thumb_220')) {
        obj['thumb_220'] = Thumbnail.constructFromObject(data['thumb_220']);
      }
      if (data.hasOwnProperty('watermark_450')) {
        obj['watermark_450'] = Thumbnail.constructFromObject(data['watermark_450']);
      }
      if (data.hasOwnProperty('watermark_1500')) {
        obj['watermark_1500'] = Thumbnail.constructFromObject(data['watermark_1500']);
      }
      if (data.hasOwnProperty('small_jpg')) {
        obj['small_jpg'] = ImageSizeDetails.constructFromObject(data['small_jpg']);
      }
      if (data.hasOwnProperty('medium_jpg')) {
        obj['medium_jpg'] = ImageSizeDetails.constructFromObject(data['medium_jpg']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ImageSizeDetails} original
   */
  exports.prototype['original'] = undefined;
  /**
   * @member {module:model/Thumbnail} thumb_170
   */
  exports.prototype['thumb_170'] = undefined;
  /**
   * @member {module:model/Thumbnail} thumb_220
   */
  exports.prototype['thumb_220'] = undefined;
  /**
   * @member {module:model/Thumbnail} watermark_450
   */
  exports.prototype['watermark_450'] = undefined;
  /**
   * @member {module:model/Thumbnail} watermark_1500
   */
  exports.prototype['watermark_1500'] = undefined;
  /**
   * @member {module:model/ImageSizeDetails} small_jpg
   */
  exports.prototype['small_jpg'] = undefined;
  /**
   * @member {module:model/ImageSizeDetails} medium_jpg
   */
  exports.prototype['medium_jpg'] = undefined;



  return exports;
}));


