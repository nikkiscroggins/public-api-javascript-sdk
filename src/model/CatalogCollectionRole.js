/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.22
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
    root.ShutterstockApiReference.CatalogCollectionRole = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CatalogCollectionRole model module.
   * @module model/CatalogCollectionRole
   * @version 1.1.22
   */

  /**
   * Constructs a new <code>CatalogCollectionRole</code>.
   * A user that has access to a catalog collection
   * @alias module:model/CatalogCollectionRole
   * @class
   * @param id {String} 
   * @param type {module:model/CatalogCollectionRole.TypeEnum} 
   * @param email {String} 
   */
  var exports = function(id, type, email) {
    var _this = this;

    _this['id'] = id;
    _this['type'] = type;
    _this['email'] = email;
  };

  /**
   * Constructs a <code>CatalogCollectionRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCollectionRole} obj Optional instance to populate.
   * @return {module:model/CatalogCollectionRole} The populated <code>CatalogCollectionRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/CatalogCollectionRole.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "USER"
     * @const
     */
    "USER": "USER"  };


  return exports;
}));

