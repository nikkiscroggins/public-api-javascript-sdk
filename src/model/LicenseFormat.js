/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseFormat = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LicenseFormat model module.
   * @module model/LicenseFormat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LicenseFormat</code>.
   * A description of a license
   * @alias module:model/LicenseFormat
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>LicenseFormat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseFormat} obj Optional instance to populate.
   * @return {module:model/LicenseFormat} The populated <code>LicenseFormat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
      if (data.hasOwnProperty('min_resolution')) {
        obj['min_resolution'] = ApiClient.convertToType(data['min_resolution'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
    }
    return obj;
  }

  /**
   * Description of the license
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Format or extension of the media, such as mpeg for videos or jpeg for images
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * Media type of the license
   * @member {module:model/LicenseFormat.MediaTypeEnum} media_type
   */
  exports.prototype['media_type'] = undefined;
  /**
   * Width of the media, in pixels, allowed by this license
   * @member {Number} min_resolution
   */
  exports.prototype['min_resolution'] = undefined;
  /**
   * Keyword that details the size of the media, such as hd or sd for video, huge or vector for images
   * @member {String} size
   */
  exports.prototype['size'] = undefined;


  /**
   * Allowed values for the <code>media_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MediaTypeEnum = {
    /**
     * value: "image"
     * @const
     */
    "image": "image",
    /**
     * value: "video"
     * @const
     */
    "video": "video",
    /**
     * value: "audio"
     * @const
     */
    "audio": "audio",
    /**
     * value: "editorial"
     * @const
     */
    "editorial": "editorial"  };


  return exports;
}));


