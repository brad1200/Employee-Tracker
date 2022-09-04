require('dotenv').config()
const dbConfig = require('./config/dbConfig');

const dbConnection = dbConfig();

console.log(dbConnection);

async function main() {
    console.info(chalk.blue('connection to database'));
    const dbConnection = await dbConfig();
    console.log(dbConnection);
}