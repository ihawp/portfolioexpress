import express from "express";
import path from "path";
import { A1, A2, A3, A4, A5, A6, Landing, Country } from './controllers.js';
const webDev1Router = express.Router({mergeParams: true});

webDev1Router.use('/', express.static('./app/bcit/web-dev-1/public'));
webDev1Router.use('/a1', express.static('./app/bcit/web-dev-1/public/wd1-a1'));
webDev1Router.use('/a2', express.static('./app/bcit/web-dev-1/public/wd1-a2'));
webDev1Router.use('/landing', express.static('./app/bcit/web-dev-1/public/landing-page'));

webDev1Router.get('/', (req, res) => {
    res.sendFile('./app/bcit/web-dev-1/public/index.html', { root: req.app.locals.dirname })
});
webDev1Router.use('/a1', A1);
webDev1Router.use('/a2', A2);
webDev1Router.use('/a3', A3);
webDev1Router.use('/a4', A4);
webDev1Router.use('/a5', A5);
webDev1Router.use('/a6', A6);
webDev1Router.use('/landing', Landing);
webDev1Router.use('/country', Country);
export default webDev1Router;