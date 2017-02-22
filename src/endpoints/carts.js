import Resource from '../resource'




function Carts (client) {
  Resource.call(this, client)

  this.name = 'carts'
  this.endpoint = '/' + this.name
}



Carts.prototype = new Resource()





/*
*   Adds one or more item to the cart. 
*
*   @param id {Number} The cart's id
*   @param items {Array} An array of Line items. See Line item.
*   @param callback {Function} The callback function

*   @return {Promise}
*/
Carts.prototype.add = function (id, items, callback) {
  if (isNaN(id)) { throw new Error('id must be an integer.') }

  if (!(items instanceof Array)) {
    throw new Error('items must be an array of line items')
  }
  var payload = {
    op: 'add',
    items: items
  }
  return this.master.Patch('/carts/' + id, payload, callback)
}




/*
*   Removes one or more item to the cart. 
*
*   @param id {Number} The cart's id
*   @param items {Array} An array of Line items to remove
*   @param callback {Function} The callback function

*   @return {Promise}
*/
Carts.prototype.remove = function (id, items, callback) {
  if (isNaN(id))			{ throw new Error('id must be an integer.') }

  if (!(items instanceof Array))			{ throw new Error('items must be an array of line items') }

  var payload = {
    op: 'remove',
    items: items
  }
  return this.master.Patch('/carts/' + id, payload, callback)
}


/*
*   Updates one or more item in the cart. 
*
*   @param id {Number} The cart's id
*   @param items {Array} An array of Line items
*   @param callback {Function} The callback function

*   @return {Promise}
*/
Carts.prototype.update = function (id, items, callback) {
  if (isNaN(id))			{
    throw new Error('id must be an integer.')
  }

  if (!(items instanceof Array))			{
    throw new Error('items must be an array of line items')
  }

  var payload = {
    op: 'update',
    items: items
  }
  return this.master.Patch('/carts/' + id, payload, callback)
}




export default Carts
