/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.27
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
    define(['../ApiClient', '../model/CatalogCollectionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogCollectionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CatalogCollectionItemDataList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CatalogCollectionItem);
  }
}(this, function(ApiClient, CatalogCollectionItem) {
  'use strict';




  /**
   * The CatalogCollectionItemDataList model module.
   * @module model/CatalogCollectionItemDataList
   * @version 1.1.27
   */

  /**
   * Constructs a new <code>CatalogCollectionItemDataList</code>.
   * List of catalog collection items
   * @alias module:model/CatalogCollectionItemDataList
   * @class
   * @param page {Number} 
   * @param per_page {Number} 
   * @param total_count {Number} 
   * @param data {Array.<module:model/CatalogCollectionItem>} List of catalog collection items
   */
  var exports = function(page, per_page, total_count, data) {
    var _this = this;

    _this['page'] = page;
    _this['per_page'] = per_page;
    _this['total_count'] = total_count;
    _this['data'] = data;
  };

  /**
   * Constructs a <code>CatalogCollectionItemDataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCollectionItemDataList} obj Optional instance to populate.
   * @return {module:model/CatalogCollectionItemDataList} The populated <code>CatalogCollectionItemDataList</code> instance.
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
        obj['data'] = ApiClient.convertToType(data['data'], [CatalogCollectionItem]);
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
   * List of catalog collection items
   * @member {Array.<module:model/CatalogCollectionItem>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


