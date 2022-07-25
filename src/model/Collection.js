/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.26
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
    define(['../ApiClient', '../model/CollectionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CollectionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Collection = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CollectionItem);
  }
}(this, function(ApiClient, CollectionItem) {
  'use strict';




  /**
   * The Collection model module.
   * @module model/Collection
   * @version 1.1.26
   */

  /**
   * Constructs a new <code>Collection</code>.
   * Metadata about a collection of assets
   * @alias module:model/Collection
   * @class
   * @param id {String} The collection ID
   * @param name {String} The name of the collection
   * @param total_item_count {Number} The number of items in the collection
   */
  var exports = function(id, name, total_item_count) {
    var _this = this;



    _this['id'] = id;

    _this['name'] = name;


    _this['total_item_count'] = total_item_count;

  };

  /**
   * Constructs a <code>Collection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Collection} obj Optional instance to populate.
   * @return {module:model/Collection} The populated <code>Collection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cover_item')) {
        obj['cover_item'] = CollectionItem.constructFromObject(data['cover_item']);
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('items_updated_time')) {
        obj['items_updated_time'] = ApiClient.convertToType(data['items_updated_time'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('share_code')) {
        obj['share_code'] = ApiClient.convertToType(data['share_code'], 'String');
      }
      if (data.hasOwnProperty('share_url')) {
        obj['share_url'] = ApiClient.convertToType(data['share_url'], 'String');
      }
      if (data.hasOwnProperty('total_item_count')) {
        obj['total_item_count'] = ApiClient.convertToType(data['total_item_count'], 'Number');
      }
      if (data.hasOwnProperty('updated_time')) {
        obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CollectionItem} cover_item
   */
  exports.prototype['cover_item'] = undefined;
  /**
   * When the collection was created
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * The collection ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The last time this collection's items were updated
   * @member {Date} items_updated_time
   */
  exports.prototype['items_updated_time'] = undefined;
  /**
   * The name of the collection
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A code that can be used to share the collection (optional)
   * @member {String} share_code
   */
  exports.prototype['share_code'] = undefined;
  /**
   * The browser URL that can be used to share the collection (optional)
   * @member {String} share_url
   */
  exports.prototype['share_url'] = undefined;
  /**
   * The number of items in the collection
   * @member {Number} total_item_count
   */
  exports.prototype['total_item_count'] = undefined;
  /**
   * The last time the collection was update (other than changes to the items in it)
   * @member {Date} updated_time
   */
  exports.prototype['updated_time'] = undefined;



  return exports;
}));


