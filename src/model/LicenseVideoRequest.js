/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.5
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
    define(['../ApiClient', '../model/LicenseVideo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseVideo'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseVideoRequest = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseVideo);
  }
}(this, function(ApiClient, LicenseVideo) {
  'use strict';




  /**
   * The LicenseVideoRequest model module.
   * @module model/LicenseVideoRequest
   * @version 1.1.5
   */

  /**
   * Constructs a new <code>LicenseVideoRequest</code>.
   * List of videos to license
   * @alias module:model/LicenseVideoRequest
   * @class
   * @param videos {Array.<module:model/LicenseVideo>} Videos to license
   */
  var exports = function(videos) {
    var _this = this;

    _this['videos'] = videos;
  };

  /**
   * Constructs a <code>LicenseVideoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseVideoRequest} obj Optional instance to populate.
   * @return {module:model/LicenseVideoRequest} The populated <code>LicenseVideoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('videos')) {
        obj['videos'] = ApiClient.convertToType(data['videos'], [LicenseVideo]);
      }
    }
    return obj;
  }

  /**
   * Videos to license
   * @member {Array.<module:model/LicenseVideo>} videos
   */
  exports.prototype['videos'] = undefined;



  return exports;
}));


