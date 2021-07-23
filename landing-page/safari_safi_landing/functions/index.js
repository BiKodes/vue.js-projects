const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const { info } = require("firebase-functions/lib/logger");
admin.initializeApp();


let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
        user: "apikey",
        pass: "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"
    }
});


exports.sendEmail = functions.https.onRequest((request, response) => {
    const email_from = request.query.email_from;
    const message = request.query.message;


    const mailOPtions = {
        from: 'Safari Safi <bikocodes@gmail.com>',
        to: 'bikocodes@gmail.com',
        subject: 'Safari Safi Contanct From Submission',
        html: `${message} <br><br> From ${email_from}`
    }

    transporter.sendMail(mailOPtions, (error, info) => {
       if (error) {
            console.log(`ERROR: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`);
            response.send(error.toString());
       } 

       response.send('You message was submitted successfuly!');
    })
})
 