/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.8
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
    define(['../ApiClient', '../model/CreateAudioRender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateAudioRender'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CreateAudioRendersRequest = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CreateAudioRender);
  }
}(this, function(ApiClient, CreateAudioRender) {
  'use strict';




  /**
   * The CreateAudioRendersRequest model module.
   * @module model/CreateAudioRendersRequest
   * @version 1.1.8
   */

  /**
   * Constructs a new <code>CreateAudioRendersRequest</code>.
   * Render request data
   * @alias module:model/CreateAudioRendersRequest
   * @class
   * @param audio_renders {Array.<module:model/CreateAudioRender>} Parameters to create computer audio renders
   */
  var exports = function(audio_renders) {
    var _this = this;

    _this['audio_renders'] = audio_renders;
  };

  /**
   * Constructs a <code>CreateAudioRendersRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAudioRendersRequest} obj Optional instance to populate.
   * @return {module:model/CreateAudioRendersRequest} The populated <code>CreateAudioRendersRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audio_renders')) {
        obj['audio_renders'] = ApiClient.convertToType(data['audio_renders'], [CreateAudioRender]);
      }
    }
    return obj;
  }

  /**
   * Parameters to create computer audio renders
   * @member {Array.<module:model/CreateAudioRender>} audio_renders
   */
  exports.prototype['audio_renders'] = undefined;



  return exports;
}));


