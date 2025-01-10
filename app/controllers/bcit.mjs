import service from '../services/bcit.mjs';

const getThing = (req, res) => {
    const workout = service();
    res.send(`${workout}`);
}

export default getThing;