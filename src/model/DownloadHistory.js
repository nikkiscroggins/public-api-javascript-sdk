/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.13
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
    define(['../ApiClient', '../model/DownloadHistoryMediaDetails', '../model/DownloadHistoryUserDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DownloadHistoryMediaDetails'), require('./DownloadHistoryUserDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.DownloadHistory = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.DownloadHistoryMediaDetails, root.ShutterstockApiReference.DownloadHistoryUserDetails);
  }
}(this, function(ApiClient, DownloadHistoryMediaDetails, DownloadHistoryUserDetails) {
  'use strict';




  /**
   * The DownloadHistory model module.
   * @module model/DownloadHistory
   * @version 1.1.13
   */

  /**
   * Constructs a new <code>DownloadHistory</code>.
   * Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object
   * @alias module:model/DownloadHistory
   * @class
   * @param download_time {Date} Date the media was downloaded the first time
   * @param id {String} ID of the download
   * @param license {String} The name of the license of this download
   */
  var exports = function(download_time, id, license) {
    var _this = this;


    _this['download_time'] = download_time;
    _this['id'] = id;


    _this['license'] = license;




  };

  /**
   * Constructs a <code>DownloadHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadHistory} obj Optional instance to populate.
   * @return {module:model/DownloadHistory} The populated <code>DownloadHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audio')) {
        obj['audio'] = DownloadHistoryMediaDetails.constructFromObject(data['audio']);
      }
      if (data.hasOwnProperty('download_time')) {
        obj['download_time'] = ApiClient.convertToType(data['download_time'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = DownloadHistoryMediaDetails.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('is_downloadable')) {
        obj['is_downloadable'] = ApiClient.convertToType(data['is_downloadable'], 'Boolean');
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('subscription_id')) {
        obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = DownloadHistoryUserDetails.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('video')) {
        obj['video'] = DownloadHistoryMediaDetails.constructFromObject(data['video']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DownloadHistoryMediaDetails} audio
   */
  exports.prototype['audio'] = undefined;
  /**
   * Date the media was downloaded the first time
   * @member {Date} download_time
   */
  exports.prototype['download_time'] = undefined;
  /**
   * ID of the download
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/DownloadHistoryMediaDetails} image
   */
  exports.prototype['image'] = undefined;
  /**
   * Specifies if the media is downloadable via its respective downloads endpoint
   * @member {Boolean} is_downloadable
   */
  exports.prototype['is_downloadable'] = undefined;
  /**
   * The name of the license of this download
   * @member {String} license
   */
  exports.prototype['license'] = undefined;
  /**
   * The metadata that was passed in the original licensing request
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * ID of the subscription used to perform this download
   * @member {String} subscription_id
   */
  exports.prototype['subscription_id'] = undefined;
  /**
   * @member {module:model/DownloadHistoryUserDetails} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/DownloadHistoryMediaDetails} video
   */
  exports.prototype['video'] = undefined;



  return exports;
}));


