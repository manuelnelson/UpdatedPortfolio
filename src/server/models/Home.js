/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});
Home.add({
	name: { type: String, required: true },
	work: { type: Types.Relationship, ref: 'Work', many: true},
	about: { type: Types.Html, wysiwyg: true },
	contact: { type: Types.Html, wysiwyg: true },
	backgroundImage: { type: Types.CloudinaryImage },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true }
});

Home.defaultColumns = 'name, state|20%';
Home.register();

//export default Home.model;//mongoose.model('Home', homeSchema);
