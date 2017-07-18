// import {Inventory} from '../models';
import APIError from '../lib/APIError';
import httpStatus from 'http-status';
import Constants from '../lib/constants';
import keystone from 'keystone';
/**
* Load inventory and append to req.
*/
function load(req, res, next, id) {
    keystone.list('Inventory').model.findById(id)
    .then((inventory) => {
        req.inventory = inventory;
        return next();
    })
    .catch(e => next(e));
}

/**
* Get inventory
* @returns {Inventory}
*/
function get(req, res) {
    return res.json(req.inventory);
}

/**
* Checks if user exists with same email as inventory.  If not, it creates a new User with the email provided and a default password. Then creates the Inventory to reside in the new user
* @returns {Inventory}
*/
function create(req, res, next) {
    const Inventory = keystone.list('Inventory').model;
    new Inventory(req.body)
        .save()
        .then(savedInventory => res.json(savedInventory))
        .catch(e => next(e));
}

/**
* Update existing inventory
* @returns {Inventory}
*/
function update(req, res, next) {
    const inventory = req.inventory;
    for(let prop in req.inventory){
        inventory[prop] = req.inventory[prop];
    }
    inventory.save()
    .then(savedInventory => res.json(savedInventory))
    .catch(e => next(e));
}

/**
* Get inventory list.
* @property {number} req.query.skip - Number of inventorys to be skipped.
* @property {number} req.query.limit - Limit number of inventorys to be returned.
* @returns {Inventory[]}
*/
function list(req, res, next) {
    // const { limit = 20, skip = 0 } = req.query;
    //Inventory.list({ limit, skip })
    let Inventory = keystone.list('Inventory').model;
    Inventory.find()
    .then(inventorys => res.json(inventorys))
    .catch(e => next(e));
}

/**
* Delete inventory.
* @returns {Inventory}
*/
function remove(req, res, next) {
    const inventory = req.inventory;
    inventory.remove()
    .then(deletedInventory => res.json(deletedInventory))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };
