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
    define(['../ApiClient', '../model/EditorialLivefeed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EditorialLivefeed'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialImageLivefeedList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.EditorialLivefeed);
  }
}(this, function(ApiClient, EditorialLivefeed) {
  'use strict';




  /**
   * The EditorialImageLivefeedList model module.
   * @module model/EditorialImageLivefeedList
   * @version 1.1.23
   */

  /**
   * Constructs a new <code>EditorialImageLivefeedList</code>.
   * List of editorial livefeeds
   * @alias module:model/EditorialImageLivefeedList
   * @class
   * @param data {Array.<module:model/EditorialLivefeed>} Editorial livefeeds
   * @param total_count {Number} Total count of all results
   */
  var exports = function(data, total_count) {
    var _this = this;

    _this['data'] = data;



    _this['total_count'] = total_count;
  };

  /**
   * Constructs a <code>EditorialImageLivefeedList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialImageLivefeedList} obj Optional instance to populate.
   * @return {module:model/EditorialImageLivefeedList} The populated <code>EditorialImageLivefeedList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [EditorialLivefeed]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Editorial livefeeds
   * @member {Array.<module:model/EditorialLivefeed>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Optional error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Current page of the response
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * Number of results per page
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * Total count of all results
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;



  return exports;
}));


