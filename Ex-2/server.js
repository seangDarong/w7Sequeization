import sequelize from "./db/database.js"; 

try {
    await sequelize.authenticate();
    console.log("Success");

} catch (error) {
    sole.error("Error", error);
}
