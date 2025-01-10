export const Home = (req, res) => {
    res.sendFile('./app/gracie/public/index.html', { root: req.app.locals.dirname })
}


