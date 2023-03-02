const { db } = require("./db");
const PORT = process.env.PORT || 8080;
const app = require("./app");
//const seed = require("../script/seed");
// WARNING!! A file requirement will RUN the contents of that file!
// If that file has a line such as "functionDX()", then functionDX will run when the file is required.

const init = async () => {
  try {
    await db.sync();
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () =>
      console.log(
        `Mixing it up on port ${PORT}!!!!!!!!!!!!! server --> index.js, line 11`
      )
    );
  } catch (ex) {
    console.log(ex);
  }
};

init();
