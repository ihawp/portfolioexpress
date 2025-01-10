
import express from "express";
const fathersDayRouter = express.Router();

fathersDayRouter.use('/', express.static('./app/fathers-day/public'));
fathersDayRouter.get('/', (req, res) => {
    res.sendFile('./app/fathers-day/public/index.html', { root: req.app.locals.dirname });
})

export default fathersDayRouter;