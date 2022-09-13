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
    define(['../ApiClient', '../model/Cookie'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cookie'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.RedownloadImage = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Cookie);
  }
}(this, function(ApiClient, Cookie) {
  'use strict';




  /**
   * The RedownloadImage model module.
   * @module model/RedownloadImage
   * @version 1.1.30
   */

  /**
   * Constructs a new <code>RedownloadImage</code>.
   * Data required to redownload an image
   * @alias module:model/RedownloadImage
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RedownloadImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RedownloadImage} obj Optional instance to populate.
   * @return {module:model/RedownloadImage} The populated <code>RedownloadImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auth_cookie')) {
        obj['auth_cookie'] = Cookie.constructFromObject(data['auth_cookie']);
      }
      if (data.hasOwnProperty('show_modal')) {
        obj['show_modal'] = ApiClient.convertToType(data['show_modal'], 'Boolean');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
      if (data.hasOwnProperty('verification_code')) {
        obj['verification_code'] = ApiClient.convertToType(data['verification_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * (Deprecated)
   * @member {module:model/Cookie} auth_cookie
   */
  exports.prototype['auth_cookie'] = undefined;
  /**
   * (Deprecated)
   * @member {Boolean} show_modal
   */
  exports.prototype['show_modal'] = undefined;
  /**
   * Size of the image
   * @member {module:model/RedownloadImage.SizeEnum} size
   */
  exports.prototype['size'] = undefined;
  /**
   * (Deprecated)
   * @member {String} verification_code
   */
  exports.prototype['verification_code'] = undefined;


  /**
   * Allowed values for the <code>size</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SizeEnum = {
    /**
     * value: "small"
     * @const
     */
    "small": "small",
    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",
    /**
     * value: "huge"
     * @const
     */
    "huge": "huge",
    /**
     * value: "supersize"
     * @const
     */
    "supersize": "supersize",
    /**
     * value: "vector"
     * @const
     */
    "vector": "vector"  };


  return exports;
}));


