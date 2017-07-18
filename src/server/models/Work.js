/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Work Model
 * ==========
 */

var Work = new keystone.List('Work', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});

Work.add({
	name: { type: String, required: true },
	client: { type: String},
	company: { type: String},
	roles: { type: Types.Relationship, ref: 'Role', many: true},
	image: { type: Types.CloudinaryImage },
	technologies: {type: Types.Relationship, ref: 'Technology', many: true},
	link: {type: Types.Url},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true }
});

Work.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Work.defaultColumns = 'name, state|20%';
Work.register();
