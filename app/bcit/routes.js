import express from 'express';
import webDev1Router from './web-dev-1/routes.js';
import { Home, Error } from "./controllers.js";
const bcit = express.Router({mergeParams: true});

bcit.use('/web-dev-1', webDev1Router);
bcit.get('/', Home);

export default bcit;