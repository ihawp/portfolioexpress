import { __dirname } from '../../location.js';
// import service from './services.js';
// export const getThing = (req, res) => {
//    const workout = service();
//    res.send(`${workout}`);
// }

export const sendHome = (req, res) => {
    res.sendFile('app/bcit/index.html', { root: __dirname })
}

export const sendB = (req, res) => {
    res.sendFile('app/bcit/error.html', { root: __dirname })
}


