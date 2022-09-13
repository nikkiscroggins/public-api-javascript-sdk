/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.30
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
    define(['../ApiClient', '../model/CatalogCollectionItem', '../model/CatalogCollectionRoleAssignments'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogCollectionItem'), require('./CatalogCollectionRoleAssignments'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CatalogCollection = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CatalogCollectionItem, root.ShutterstockApiReference.CatalogCollectionRoleAssignments);
  }
}(this, function(ApiClient, CatalogCollectionItem, CatalogCollectionRoleAssignments) {
  'use strict';




  /**
   * The CatalogCollection model module.
   * @module model/CatalogCollection
   * @version 1.1.30
   */

  /**
   * Constructs a new <code>CatalogCollection</code>.
   * Catalog collection
   * @alias module:model/CatalogCollection
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param total_item_count {Number} 
   * @param created_time {Date} 
   * @param updated_time {Date} 
   * @param visibility {module:model/CatalogCollection.VisibilityEnum} 
   * @param role_assignments {module:model/CatalogCollectionRoleAssignments} 
   */
  var exports = function(id, name, total_item_count, created_time, updated_time, visibility, role_assignments) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;

    _this['total_item_count'] = total_item_count;
    _this['created_time'] = created_time;
    _this['updated_time'] = updated_time;
    _this['visibility'] = visibility;
    _this['role_assignments'] = role_assignments;
  };

  /**
   * Constructs a <code>CatalogCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCollection} obj Optional instance to populate.
   * @return {module:model/CatalogCollection} The populated <code>CatalogCollection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('cover_asset')) {
        obj['cover_asset'] = CatalogCollectionItem.constructFromObject(data['cover_asset']);
      }
      if (data.hasOwnProperty('total_item_count')) {
        obj['total_item_count'] = ApiClient.convertToType(data['total_item_count'], 'Number');
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('updated_time')) {
        obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Date');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('role_assignments')) {
        obj['role_assignments'] = CatalogCollectionRoleAssignments.constructFromObject(data['role_assignments']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/CatalogCollectionItem} cover_asset
   */
  exports.prototype['cover_asset'] = undefined;
  /**
   * @member {Number} total_item_count
   */
  exports.prototype['total_item_count'] = undefined;
  /**
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * @member {Date} updated_time
   */
  exports.prototype['updated_time'] = undefined;
  /**
   * @member {module:model/CatalogCollection.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;
  /**
   * @member {module:model/CatalogCollectionRoleAssignments} role_assignments
   */
  exports.prototype['role_assignments'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "private"
     * @const
     */
    "_private": "private",
    /**
     * value: "public"
     * @const
     */
    "_public": "public"  };


  return exports;
}));


