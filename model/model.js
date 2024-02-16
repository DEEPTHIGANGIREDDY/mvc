const data = require("../database/db");

exports.storingData = (body) => {
  const { id, username, password, newusername } = body;
  const insert = "INSERT INTO users VALUES (?, ?, ?)";
  const update = "UPDATE users SET username=? WHERE username=?";

  data.query(insert, [id, username, password], (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Data stored successfully:", body);

    data.query(update, [newusername, username], (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Username updated successfully for ID:", id);
    });
  });
};
