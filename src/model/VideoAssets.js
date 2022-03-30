/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.18
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
    define(['../ApiClient', '../model/Url', '../model/Urls', '../model/VideoSizeDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Url'), require('./Urls'), require('./VideoSizeDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.VideoAssets = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Url, root.ShutterstockApiReference.Urls, root.ShutterstockApiReference.VideoSizeDetails);
  }
}(this, function(ApiClient, Url, Urls, VideoSizeDetails) {
  'use strict';




  /**
   * The VideoAssets model module.
   * @module model/VideoAssets
   * @version 1.1.18
   */

  /**
   * Constructs a new <code>VideoAssets</code>.
   * Video asset information
   * @alias module:model/VideoAssets
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>VideoAssets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoAssets} obj Optional instance to populate.
   * @return {module:model/VideoAssets} The populated <code>VideoAssets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('4k')) {
        obj['4k'] = VideoSizeDetails.constructFromObject(data['4k']);
      }
      if (data.hasOwnProperty('hd')) {
        obj['hd'] = VideoSizeDetails.constructFromObject(data['hd']);
      }
      if (data.hasOwnProperty('preview_jpg')) {
        obj['preview_jpg'] = Url.constructFromObject(data['preview_jpg']);
      }
      if (data.hasOwnProperty('preview_mp4')) {
        obj['preview_mp4'] = Url.constructFromObject(data['preview_mp4']);
      }
      if (data.hasOwnProperty('preview_webm')) {
        obj['preview_webm'] = Url.constructFromObject(data['preview_webm']);
      }
      if (data.hasOwnProperty('sd')) {
        obj['sd'] = VideoSizeDetails.constructFromObject(data['sd']);
      }
      if (data.hasOwnProperty('thumb_jpg')) {
        obj['thumb_jpg'] = Url.constructFromObject(data['thumb_jpg']);
      }
      if (data.hasOwnProperty('thumb_jpgs')) {
        obj['thumb_jpgs'] = Urls.constructFromObject(data['thumb_jpgs']);
      }
      if (data.hasOwnProperty('thumb_mp4')) {
        obj['thumb_mp4'] = Url.constructFromObject(data['thumb_mp4']);
      }
      if (data.hasOwnProperty('thumb_webm')) {
        obj['thumb_webm'] = Url.constructFromObject(data['thumb_webm']);
      }
      if (data.hasOwnProperty('web')) {
        obj['web'] = VideoSizeDetails.constructFromObject(data['web']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VideoSizeDetails} 4k
   */
  exports.prototype['4k'] = undefined;
  /**
   * @member {module:model/VideoSizeDetails} hd
   */
  exports.prototype['hd'] = undefined;
  /**
   * @member {module:model/Url} preview_jpg
   */
  exports.prototype['preview_jpg'] = undefined;
  /**
   * @member {module:model/Url} preview_mp4
   */
  exports.prototype['preview_mp4'] = undefined;
  /**
   * @member {module:model/Url} preview_webm
   */
  exports.prototype['preview_webm'] = undefined;
  /**
   * @member {module:model/VideoSizeDetails} sd
   */
  exports.prototype['sd'] = undefined;
  /**
   * @member {module:model/Url} thumb_jpg
   */
  exports.prototype['thumb_jpg'] = undefined;
  /**
   * @member {module:model/Urls} thumb_jpgs
   */
  exports.prototype['thumb_jpgs'] = undefined;
  /**
   * @member {module:model/Url} thumb_mp4
   */
  exports.prototype['thumb_mp4'] = undefined;
  /**
   * @member {module:model/Url} thumb_webm
   */
  exports.prototype['thumb_webm'] = undefined;
  /**
   * @member {module:model/VideoSizeDetails} web
   */
  exports.prototype['web'] = undefined;



  return exports;
}));


