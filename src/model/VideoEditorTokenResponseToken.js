/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.7
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
    root.ShutterstockApiReference.VideoEditorTokenResponseToken = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoEditorTokenResponseToken model module.
   * @module model/VideoEditorTokenResponseToken
   * @version 1.1.7
   */

  /**
   * Constructs a new <code>VideoEditorTokenResponseToken</code>.
   * The user access token
   * @alias module:model/VideoEditorTokenResponseToken
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VideoEditorTokenResponseToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoEditorTokenResponseToken} obj Optional instance to populate.
   * @return {module:model/VideoEditorTokenResponseToken} The populated <code>VideoEditorTokenResponseToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The token
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The date that the token expires, in seconds since epoch
   * @member {Number} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;



  return exports;
}));


