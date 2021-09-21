/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.5
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
    define(['../ApiClient', '../model/AudioRenderTimelineSpan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioRenderTimelineSpan'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioRenderTimeline = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioRenderTimelineSpan);
  }
}(this, function(ApiClient, AudioRenderTimelineSpan) {
  'use strict';




  /**
   * The AudioRenderTimeline model module.
   * @module model/AudioRenderTimeline
   * @version 1.1.5
   */

  /**
   * Constructs a new <code>AudioRenderTimeline</code>.
   * A timeline object that represents either a request for music to be created or an entire music composition
   * @alias module:model/AudioRenderTimeline
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AudioRenderTimeline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRenderTimeline} obj Optional instance to populate.
   * @return {module:model/AudioRenderTimeline} The populated <code>AudioRenderTimeline</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('spans')) {
        obj['spans'] = ApiClient.convertToType(data['spans'], [AudioRenderTimelineSpan]);
      }
    }
    return obj;
  }

  /**
   * A span object that represents the beginning of a period of absolute time
   * @member {Array.<module:model/AudioRenderTimelineSpan>} spans
   */
  exports.prototype['spans'] = undefined;



  return exports;
}));


