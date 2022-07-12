/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.23
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
    define(['../ApiClient', '../model/EditorialUpdatedContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EditorialUpdatedContent'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialUpdatedResults = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.EditorialUpdatedContent);
  }
}(this, function(ApiClient, EditorialUpdatedContent) {
  'use strict';




  /**
   * The EditorialUpdatedResults model module.
   * @module model/EditorialUpdatedResults
   * @version 1.1.23
   */

  /**
   * Constructs a new <code>EditorialUpdatedResults</code>.
   * Editorial updated results
   * @alias module:model/EditorialUpdatedResults
   * @class
   * @param data {Array.<module:model/EditorialUpdatedContent>} Editorial updated items
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;




  };

  /**
   * Constructs a <code>EditorialUpdatedResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialUpdatedResults} obj Optional instance to populate.
   * @return {module:model/EditorialUpdatedResults} The populated <code>EditorialUpdatedResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [EditorialUpdatedContent]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('prev')) {
        obj['prev'] = ApiClient.convertToType(data['prev'], 'String');
      }
    }
    return obj;
  }

  /**
   * Editorial updated items
   * @member {Array.<module:model/EditorialUpdatedContent>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Optional error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Cursor value that represents the next page of results
   * @member {String} next
   */
  exports.prototype['next'] = undefined;
  /**
   * Number of results per page
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * Cursor value that represents the previous page of results
   * @member {String} prev
   */
  exports.prototype['prev'] = undefined;



  return exports;
}));


