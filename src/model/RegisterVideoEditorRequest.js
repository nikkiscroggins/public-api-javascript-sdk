/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.5
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
    root.ShutterstockApiReference.RegisterVideoEditorRequest = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RegisterVideoEditorRequest model module.
   * @module model/RegisterVideoEditorRequest
   * @version 1.1.5
   */

  /**
   * Constructs a new <code>RegisterVideoEditorRequest</code>.
   * Request to register a new instance of the video editor
   * @alias module:model/RegisterVideoEditorRequest
   * @class
   * @param webhook_url {String} The callback URL of the application that receives completed videos
   * @param image_subscription_id {String} The ID of the subscription to use for licensing images
   * @param video_subscription_id {String} The ID of the subscription to use for licensing videos
   */
  var exports = function(webhook_url, image_subscription_id, video_subscription_id) {
    var _this = this;

    _this['webhookUrl'] = webhook_url;
    _this['imageSubscriptionId'] = image_subscription_id;
    _this['videoSubscriptionId'] = video_subscription_id;
  };

  /**
   * Constructs a <code>RegisterVideoEditorRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegisterVideoEditorRequest} obj Optional instance to populate.
   * @return {module:model/RegisterVideoEditorRequest} The populated <code>RegisterVideoEditorRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('webhookUrl')) {
        obj['webhookUrl'] = ApiClient.convertToType(data['webhookUrl'], 'String');
      }
      if (data.hasOwnProperty('imageSubscriptionId')) {
        obj['imageSubscriptionId'] = ApiClient.convertToType(data['imageSubscriptionId'], 'String');
      }
      if (data.hasOwnProperty('videoSubscriptionId')) {
        obj['videoSubscriptionId'] = ApiClient.convertToType(data['videoSubscriptionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The callback URL of the application that receives completed videos
   * @member {String} webhookUrl
   */
  exports.prototype['webhookUrl'] = undefined;
  /**
   * The ID of the subscription to use for licensing images
   * @member {String} imageSubscriptionId
   */
  exports.prototype['imageSubscriptionId'] = undefined;
  /**
   * The ID of the subscription to use for licensing videos
   * @member {String} videoSubscriptionId
   */
  exports.prototype['videoSubscriptionId'] = undefined;



  return exports;
}));


