"use server";
const nodemailer = require("nodemailer");

export async function sendContactUsMail(body: any) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },

      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });

    const mail = await transporter.sendMail({
      from: `${process.env.EMAIL_HOST_NAME}`,
      to: `${process.env.TO_EMAIL}`,
      subject: `New Contact Form Submission from ${body.name} ${body.lastName} | Quartoloom`,
      html: `<!DOCTYPE html>
		<html>
		<head>
		<style>
			body {
			font-family: Arial, sans-serif;
			line-height: 1.6;
			}
			.container {
			width: 100%;
			max-width: 600px;
			margin: 0 auto;
			padding: 20px;
			border: 1px solid #ccc;
			border-radius: 10px;
			background-color: #f9f9f9;
			}
			.header {
			text-align: center;
			padding: 10px 0;
			border-bottom: 1px solid #ccc;
			}
			.content {
			padding: 20px 0;
			}
			.footer {
			text-align: center;
			padding: 10px 0;
			border-top: 1px solid #ccc;
			font-size: 0.9em;
			color: #666;
			}
		</style>
		</head>
		<body>
		<div class="container">
			<div class="header">
			<h2>New Contact Form Submission</h2>
			</div>
			<div class="content">
			<p><strong>Name:</strong> ${body.name} ${body.lastName}</p>
			<p><strong>Email:</strong> ${body.email}</p>
			<p><strong>Phone Number:</strong> ${body.phone}</p>
			<p><strong>Message:</strong></p>
			<p>${body.message}</p>
			</div>
			<div class="footer">
			<p>Please follow up with the user as soon as possible.</p>
			<p>Thank you.</p>
			<p>Best regards,<br>Quartoloom Team</p>
			</div>
		</div>
		</body>
		</html>`,
    });

    return "Done";
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong, please try again");
  }
}

export async function sendBookADemo(body: any) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },

      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });

    const mail = await transporter.sendMail({
      from: `${process.env.EMAIL_HOST_NAME}`,
      to: `${process.env.TO_EMAIL}`,
      subject: ` New Demo Booking Request from ${body.name} ${body.lastName} | Quartoloom`,
      html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f9f9f9;
      padding: 20px;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
    }
    .content {
      padding: 20px 0;
    }
    .content p {
      margin: 10px 0;
    }
    .footer {
      text-align: center;
      border-top: 1px solid #ddd;
      padding-top: 10px;
      font-size: 0.9em;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Demo Booking Request</h2>
    </div>
    <div class="content">
      <p><strong>Name:</strong> ${body.name} ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone Number:</strong> ${body.phone}</p>
      <p><strong>School Name:</strong> ${body.schoolName}</p>
      <p><strong>Role of user in the School:</strong> ${body.role}</p>
      <p><strong>Preferred Date and Time:</strong> ${body.date}</p>

    </div>
    <div class="footer">
      <p>Please contact the user to confirm the demo and provide any necessary information.</p>
      <p>Thank you.</p>
    <p>Best regards,<br>Quartoloom Team</p>
    </div>
  </div>
</body>
</html>`,
    });

    return "Done";
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong, please try again");
  }
}
