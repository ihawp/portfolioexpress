import path from 'path';
const url = './app/bcit/web-dev-1/public/';

export const A1 = (req, res) => {
    res.sendFile(path.join(url + 'wd1-a1/index.html'), { root: req.app.locals.dirname })
}

export const A2 = (req, res) => {
    res.sendFile(path.join(url + 'wd1-a2/index.html'), { root: req.app.locals.dirname })
}
export const A3 = (req, res) => {
    res.sendFile(path.join(url + 'wd1-a3'), { root: req.app.locals.dirname })
}
export const A4 = (req, res) => {
    res.sendFile(path.join(url + 'wd1-a4'), { root: req.app.locals.dirname })
}
export const A5 = (req, res) => {
    res.sendFile(path.join(url + 'wd1-a5'), { root: req.app.locals.dirname })
}
export const A6 = (req, res) => {
    res.sendFile(path.join(url + 'wd1-a6'), { root: req.app.locals.dirname })
}
export const Landing = (req, res) => {
    res.sendFile(path.join(url + 'landing-page'), { root: req.app.locals.dirname })
}
export const Country = (req, res) => {
    res.sendFile(path.join(url + 'country-page'), { root: req.app.locals.dirname })
}
