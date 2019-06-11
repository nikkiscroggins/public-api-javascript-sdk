/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.6
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LicenseImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseImage'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseImageRequest = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseImage);
  }
}(this, function(ApiClient, LicenseImage) {
  'use strict';




  /**
   * The LicenseImageRequest model module.
   * @module model/LicenseImageRequest
   * @version 1.0.6
   */

  /**
   * Constructs a new <code>LicenseImageRequest</code>.
   * Image license request data
   * @alias module:model/LicenseImageRequest
   * @class
   * @param images {Array.<module:model/LicenseImage>} Images to create licenses for
   */
  var exports = function(images) {
    var _this = this;

    _this['images'] = images;
  };

  /**
   * Constructs a <code>LicenseImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseImageRequest} obj Optional instance to populate.
   * @return {module:model/LicenseImageRequest} The populated <code>LicenseImageRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [LicenseImage]);
      }
    }
    return obj;
  }

  /**
   * Images to create licenses for
   * @member {Array.<module:model/LicenseImage>} images
   */
  exports.prototype['images'] = undefined;



  return exports;
}));


