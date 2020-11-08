
const nodemailer = require('nodemailer');


export class Mailer {
    static emailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        secure: false,
        auth: {
            user: 'ratespalmail@gmail.com',
            pass: 'rer9Ohdgmail'
        },
        debug: false,
        logger: true
    });

    static sendPwReset(to, html) {
        return this.emailTransporter.sendMail({
            from: '"Rates pal" <noreply@ratespal.com>',
            to,
            subject: "Reset password",
            text: "",
            html,
        });
    }
}
