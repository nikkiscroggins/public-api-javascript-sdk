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
    root.ShutterstockApiReference.AudioRenderTimelineSpanTempoChanges = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AudioRenderTimelineSpanTempoChanges model module.
   * @module model/AudioRenderTimelineSpanTempoChanges
   * @version 1.1.7
   */

  /**
   * Constructs a new <code>AudioRenderTimelineSpanTempoChanges</code>.
   * An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
   * @alias module:model/AudioRenderTimelineSpanTempoChanges
   * @class
   * @param time {Number} The time, in seconds, at which the tempo exists
   * @param tempo {Number} The tempo, in beats per minute, active at this time
   */
  var exports = function(time, tempo) {
    var _this = this;

    _this['time'] = time;
    _this['tempo'] = tempo;
  };

  /**
   * Constructs a <code>AudioRenderTimelineSpanTempoChanges</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRenderTimelineSpanTempoChanges} obj Optional instance to populate.
   * @return {module:model/AudioRenderTimelineSpanTempoChanges} The populated <code>AudioRenderTimelineSpanTempoChanges</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('tempo')) {
        obj['tempo'] = ApiClient.convertToType(data['tempo'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The time, in seconds, at which the tempo exists
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * The tempo, in beats per minute, active at this time
   * @member {Number} tempo
   */
  exports.prototype['tempo'] = undefined;



  return exports;
}));


