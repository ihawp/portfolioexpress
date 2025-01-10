// import service from './services.js';
// export const getThing = (req, res) => {
//    const workout = service();
//    res.send(`${workout}`);
// }

export const sendHome = (req, res) => {
    res.sendFile('app/bcit/public/index.html', { root: req.app.locals.dirname })
}

export const sendB = (req, res) => {
    res.sendFile('app/bcit/public/error.html', { root: req.app.locals.dirname })
}


