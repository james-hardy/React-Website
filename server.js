const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const password = process.env.GOOGLE_PASSWORD

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'hectordiaz1103@gmail.com',
      clientId: '724061693523-3j1lgabhmjc03bu72s2gja1u7imk6394.apps.googleusercontent.com',
      clientSecret: 'mlzAbk1smKaqKoMOqJJZyPfG',
      refreshToken: '1//04e6nzs_NUubWCgYIARAAGAQSNwF-L9IrddjO56SkwhCZTzaGc-8jdhF2jk_wNaoDrhaW0EDCYVbpqAMQTcKq3pWeRCOvVtWawk0',
      accessToken: 'ya29.a0AfH6SMCA4qpZsQCTbIprukIaTq1Wx5dSOSH92SMtZYY6VLjGo7UTp7zj3AqHSGRYxoPWjk-nJC-rGwxlcIHZdfakc99rqvHUHu52ao715m-_Q0rRId8sAKk8LImXks6CDiNn_3GHPPZulGgTURR-4hqoJiU-'
  }
});
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
      from: name,
      to: "hectordiaz1103@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });