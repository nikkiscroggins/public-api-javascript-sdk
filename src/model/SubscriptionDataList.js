/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.16
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
    define(['ApiClient', 'model/Error', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.SubscriptionDataList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Error, root.ShutterstockApiReference.Subscription);
  }
}(this, function(ApiClient, Error, Subscription) {
  'use strict';




  /**
   * The SubscriptionDataList model module.
   * @module model/SubscriptionDataList
   * @version 1.0.16
   */

  /**
   * Constructs a new <code>SubscriptionDataList</code>.
   * List of subscriptions
   * @alias module:model/SubscriptionDataList
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SubscriptionDataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionDataList} obj Optional instance to populate.
   * @return {module:model/SubscriptionDataList} The populated <code>SubscriptionDataList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Subscription]);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
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
   * Subscriptions retrieved from this user
   * @member {Array.<module:model/Subscription>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Error list; appears only if there was an error
   * @member {Array.<module:model/Error>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * Optional error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Current page that is being queried
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * Amount of subscriptions to show per page
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * Total number of subscriptions for this user
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;



  return exports;
}));


