const connections = require('../../db/connections');

const { userSchema } = require('./schema');

userSchema.pre('save', () => {
  console.log('pre save function');
});

const Users = connections.model('Users', userSchema);

module.exports = { Users };
