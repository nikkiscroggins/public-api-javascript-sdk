/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.27
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
    root.ShutterstockApiReference.AudioUrl = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AudioUrl model module.
   * @module model/AudioUrl
   * @version 1.1.27
   */

  /**
   * Constructs a new <code>AudioUrl</code>.
   * Audio License URL object
   * @alias module:model/AudioUrl
   * @class
   * @param url {String} URL that can be used to download the unwatermarked, licensed asset
   */
  var exports = function(url) {
    var _this = this;

    _this['url'] = url;

  };

  /**
   * Constructs a <code>AudioUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioUrl} obj Optional instance to populate.
   * @return {module:model/AudioUrl} The populated <code>AudioUrl</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('shorts_loops_stems')) {
        obj['shorts_loops_stems'] = ApiClient.convertToType(data['shorts_loops_stems'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL that can be used to download the unwatermarked, licensed asset
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * URL that can be used to download the .zip file containing shorts, loops, and stems
   * @member {String} shorts_loops_stems
   */
  exports.prototype['shorts_loops_stems'] = undefined;



  return exports;
}));


