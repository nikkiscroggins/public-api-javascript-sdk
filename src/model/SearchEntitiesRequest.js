/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.30
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
    root.ShutterstockApiReference.SearchEntitiesRequest = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SearchEntitiesRequest model module.
   * @module model/SearchEntitiesRequest
   * @version 1.1.30
   */

  /**
   * Constructs a new <code>SearchEntitiesRequest</code>.
   * Search entity request data
   * @alias module:model/SearchEntitiesRequest
   * @class
   * @param text {String} Plain text to extract keywords from
   */
  var exports = function(text) {
    var _this = this;

    _this['text'] = text;
  };

  /**
   * Constructs a <code>SearchEntitiesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchEntitiesRequest} obj Optional instance to populate.
   * @return {module:model/SearchEntitiesRequest} The populated <code>SearchEntitiesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

  /**
   * Plain text to extract keywords from
   * @member {String} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


