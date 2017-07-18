import keystone from 'keystone';
import APIError from '../lib/APIError';
import httpStatus from 'http-status';
import Constants from '../lib/constants';

//let Home = keystone.list('Home').model;
/**
* Load home and append to req.
*/
function load(req, res, next, id) {
    Home.get(id)
    .then((home) => {
        req.home = home;
        return next();
    })
    .catch(e => next(e));
}

/**
* Get home
* @returns {Home}
*/
function get(req, res) {
    return res.json(req.home);
}

/**
* Checks if user exists with same email as home.  If not, it creates a new User with the email provided and a default password. Then creates the Home to reside in the new user
* @returns {Home}
*/
function create(req, res, next) {
    const home = new Home(req.body)
        .save()
        .then(savedHome => res.json(savedHome))
        .catch(e => next(e));
}

/**
* Update existing home
* @returns {Home}
*/
function update(req, res, next) {
    const home = req.home;
    for(let prop in req.home){
        home[prop] = req.home[prop];
    }
    home.save()
    .then(savedHome => res.json(savedHome))
    .catch(e => next(e));
}

/**
* Get home list.
* @property {number} req.query.skip - Number of homes to be skipped.
* @property {number} req.query.limit - Limit number of homes to be returned.
* @returns {Home[]}
*/
function list(req, res, next) {
    // const { limit = 20, skip = 0 } = req.query;
    // Home.list({ limit, skip })
    let Home = keystone.list('Home').model;
    Home.find()
    .populate('work')
    .then(homes => res.json(homes))
    .catch(e => next(e));
}

/**
* Delete home.
* @returns {Home}
*/
function remove(req, res, next) {
    const home = req.home;
    home.remove()
    .then(deletedHome => res.json(deletedHome))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };
