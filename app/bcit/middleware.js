const time = (req, res, next) => {
    console.log(Date.now())
    next()
}

export default time;