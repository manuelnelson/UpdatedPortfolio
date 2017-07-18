/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Inventory = new keystone.List('Inventory', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});
Inventory.add({
	name: { type: String, required: true },
	category: { type: String},
	price: {type:Types.Number},
	quantity: {type:Types.Number},
	location: {type:String},
	lastUpdated: {type: Types.Date}
});

Inventory.defaultColumns = 'name';
Inventory.register();

//export default Home.model;//mongoose.model('Home', homeSchema);
