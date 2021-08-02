const User = require("./User");
const Profile = require("./Profile");

// model associations will go here
Profile.belongsTo(User)

module.exports = {
  User,
  Profile
};

