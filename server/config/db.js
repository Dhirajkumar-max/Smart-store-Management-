const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dns = require('node:dns/promises');
    dns.setServers(['1.1.1.1', '8.8.8.8']); // Uses Cloudflare and Google DNS
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;