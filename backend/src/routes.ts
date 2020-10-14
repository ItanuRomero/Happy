import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();
const upload = multer(uploadConfig)

// MVC - padrao
// Model
// Views
// Controllers


// metodos padrao - index, show, create, delete, update.
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;