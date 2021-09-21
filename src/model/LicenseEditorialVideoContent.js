/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.7
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
    define(['../ApiClient', '../model/LicenseRequestMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseRequestMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseEditorialVideoContent = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseRequestMetadata);
  }
}(this, function(ApiClient, LicenseRequestMetadata) {
  'use strict';




  /**
   * The LicenseEditorialVideoContent model module.
   * @module model/LicenseEditorialVideoContent
   * @version 1.1.7
   */

  /**
   * Constructs a new <code>LicenseEditorialVideoContent</code>.
   * Individual editorial video content to license
   * @alias module:model/LicenseEditorialVideoContent
   * @class
   * @param editorial_id {String} Editorial ID
   * @param license {module:model/LicenseEditorialVideoContent.LicenseEnum} License agreement to use for licensing
   */
  var exports = function(editorial_id, license) {
    var _this = this;

    _this['editorial_id'] = editorial_id;
    _this['license'] = license;


  };

  /**
   * Constructs a <code>LicenseEditorialVideoContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseEditorialVideoContent} obj Optional instance to populate.
   * @return {module:model/LicenseEditorialVideoContent} The populated <code>LicenseEditorialVideoContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('editorial_id')) {
        obj['editorial_id'] = ApiClient.convertToType(data['editorial_id'], 'String');
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = LicenseRequestMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
    }
    return obj;
  }

  /**
   * Editorial ID
   * @member {String} editorial_id
   */
  exports.prototype['editorial_id'] = undefined;
  /**
   * License agreement to use for licensing
   * @member {module:model/LicenseEditorialVideoContent.LicenseEnum} license
   */
  exports.prototype['license'] = undefined;
  /**
   * @member {module:model/LicenseRequestMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Asset size to download
   * @member {module:model/LicenseEditorialVideoContent.SizeEnum} size
   * @default 'original'
   */
  exports.prototype['size'] = 'original';


  /**
   * Allowed values for the <code>license</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LicenseEnum = {
    /**
     * value: "premier_editorial_video_digital_only"
     * @const
     */
    "digital_only": "premier_editorial_video_digital_only",
    /**
     * value: "premier_editorial_video_all_media"
     * @const
     */
    "all_media": "premier_editorial_video_all_media",
    /**
     * value: "premier_editorial_video_all_media_single_territory"
     * @const
     */
    "all_media_single_territory": "premier_editorial_video_all_media_single_territory",
    /**
     * value: "premier_editorial_video_comp"
     * @const
     */
    "comp": "premier_editorial_video_comp"  };

  /**
   * Allowed values for the <code>size</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SizeEnum = {
    /**
     * value: "original"
     * @const
     */
    "original": "original"  };


  return exports;
}));


