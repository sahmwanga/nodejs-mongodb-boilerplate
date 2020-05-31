const expressLoader = require('./express');
// const mongooseLoader = require('./mongoose');

module.exports = async (expressApp) => {
  //   const mongoConnection = await mongooseLoader();
  console.log('Mongodb initialized');

  await expressLoader(expressApp);
  console.log('Express initialized');

  // ...or Redis , or whatever you want
};
