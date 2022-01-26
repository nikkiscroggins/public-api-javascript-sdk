/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.13
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
    define(['../ApiClient', '../model/CatalogCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CatalogCollectionDataList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CatalogCollection);
  }
}(this, function(ApiClient, CatalogCollection) {
  'use strict';




  /**
   * The CatalogCollectionDataList model module.
   * @module model/CatalogCollectionDataList
   * @version 1.1.13
   */

  /**
   * Constructs a new <code>CatalogCollectionDataList</code>.
   * Catalog Collection List Response
   * @alias module:model/CatalogCollectionDataList
   * @class
   * @param page {Number} 
   * @param per_page {Number} 
   * @param total_count {Number} 
   * @param data {Array.<module:model/CatalogCollection>} List of catalog collections
   */
  var exports = function(page, per_page, total_count, data) {
    var _this = this;

    _this['page'] = page;
    _this['per_page'] = per_page;
    _this['total_count'] = total_count;
    _this['data'] = data;
  };

  /**
   * Constructs a <code>CatalogCollectionDataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCollectionDataList} obj Optional instance to populate.
   * @return {module:model/CatalogCollectionDataList} The populated <code>CatalogCollectionDataList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [CatalogCollection]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;
  /**
   * List of catalog collections
   * @member {Array.<module:model/CatalogCollection>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


