module.exports.echoBadEnd = (r, res) => {
    r.contextWrites[to] = 'Error: Fill in required fields to use the Translate API.';
    r.callback = 'error';

    res.status(200).send(r);
}