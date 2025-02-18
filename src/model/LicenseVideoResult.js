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
    define(['../ApiClient', '../model/Price', '../model/Url'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Price'), require('./Url'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseVideoResult = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Price, root.ShutterstockApiReference.Url);
  }
}(this, function(ApiClient, Price, Url) {
  'use strict';




  /**
   * The LicenseVideoResult model module.
   * @module model/LicenseVideoResult
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>LicenseVideoResult</code>.
   * The response to a licensing request for a video
   * @alias module:model/LicenseVideoResult
   * @class
   * @param video_id {String} ID of the video that was licensed
   */
  var exports = function(video_id) {
    var _this = this;






    _this['video_id'] = video_id;
  };

  /**
   * Constructs a <code>LicenseVideoResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseVideoResult} obj Optional instance to populate.
   * @return {module:model/LicenseVideoResult} The populated <code>LicenseVideoResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allotment_charge')) {
        obj['allotment_charge'] = ApiClient.convertToType(data['allotment_charge'], 'Number');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = Url.constructFromObject(data['download']);
      }
      if (data.hasOwnProperty('license_id')) {
        obj['license_id'] = ApiClient.convertToType(data['license_id'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = Price.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('video_id')) {
        obj['video_id'] = ApiClient.convertToType(data['video_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Number of credits that this licensing event used
   * @member {Number} allotment_charge
   */
  exports.prototype['allotment_charge'] = undefined;
  /**
   * @member {module:model/Url} download
   */
  exports.prototype['download'] = undefined;
  /**
   * ID of the license event
   * @member {String} license_id
   */
  exports.prototype['license_id'] = undefined;
  /**
   * Potential error that occurred during licensing
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Wholesale price information; only for rev-share partners only
   * @member {module:model/Price} price
   */
  exports.prototype['price'] = undefined;
  /**
   * ID of the video that was licensed
   * @member {String} video_id
   */
  exports.prototype['video_id'] = undefined;



  return exports;
}));


