/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.18
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
    define(['../ApiClient', '../model/AudioRenderTimelineSpanInstrumentGroup', '../model/AudioRenderTimelineSpanRegion', '../model/AudioRenderTimelineSpanTempoChanges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioRenderTimelineSpanInstrumentGroup'), require('./AudioRenderTimelineSpanRegion'), require('./AudioRenderTimelineSpanTempoChanges'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioRenderTimelineSpan = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioRenderTimelineSpanInstrumentGroup, root.ShutterstockApiReference.AudioRenderTimelineSpanRegion, root.ShutterstockApiReference.AudioRenderTimelineSpanTempoChanges);
  }
}(this, function(ApiClient, AudioRenderTimelineSpanInstrumentGroup, AudioRenderTimelineSpanRegion, AudioRenderTimelineSpanTempoChanges) {
  'use strict';




  /**
   * The AudioRenderTimelineSpan model module.
   * @module model/AudioRenderTimelineSpan
   * @version 1.1.18
   */

  /**
   * Constructs a new <code>AudioRenderTimelineSpan</code>.
   * The beginning of a non-overlapping period of absolute time
   * @alias module:model/AudioRenderTimelineSpan
   * @class
   * @param span_type {module:model/AudioRenderTimelineSpan.SpanTypeEnum} Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span
   * @param time {Number} The absolute time, in seconds, at which the span starts
   */
  var exports = function(span_type, time) {
    var _this = this;


    _this['span_type'] = span_type;
    _this['time'] = time;




  };

  /**
   * Constructs a <code>AudioRenderTimelineSpan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRenderTimelineSpan} obj Optional instance to populate.
   * @return {module:model/AudioRenderTimelineSpan} The populated <code>AudioRenderTimelineSpan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('span_type')) {
        obj['span_type'] = ApiClient.convertToType(data['span_type'], 'String');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('tempo')) {
        obj['tempo'] = ApiClient.convertToType(data['tempo'], 'Number');
      }
      if (data.hasOwnProperty('regions')) {
        obj['regions'] = ApiClient.convertToType(data['regions'], [AudioRenderTimelineSpanRegion]);
      }
      if (data.hasOwnProperty('instrument_groups')) {
        obj['instrument_groups'] = ApiClient.convertToType(data['instrument_groups'], [AudioRenderTimelineSpanInstrumentGroup]);
      }
      if (data.hasOwnProperty('tempo_changes')) {
        obj['tempo_changes'] = ApiClient.convertToType(data['tempo_changes'], [AudioRenderTimelineSpanTempoChanges]);
      }
    }
    return obj;
  }

  /**
   * An identifier which must be unique within the parent span
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span
   * @member {module:model/AudioRenderTimelineSpan.SpanTypeEnum} span_type
   */
  exports.prototype['span_type'] = undefined;
  /**
   * The absolute time, in seconds, at which the span starts
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * The tempo, in beats per minute, at the start of the span; if not provided, the API selects a random tempo
   * @member {Number} tempo
   */
  exports.prototype['tempo'] = undefined;
  /**
   * An array of region objects within the span
   * @member {Array.<module:model/AudioRenderTimelineSpanRegion>} regions
   */
  exports.prototype['regions'] = undefined;
  /**
   * An array of instrument_group objects that are used in this span
   * @member {Array.<module:model/AudioRenderTimelineSpanInstrumentGroup>} instrument_groups
   */
  exports.prototype['instrument_groups'] = undefined;
  /**
   * Two or more inflection points in a tempo curve; the API creates a smoothly changing tempo by using a linear interpolation of the time between each tempo change
   * @member {Array.<module:model/AudioRenderTimelineSpanTempoChanges>} tempo_changes
   */
  exports.prototype['tempo_changes'] = undefined;


  /**
   * Allowed values for the <code>span_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SpanTypeEnum = {
    /**
     * value: "metered"
     * @const
     */
    "metered": "metered",
    /**
     * value: "unmetered"
     * @const
     */
    "unmetered": "unmetered"  };


  return exports;
}));


