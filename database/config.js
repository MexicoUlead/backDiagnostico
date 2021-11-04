const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = async() => {
    
    try {
        await mongoose.connect(process.env.DB_CNN);
} catch (error) {
    console.log(error);
    throw new Error('Erro a la hora de iniciar la DB ver logs');
}

}

module.exports = {
    dbConnection
}