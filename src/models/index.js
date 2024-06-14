const ToDo = require("./ToDo");
const User = require("./User");

ToDo.belongsTo(User) //-> ToDo ---> userId
User.hasMany(ToDo)