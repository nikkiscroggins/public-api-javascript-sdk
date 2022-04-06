/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.20
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
    define(['../ApiClient', '../model/Category', '../model/Contributor', '../model/ImageAssets', '../model/Model', '../model/ModelRelease'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'), require('./Contributor'), require('./ImageAssets'), require('./Model'), require('./ModelRelease'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Image = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Category, root.ShutterstockApiReference.Contributor, root.ShutterstockApiReference.ImageAssets, root.ShutterstockApiReference.Model, root.ShutterstockApiReference.ModelRelease);
  }
}(this, function(ApiClient, Category, Contributor, ImageAssets, Model, ModelRelease) {
  'use strict';




  /**
   * The Image model module.
   * @module model/Image
   * @version 1.1.20
   */

  /**
   * Constructs a new <code>Image</code>.
   * Information about an image
   * @alias module:model/Image
   * @class
   * @param contributor {module:model/Contributor} 
   * @param id {String} Image ID
   * @param media_type {String} Media type of this image, should always be \"image\"
   */
  var exports = function(contributor, id, media_type) {
    var _this = this;






    _this['contributor'] = contributor;



    _this['id'] = id;





    _this['media_type'] = media_type;




  };

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Image} obj Optional instance to populate.
   * @return {module:model/Image} The populated <code>Image</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('added_date')) {
        obj['added_date'] = ApiClient.convertToType(data['added_date'], 'Date');
      }
      if (data.hasOwnProperty('affiliate_url')) {
        obj['affiliate_url'] = ApiClient.convertToType(data['affiliate_url'], 'String');
      }
      if (data.hasOwnProperty('aspect')) {
        obj['aspect'] = ApiClient.convertToType(data['aspect'], 'Number');
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = ImageAssets.constructFromObject(data['assets']);
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [Category]);
      }
      if (data.hasOwnProperty('contributor')) {
        obj['contributor'] = Contributor.constructFromObject(data['contributor']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('has_model_release')) {
        obj['has_model_release'] = ApiClient.convertToType(data['has_model_release'], 'Boolean');
      }
      if (data.hasOwnProperty('has_property_release')) {
        obj['has_property_release'] = ApiClient.convertToType(data['has_property_release'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('image_type')) {
        obj['image_type'] = ApiClient.convertToType(data['image_type'], 'String');
      }
      if (data.hasOwnProperty('is_adult')) {
        obj['is_adult'] = ApiClient.convertToType(data['is_adult'], 'Boolean');
      }
      if (data.hasOwnProperty('is_editorial')) {
        obj['is_editorial'] = ApiClient.convertToType(data['is_editorial'], 'Boolean');
      }
      if (data.hasOwnProperty('is_illustration')) {
        obj['is_illustration'] = ApiClient.convertToType(data['is_illustration'], 'Boolean');
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
      if (data.hasOwnProperty('model_releases')) {
        obj['model_releases'] = ApiClient.convertToType(data['model_releases'], [ModelRelease]);
      }
      if (data.hasOwnProperty('models')) {
        obj['models'] = ApiClient.convertToType(data['models'], [Model]);
      }
      if (data.hasOwnProperty('releases')) {
        obj['releases'] = ApiClient.convertToType(data['releases'], ['String']);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date that the image was added by the contributor
   * @member {Date} added_date
   */
  exports.prototype['added_date'] = undefined;
  /**
   * Affiliate referral link; appears only for registered affiliate partners
   * @member {String} affiliate_url
   */
  exports.prototype['affiliate_url'] = undefined;
  /**
   * Aspect ratio of the image in decimal format, such as 0.6667
   * @member {Number} aspect
   */
  exports.prototype['aspect'] = undefined;
  /**
   * Image asset information
   * @member {module:model/ImageAssets} assets
   */
  exports.prototype['assets'] = undefined;
  /**
   * Categories that this image is a part of
   * @member {Array.<module:model/Category>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * @member {module:model/Contributor} contributor
   */
  exports.prototype['contributor'] = undefined;
  /**
   * Detailed description of the image
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Indicates whether there are model releases for the image
   * @member {Boolean} has_model_release
   */
  exports.prototype['has_model_release'] = undefined;
  /**
   * Indicates whether there are property releases for the image
   * @member {Boolean} has_property_release
   */
  exports.prototype['has_property_release'] = undefined;
  /**
   * Image ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Type of image
   * @member {String} image_type
   */
  exports.prototype['image_type'] = undefined;
  /**
   * Whether or not this image contains adult content
   * @member {Boolean} is_adult
   */
  exports.prototype['is_adult'] = undefined;
  /**
   * Whether or not this image is editorial content
   * @member {Boolean} is_editorial
   */
  exports.prototype['is_editorial'] = undefined;
  /**
   * Whether or not this image is an illustration
   * @member {Boolean} is_illustration
   */
  exports.prototype['is_illustration'] = undefined;
  /**
   * Keywords associated with the content of this image
   * @member {Array.<String>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * Media type of this image, should always be \"image\"
   * @member {String} media_type
   */
  exports.prototype['media_type'] = undefined;
  /**
   * List of model releases
   * @member {Array.<module:model/ModelRelease>} model_releases
   */
  exports.prototype['model_releases'] = undefined;
  /**
   * List of models
   * @member {Array.<module:model/Model>} models
   */
  exports.prototype['models'] = undefined;
  /**
   * List of all releases of this image
   * @member {Array.<String>} releases
   */
  exports.prototype['releases'] = undefined;
  /**
   * Link to image information page; included only for certain accounts
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


