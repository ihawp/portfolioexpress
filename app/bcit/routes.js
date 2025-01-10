import express from 'express'
import time from './middleware.js'
import { sendHome, sendB } from "./controllers.js";
import webDev1Router from './web-dev-1/routes.js';
const bcit = express.Router();
bcit.use(time)
bcit.use('/web-dev-1', webDev1Router);
bcit.get('/', sendHome);
bcit.get('*', sendB);
export default bcit;