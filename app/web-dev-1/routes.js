import express from "express";
import { sendA1, sendA2, sendA3, sendA4, sendA5, sendA6, sendLanding, sendCountry } from './controllers.js';
const webDev1Router = express.Router({mergeParams: true});
webDev1Router.get('/', (req, res) => {
    res.sendFile('./app/web-dev-1/public/index.html', { root: req.app.locals.dirname })
})
webDev1Router.use('/a1', sendA1);
webDev1Router.use('/a2', sendA2);
webDev1Router.use('/a3', sendA3);
webDev1Router.use('/a4', sendA4);
webDev1Router.use('/a5', sendA5);
webDev1Router.use('/a6', sendA6);
webDev1Router.use('/landing', sendLanding);
webDev1Router.use('/country', sendCountry);
export default webDev1Router;