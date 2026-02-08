import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config()

export const contact = async (req, res) => {

    const {name, email, message} = req.body
    console.log(req.body)


    const transporter = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
        auth : {
            user : process.env.MAIL_USER,
            pass : process.env.MAIL_PASS
        },
    })
    const mailframe = {
        from : email,
        subject : `New contact submission in portfolio from ${name}`,
        to : "contact@safalgautam.com.np",
        text : `Name : ${name} \nE-mail : ${email} \nmessage : ${message}`
    }

    try {
        await transporter.sendMail(mailframe)
        res.status(200)
    }
    catch (error) {
        console.error(error)
        res.status(500).send("error sending mail")
    }

    
};