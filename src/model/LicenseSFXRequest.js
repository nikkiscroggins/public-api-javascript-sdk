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
    define(['../ApiClient', '../model/LicenseSFX'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseSFX'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseSFXRequest = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseSFX);
  }
}(this, function(ApiClient, LicenseSFX) {
  'use strict';




  /**
   * The LicenseSFXRequest model module.
   * @module model/LicenseSFXRequest
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>LicenseSFXRequest</code>.
   * License sounds effect asset request body
   * @alias module:model/LicenseSFXRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LicenseSFXRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseSFXRequest} obj Optional instance to populate.
   * @return {module:model/LicenseSFXRequest} The populated <code>LicenseSFXRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sound_effects')) {
        obj['sound_effects'] = ApiClient.convertToType(data['sound_effects'], [LicenseSFX]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/LicenseSFX>} sound_effects
   */
  exports.prototype['sound_effects'] = undefined;



  return exports;
}));


