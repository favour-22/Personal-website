const {app,PORT} = require('../config/config')


const startApp = async () => {
  app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
  });
};

startApp();