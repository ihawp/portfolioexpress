import express from 'express';
import { Home } from "./controllers.js";
const gracie = express.Router({mergeParams: true});

gracie.use(express.static("./app/gracie/public"));
gracie.get('/', Home);

export default gracie;