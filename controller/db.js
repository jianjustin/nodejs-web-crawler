var Sequelize = require("sequelize");

/**
 * 连接指定类型的数据库
 * host：数据库地址
 * max：连接池最大连接数量
 * min：连接池最小连接数量
 * idle：每个线程最长等待时间
 * @type {Sequelize}
 */
module.exports = new Sequelize('test', 'root', 'jian031018', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    }
});