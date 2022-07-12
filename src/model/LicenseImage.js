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
    define(['../ApiClient', '../model/Cookie', '../model/CustomSizeDimensions', '../model/LicenseRequestMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cookie'), require('./CustomSizeDimensions'), require('./LicenseRequestMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseImage = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Cookie, root.ShutterstockApiReference.CustomSizeDimensions, root.ShutterstockApiReference.LicenseRequestMetadata);
  }
}(this, function(ApiClient, Cookie, CustomSizeDimensions, LicenseRequestMetadata) {
  'use strict';




  /**
   * The LicenseImage model module.
   * @module model/LicenseImage
   * @version 1.1.23
   */

  /**
   * Constructs a new <code>LicenseImage</code>.
   * Data required to license an image
   * @alias module:model/LicenseImage
   * @class
   * @param image_id {String} Image ID
   */
  var exports = function(image_id) {
    var _this = this;




    _this['image_id'] = image_id;








  };

  /**
   * Constructs a <code>LicenseImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseImage} obj Optional instance to populate.
   * @return {module:model/LicenseImage} The populated <code>LicenseImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auth_cookie')) {
        obj['auth_cookie'] = Cookie.constructFromObject(data['auth_cookie']);
      }
      if (data.hasOwnProperty('editorial_acknowledgement')) {
        obj['editorial_acknowledgement'] = ApiClient.convertToType(data['editorial_acknowledgement'], 'Boolean');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('image_id')) {
        obj['image_id'] = ApiClient.convertToType(data['image_id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = LicenseRequestMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('search_id')) {
        obj['search_id'] = ApiClient.convertToType(data['search_id'], 'String');
      }
      if (data.hasOwnProperty('show_modal')) {
        obj['show_modal'] = ApiClient.convertToType(data['show_modal'], 'Boolean');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
      if (data.hasOwnProperty('custom_dimensions')) {
        obj['custom_dimensions'] = CustomSizeDimensions.constructFromObject(data['custom_dimensions']);
      }
      if (data.hasOwnProperty('subscription_id')) {
        obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
      }
      if (data.hasOwnProperty('verification_code')) {
        obj['verification_code'] = ApiClient.convertToType(data['verification_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * Cookie object
   * @member {module:model/Cookie} auth_cookie
   */
  exports.prototype['auth_cookie'] = undefined;
  /**
   * Set to true to acknowledge the editorial agreement
   * @member {Boolean} editorial_acknowledgement
   */
  exports.prototype['editorial_acknowledgement'] = undefined;
  /**
   * (Deprecated) Image format to download
   * @member {module:model/LicenseImage.FormatEnum} format
   * @default 'jpg'
   */
  exports.prototype['format'] = 'jpg';
  /**
   * Image ID
   * @member {String} image_id
   */
  exports.prototype['image_id'] = undefined;
  /**
   * @member {module:model/LicenseRequestMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * ID of the search that led to this licensing transaction
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;
  /**
   * (Deprecated)
   * @member {Boolean} show_modal
   */
  exports.prototype['show_modal'] = undefined;
  /**
   * Image size to download
   * @member {module:model/LicenseImage.SizeEnum} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {module:model/CustomSizeDimensions} custom_dimensions
   */
  exports.prototype['custom_dimensions'] = undefined;
  /**
   * ID of the subscription to use for the download.
   * @member {String} subscription_id
   */
  exports.prototype['subscription_id'] = undefined;
  /**
   * (Deprecated)
   * @member {String} verification_code
   */
  exports.prototype['verification_code'] = undefined;


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "jpg"
     * @const
     */
    "jpg": "jpg"  };

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
     * value: "custom"
     * @const
     */
    "custom": "custom"  };


  return exports;
}));


