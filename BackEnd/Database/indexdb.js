(async()=>{
    const database = require('./configdb')
    const User = require('./Tables/User')
    const Classes = require("./Tables/Classes");
    const Courses = require("./Tables/Courses");
    const Subjects = require("./Tables/Subjects");
    await database.sync()
})();