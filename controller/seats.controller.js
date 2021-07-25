const db = require("../models"); // models path depend on your structure
const Seats = db.seats;

exports.findAllPublished = (req, res) => {
    Seats.findAll()
        .then(data => {
            res.send(data); 
        })
        .catch(err => {
            res.status(500).send({
            message:
            err.message || "Some error occurred.."
        });
    });
};