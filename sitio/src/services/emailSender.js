require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sender = async (email) => {
  try {
    const msg = {
      to: email, // Change to your recipient
      from: "alexis10893@outlook.com", // Change to your verified sender
      templateId: "d-ac99cc5e16dd40f48b54823477f12638",
    };
    await sgMail.send(msg);

    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }
};

module.exports = sender;
