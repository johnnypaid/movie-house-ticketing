const db = require("../models"); // models path depend on your structure
const Movies = db.movies;

exports.findAllPublished = (req, res) => {
    Movies.findAll({ where: { published: 1 } })
        .then(data => {
            res.send(data); 
        })
        .catch(err => {
            res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id);
  
    Movies.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving movie with id=" + id
        });
      });
  };