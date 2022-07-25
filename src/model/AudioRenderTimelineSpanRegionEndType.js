/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.26
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
    root.ShutterstockApiReference.AudioRenderTimelineSpanRegionEndType = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AudioRenderTimelineSpanRegionEndType model module.
   * @module model/AudioRenderTimelineSpanRegionEndType
   * @version 1.1.26
   */

  /**
   * Constructs a new <code>AudioRenderTimelineSpanRegionEndType</code>.
   * A high-level description of how a region ends
   * @alias module:model/AudioRenderTimelineSpanRegionEndType
   * @class
   * @param beat {Number} The beat, relative to the start of the active region, at which the end_type begins; in other words, the ending starts on this beat of the region
   * @param event {module:model/AudioRenderTimelineSpanRegionEndType.EventEnum} The type of event
   * @param type {module:model/AudioRenderTimelineSpanRegionEndType.TypeEnum} The specific action to perform; if the event type is \"ending\" then this must be \"ringout\" and if event type is \"transition\" this must be \"cut\"
   */
  var exports = function(beat, event, type) {
    var _this = this;

    _this['beat'] = beat;
    _this['event'] = event;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>AudioRenderTimelineSpanRegionEndType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRenderTimelineSpanRegionEndType} obj Optional instance to populate.
   * @return {module:model/AudioRenderTimelineSpanRegionEndType} The populated <code>AudioRenderTimelineSpanRegionEndType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('beat')) {
        obj['beat'] = ApiClient.convertToType(data['beat'], 'Number');
      }
      if (data.hasOwnProperty('event')) {
        obj['event'] = ApiClient.convertToType(data['event'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The beat, relative to the start of the active region, at which the end_type begins; in other words, the ending starts on this beat of the region
   * @member {Number} beat
   */
  exports.prototype['beat'] = undefined;
  /**
   * The type of event
   * @member {module:model/AudioRenderTimelineSpanRegionEndType.EventEnum} event
   */
  exports.prototype['event'] = undefined;
  /**
   * The specific action to perform; if the event type is \"ending\" then this must be \"ringout\" and if event type is \"transition\" this must be \"cut\"
   * @member {module:model/AudioRenderTimelineSpanRegionEndType.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>event</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventEnum = {
    /**
     * value: "ending"
     * @const
     */
    "ending": "ending",
    /**
     * value: "transition"
     * @const
     */
    "transition": "transition"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ringout"
     * @const
     */
    "ringout": "ringout",
    /**
     * value: "cut"
     * @const
     */
    "cut": "cut"  };


  return exports;
}));


