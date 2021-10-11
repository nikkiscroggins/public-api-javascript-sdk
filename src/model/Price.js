/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.8
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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Price = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Price model module.
   * @module model/Price
   * @version 1.1.8
   */

  /**
   * Constructs a new <code>Price</code>.
   * Price
   * @alias module:model/Price
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Price} obj Optional instance to populate.
   * @return {module:model/Price} The populated <code>Price</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('local_amount')) {
        obj['local_amount'] = ApiClient.convertToType(data['local_amount'], 'Number');
      }
      if (data.hasOwnProperty('local_currency')) {
        obj['local_currency'] = ApiClient.convertToType(data['local_currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * Floating-point amount of the calculated rev-share price in the currency local_currency
   * @member {Number} local_amount
   */
  exports.prototype['local_amount'] = undefined;
  /**
   * Currency of the rev-share price that was calculated
   * @member {String} local_currency
   */
  exports.prototype['local_currency'] = undefined;



  return exports;
}));


