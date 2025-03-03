const { db } = require("../config/database.js");

const checkEmailExists = async (email) => {
  console.log("Checking if Email Exists:", email);
  const query =
    "SELECT COUNT(*) as count FROM Admin_login_reg WHERE admin_email_id=?";
  const [result] = await db.query(query, [email]);
  return result[0].count > 0;
};
const emailValidation = async (email) => {
  console.log("Email validation", email);
  const query = "select * from Admin_login_reg where admin_email_id=?";
  const [result] = await db.query(query, [email]);
  return result[0];
};

module.exports = { checkEmailExists, emailValidation };
