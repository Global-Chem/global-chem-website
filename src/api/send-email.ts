import express, { Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gerrardsarah@gmail.com',
      pass: process.env?.PASSWORD as string,
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
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});