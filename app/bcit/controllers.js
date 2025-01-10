export const Home = (req, res) => {
    res.sendFile('./app/bcit/public/index.html', { root: req.app.locals.dirname })
}

export const Error = (req, res) => {
    res.sendFile('./app/bcit/public/error.html', { root: req.app.locals.dirname })
}


