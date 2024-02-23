import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Car = db.define('car',{
    car_name: DataTypes.STRING,
    day_rate: DataTypes.DOUBLE,
    month_rate: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Car;

(async()=>{
    await db.sync();
})();
