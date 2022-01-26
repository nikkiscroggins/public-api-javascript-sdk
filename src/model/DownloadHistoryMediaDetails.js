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
    define(['../ApiClient', '../model/DownloadHistoryFormatDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DownloadHistoryFormatDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.DownloadHistoryMediaDetails = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.DownloadHistoryFormatDetails);
  }
}(this, function(ApiClient, DownloadHistoryFormatDetails) {
  'use strict';




  /**
   * The DownloadHistoryMediaDetails model module.
   * @module model/DownloadHistoryMediaDetails
   * @version 1.1.13
   */

  /**
   * Constructs a new <code>DownloadHistoryMediaDetails</code>.
   * Information about the downloaded media
   * @alias module:model/DownloadHistoryMediaDetails
   * @class
   * @param id {String} ID of the download history media details
   */
  var exports = function(id) {
    var _this = this;


    _this['id'] = id;
  };

  /**
   * Constructs a <code>DownloadHistoryMediaDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadHistoryMediaDetails} obj Optional instance to populate.
   * @return {module:model/DownloadHistoryMediaDetails} The populated <code>DownloadHistoryMediaDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('format')) {
        obj['format'] = DownloadHistoryFormatDetails.constructFromObject(data['format']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DownloadHistoryFormatDetails} format
   */
  exports.prototype['format'] = undefined;
  /**
   * ID of the download history media details
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


