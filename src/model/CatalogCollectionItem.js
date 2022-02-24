/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.14
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
    define(['../ApiClient', '../model/CatalogCollectionItemAsset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogCollectionItemAsset'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CatalogCollectionItem = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CatalogCollectionItemAsset);
  }
}(this, function(ApiClient, CatalogCollectionItemAsset) {
  'use strict';




  /**
   * The CatalogCollectionItem model module.
   * @module model/CatalogCollectionItem
   * @version 1.1.14
   */

  /**
   * Constructs a new <code>CatalogCollectionItem</code>.
   * Metadata about an item that is part of a collection
   * @alias module:model/CatalogCollectionItem
   * @class
   * @param id {String} 
   * @param asset {module:model/CatalogCollectionItemAsset} 
   * @param created_time {Date} 
   */
  var exports = function(id, asset, created_time) {
    var _this = this;

    _this['id'] = id;
    _this['asset'] = asset;
    _this['created_time'] = created_time;

  };

  /**
   * Constructs a <code>CatalogCollectionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCollectionItem} obj Optional instance to populate.
   * @return {module:model/CatalogCollectionItem} The populated <code>CatalogCollectionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('asset')) {
        obj['asset'] = CatalogCollectionItemAsset.constructFromObject(data['asset']);
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('collection_ids')) {
        obj['collection_ids'] = ApiClient.convertToType(data['collection_ids'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/CatalogCollectionItemAsset} asset
   */
  exports.prototype['asset'] = undefined;
  /**
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * The collection IDs that this asset belongs to
   * @member {Array.<String>} collection_ids
   */
  exports.prototype['collection_ids'] = undefined;



  return exports;
}));


