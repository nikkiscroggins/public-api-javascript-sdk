/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.16
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
    define(['ApiClient', 'model/ContributorProfileSocialMedia'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContributorProfileSocialMedia'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.ContributorProfile = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.ContributorProfileSocialMedia);
  }
}(this, function(ApiClient, ContributorProfileSocialMedia) {
  'use strict';




  /**
   * The ContributorProfile model module.
   * @module model/ContributorProfile
   * @version 1.0.16
   */

  /**
   * Constructs a new <code>ContributorProfile</code>.
   * Contributor profile
   * @alias module:model/ContributorProfile
   * @class
   * @param id {String} Contributor ID
   */
  var exports = function(id) {
    var _this = this;





    _this['id'] = id;






  };

  /**
   * Constructs a <code>ContributorProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContributorProfile} obj Optional instance to populate.
   * @return {module:model/ContributorProfile} The populated <code>ContributorProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('about')) {
        obj['about'] = ApiClient.convertToType(data['about'], 'String');
      }
      if (data.hasOwnProperty('contributor_type')) {
        obj['contributor_type'] = ApiClient.convertToType(data['contributor_type'], ['String']);
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('equipment')) {
        obj['equipment'] = ApiClient.convertToType(data['equipment'], ['String']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('portfolio_url')) {
        obj['portfolio_url'] = ApiClient.convertToType(data['portfolio_url'], 'String');
      }
      if (data.hasOwnProperty('social_media')) {
        obj['social_media'] = ContributorProfileSocialMedia.constructFromObject(data['social_media']);
      }
      if (data.hasOwnProperty('styles')) {
        obj['styles'] = ApiClient.convertToType(data['styles'], ['String']);
      }
      if (data.hasOwnProperty('subjects')) {
        obj['subjects'] = ApiClient.convertToType(data['subjects'], ['String']);
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
    }
    return obj;
  }

  /**
   * Short description of the contributors' library
   * @member {String} about
   */
  exports.prototype['about'] = undefined;
  /**
   * Type of content that the contributor specializes in (photographer, illustrator, etc)
   * @member {Array.<String>} contributor_type
   */
  exports.prototype['contributor_type'] = undefined;
  /**
   * Preferred name to be displayed for the contributor
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * List of equipment used by the contributor (Canon EOS 5D Mark II, etc)
   * @member {Array.<String>} equipment
   */
  exports.prototype['equipment'] = undefined;
  /**
   * Contributor ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 2-letter ISO 3166-1 alpha-2 country code representing the contributors' locale, such as DE or US
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * Web URL for the contributors' profile
   * @member {String} portfolio_url
   */
  exports.prototype['portfolio_url'] = undefined;
  /**
   * @member {module:model/ContributorProfileSocialMedia} social_media
   */
  exports.prototype['social_media'] = undefined;
  /**
   * List of styles that the contributor specializes in (lifestyle, mixed media, etc)
   * @member {Array.<String>} styles
   */
  exports.prototype['styles'] = undefined;
  /**
   * Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc)
   * @member {Array.<String>} subjects
   */
  exports.prototype['subjects'] = undefined;
  /**
   * Personal website for the contributor
   * @member {String} website
   */
  exports.prototype['website'] = undefined;



  return exports;
}));


