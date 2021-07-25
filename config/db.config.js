module.exports = {
    HOST: "localhost",
    USER: "lester",
    PASSWORD: "admin@123",
    DB: "exam",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    } 
};