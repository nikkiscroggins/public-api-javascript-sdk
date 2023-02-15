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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Allotment = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Allotment model module.
   * @module model/Allotment
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>Allotment</code>.
   * An allotment of credits as part of a subscription
   * @alias module:model/Allotment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Allotment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Allotment} obj Optional instance to populate.
   * @return {module:model/Allotment} The populated <code>Allotment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('downloads_left')) {
        obj['downloads_left'] = ApiClient.convertToType(data['downloads_left'], 'Number');
      }
      if (data.hasOwnProperty('downloads_limit')) {
        obj['downloads_limit'] = ApiClient.convertToType(data['downloads_limit'], 'Number');
      }
      if (data.hasOwnProperty('end_time')) {
        obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Number of credits remaining in the subscription
   * @member {Number} downloads_left
   */
  exports.prototype['downloads_left'] = undefined;
  /**
   * Total number of credits available to this subscription
   * @member {Number} downloads_limit
   */
  exports.prototype['downloads_limit'] = undefined;
  /**
   * Date the subscription ends
   * @member {Date} end_time
   */
  exports.prototype['end_time'] = undefined;
  /**
   * Date the subscription started
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;



  return exports;
}));


