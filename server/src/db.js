import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
});

connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения');
        return;
    }
    console.log('Подключено к базе данных!')
    connection.end();
})