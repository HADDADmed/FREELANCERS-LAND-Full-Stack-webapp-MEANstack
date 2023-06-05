const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter with your email service configuration
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});