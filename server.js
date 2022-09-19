const { app } = require('./app');
const { db } = require('./utils/database.util');
const { initModels } = require('./models/init.models');

const startServer = async () => {
  try {
    // Database aunthenticated
    await db.authenticate();

    // Models Relations
    initModels();

    // Database Synced
    await db.sync();

    // Lsiten to server
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log('Express app running');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
