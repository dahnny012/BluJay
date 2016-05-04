const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/blujay',
  port: process.env.PORT || 8080,
};

export default config;