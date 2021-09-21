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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Preview = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Preview model module.
   * @module model/Preview
   * @version 1.1.7
   */

  /**
   * Constructs a new <code>Preview</code>.
   * Preview information
   * @alias module:model/Preview
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Preview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Preview} obj Optional instance to populate.
   * @return {module:model/Preview} The populated <code>Preview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content_type')) {
        obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Content type of the preview, currently audio/mp3
   * @member {module:model/Preview.ContentTypeEnum} content_type
   */
  exports.prototype['content_type'] = undefined;
  /**
   * Url of the instrument's preview file
   * @member {String} url
   */
  exports.prototype['url'] = undefined;


  /**
   * Allowed values for the <code>content_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContentTypeEnum = {
    /**
     * value: "audio/mp3"
     * @const
     */
    "audiomp3": "audio/mp3"  };


  return exports;
}));


