import express from 'express';
import time from './middleware.js';
import webDev1Router from '../web-dev-1/routes.js';
import { sendHome, sendB } from "./controllers.js";
const bcit = express.Router({mergeParams: true});
bcit.use(time);
bcit.use('/web-dev-1', webDev1Router);
bcit.use('/', sendHome);

export default bcit;