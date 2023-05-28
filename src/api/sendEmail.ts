// import nodemailer from 'nodemailer';

var nodemailer = require('nodemailer');

export default async function sendEmail(req: any, res: any) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gerrardsarah@gmail.com',
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: 'gerrardsarah@gmail.com',
    to: 'gerrardsarah@gmail.com',
    subject: 'Global Chem - Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}
