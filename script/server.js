const express = require('express');
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post('/contact', async (req, res) => {
    const { nom, email, tel, objet, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "test@gmail.com",
            pass: "qwqw0012"
        }
    });

    const mailOption = {
        from: email,
        to: "test@gmail.com",
        subject: `Contact : objet`,
        text: `Nom : {nom}\nEmail : email: {tel}\n\nMessage:\n${message}`
    };

    try {
        await
            transporter.sendMail(mailOption);
        res.send('Succes');
    } catch (error) {
        res.status(500).send(error.message)
    }

    app.listen(3000, () => {
        console.log('Localhost');
    })
})