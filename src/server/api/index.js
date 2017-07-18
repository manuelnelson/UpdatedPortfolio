import { version } from '../../../package.json';
import { Router } from 'express';

import homeRoutes from './home-routes';
import inventoryRoutes from './inventory-routes';

//export default ({ config, db }) => {
export default ({ config}) => {
	let api = Router();

	// mount user routes at /users
	api.use('/homes', homeRoutes);
	api.use('/inventorys', inventoryRoutes);
	// api.use('/patients', patientRoutes);
	// api.use('/professionals', professionalRoutes);
	// api.use('/appointments', appointmentRoutes);
	// api.use('/targettypes', targetTypeRoutes);
	// api.use('/dtttypes', dttTypeRoutes);
	// api.use('/skills', skillRoutes);
	// api.use('/curriculums', curriculumRoutes);
	// api.use('/clientcurriculums', clientCurriculumRoutes);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
