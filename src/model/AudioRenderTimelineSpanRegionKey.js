/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.32
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
    root.ShutterstockApiReference.AudioRenderTimelineSpanRegionKey = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AudioRenderTimelineSpanRegionKey model module.
   * @module model/AudioRenderTimelineSpanRegionKey
   * @version 1.0.32
   */

  /**
   * Constructs a new <code>AudioRenderTimelineSpanRegionKey</code>.
   * The key signature active at the beginning of the region
   * @alias module:model/AudioRenderTimelineSpanRegionKey
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AudioRenderTimelineSpanRegionKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRenderTimelineSpanRegionKey} obj Optional instance to populate.
   * @return {module:model/AudioRenderTimelineSpanRegionKey} The populated <code>AudioRenderTimelineSpanRegionKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tonic_note')) {
        obj['tonic_note'] = ApiClient.convertToType(data['tonic_note'], 'String');
      }
      if (data.hasOwnProperty('tonic_accidental')) {
        obj['tonic_accidental'] = ApiClient.convertToType(data['tonic_accidental'], 'String');
      }
      if (data.hasOwnProperty('tonic_quality')) {
        obj['tonic_quality'] = ApiClient.convertToType(data['tonic_quality'], 'String');
      }
    }
    return obj;
  }

  /**
   * A text representation of the musical note; if this field is specified, the tonic_accidental field should also be specified
   * @member {module:model/AudioRenderTimelineSpanRegionKey.TonicNoteEnum} tonic_note
   */
  exports.prototype['tonic_note'] = undefined;
  /**
   * A text representation of the accidental; if this field is specified, the tonic_note field should also be specified
   * @member {module:model/AudioRenderTimelineSpanRegionKey.TonicAccidentalEnum} tonic_accidental
   */
  exports.prototype['tonic_accidental'] = undefined;
  /**
   * The scale quality; if this field is not specified, the API selects the quality automatically
   * @member {String} tonic_quality
   */
  exports.prototype['tonic_quality'] = undefined;


  /**
   * Allowed values for the <code>tonic_note</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TonicNoteEnum = {
    /**
     * value: "c"
     * @const
     */
    "c": "c",
    /**
     * value: "d"
     * @const
     */
    "d": "d",
    /**
     * value: "e"
     * @const
     */
    "e": "e",
    /**
     * value: "f"
     * @const
     */
    "f": "f",
    /**
     * value: "g"
     * @const
     */
    "g": "g",
    /**
     * value: "a"
     * @const
     */
    "a": "a",
    /**
     * value: "b"
     * @const
     */
    "b": "b"  };

  /**
   * Allowed values for the <code>tonic_accidental</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TonicAccidentalEnum = {
    /**
     * value: "double flat"
     * @const
     */
    "double_flat": "double flat",
    /**
     * value: "flat"
     * @const
     */
    "flat": "flat",
    /**
     * value: "natural"
     * @const
     */
    "natural": "natural",
    /**
     * value: "sharp"
     * @const
     */
    "sharp": "sharp",
    /**
     * value: "double sharp"
     * @const
     */
    "double_sharp": "double sharp"  };


  return exports;
}));


