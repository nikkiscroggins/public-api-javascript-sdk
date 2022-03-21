/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.17
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
    root.ShutterstockApiReference.Language = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Language.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "ar"
     * @const
     */
    "ar": "ar",
    /**
     * value: "bg"
     * @const
     */
    "bg": "bg",
    /**
     * value: "bn"
     * @const
     */
    "bn": "bn",
    /**
     * value: "cs"
     * @const
     */
    "cs": "cs",
    /**
     * value: "da"
     * @const
     */
    "da": "da",
    /**
     * value: "de"
     * @const
     */
    "de": "de",
    /**
     * value: "el"
     * @const
     */
    "el": "el",
    /**
     * value: "en"
     * @const
     */
    "en": "en",
    /**
     * value: "es"
     * @const
     */
    "es": "es",
    /**
     * value: "fi"
     * @const
     */
    "fi": "fi",
    /**
     * value: "fr"
     * @const
     */
    "fr": "fr",
    /**
     * value: "gu"
     * @const
     */
    "gu": "gu",
    /**
     * value: "he"
     * @const
     */
    "he": "he",
    /**
     * value: "hi"
     * @const
     */
    "hi": "hi",
    /**
     * value: "hr"
     * @const
     */
    "hr": "hr",
    /**
     * value: "hu"
     * @const
     */
    "hu": "hu",
    /**
     * value: "id"
     * @const
     */
    "id": "id",
    /**
     * value: "it"
     * @const
     */
    "it": "it",
    /**
     * value: "ja"
     * @const
     */
    "ja": "ja",
    /**
     * value: "kn"
     * @const
     */
    "kn": "kn",
    /**
     * value: "ko"
     * @const
     */
    "ko": "ko",
    /**
     * value: "ml"
     * @const
     */
    "ml": "ml",
    /**
     * value: "mr"
     * @const
     */
    "mr": "mr",
    /**
     * value: "nb"
     * @const
     */
    "nb": "nb",
    /**
     * value: "nl"
     * @const
     */
    "nl": "nl",
    /**
     * value: "or"
     * @const
     */
    "or": "or",
    /**
     * value: "pl"
     * @const
     */
    "pl": "pl",
    /**
     * value: "pt"
     * @const
     */
    "pt": "pt",
    /**
     * value: "ro"
     * @const
     */
    "ro": "ro",
    /**
     * value: "ru"
     * @const
     */
    "ru": "ru",
    /**
     * value: "sk"
     * @const
     */
    "sk": "sk",
    /**
     * value: "sl"
     * @const
     */
    "sl": "sl",
    /**
     * value: "sv"
     * @const
     */
    "sv": "sv",
    /**
     * value: "ta"
     * @const
     */
    "ta": "ta",
    /**
     * value: "te"
     * @const
     */
    "te": "te",
    /**
     * value: "th"
     * @const
     */
    "th": "th",
    /**
     * value: "tr"
     * @const
     */
    "tr": "tr",
    /**
     * value: "uk"
     * @const
     */
    "uk": "uk",
    /**
     * value: "ur"
     * @const
     */
    "ur": "ur",
    /**
     * value: "vi"
     * @const
     */
    "vi": "vi",
    /**
     * value: "zh"
     * @const
     */
    "zh": "zh",
    /**
     * value: "zh-Hant"
     * @const
     */
    "zh_hant": "zh-Hant"  };

  /**
   * Returns a <code>Language</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Language} The enum <code>Language</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


