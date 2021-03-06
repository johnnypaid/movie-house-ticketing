module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define('movies', {
        title: {
            type: Sequelize.STRING
        },
        description: { 
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN  
        },
        price: {
            type: Sequelize.FLOAT
        }
    });
    return Movies;
};