module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Fidibus2020!",
  DB: "testdb2",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    ide: 10000
  }
};
