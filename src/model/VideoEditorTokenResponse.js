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
    define(['../ApiClient', '../model/VideoEditorTokenResponseToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VideoEditorTokenResponseToken'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.VideoEditorTokenResponse = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.VideoEditorTokenResponseToken);
  }
}(this, function(ApiClient, VideoEditorTokenResponseToken) {
  'use strict';




  /**
   * The VideoEditorTokenResponse model module.
   * @module model/VideoEditorTokenResponse
   * @version 1.1.5
   */

  /**
   * Constructs a new <code>VideoEditorTokenResponse</code>.
   * The response that includes the user access token and its expiration date
   * @alias module:model/VideoEditorTokenResponse
   * @class
   * @param token {module:model/VideoEditorTokenResponseToken} 
   */
  var exports = function(token) {
    var _this = this;

    _this['token'] = token;
  };

  /**
   * Constructs a <code>VideoEditorTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoEditorTokenResponse} obj Optional instance to populate.
   * @return {module:model/VideoEditorTokenResponse} The populated <code>VideoEditorTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('token')) {
        obj['token'] = VideoEditorTokenResponseToken.constructFromObject(data['token']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VideoEditorTokenResponseToken} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));


