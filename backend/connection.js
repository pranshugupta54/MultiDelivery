
const mongoose = require('mongoose');

const connectMongoose = async () => {
    try {
      const url = 'mongodb+srv://sauravgpt123:codebenders@multicluster.vurocds.mongodb.net/?retryWrites=true&w=majority&appName=multicluster';
      await mongoose.connect(url);
      console.log('Connected to MongoDB');
    //   const foodData= await fetchData();
      // return foodData;
    
    } catch (err) {
      console.log('Error connecting to MongoDB:', err);
    }
  };
  
  module.exports = {connectMongoose};