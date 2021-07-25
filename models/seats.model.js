module.exports = (sequelize, Sequelize) => {
    const Seats = sequelize.define('seats', {
        seatNumber: {
            type: Sequelize.INTEGER
        },
        purchased: { 
            type: Sequelize.BOOLEAN
        }
    });
    return Seats;
};