import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config()

export const contact = async (req, res) => {

    const {name, email, message} = req.body
    console.log(res.body)


    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : process.env.EMAIL,
            pass : process.env.PASSWORD
        },
    })
    const mailframe = {
        from : email,
        subject : 'New contact submission from ${name}',
        to : "contact@safalgautam.com.np",
        text : "Name : ${name} \nE-mail : ${email} \nmessage : ${message}"
    }

    try {
        await transporter.sendMail(mailframe)
        res.json({
            "message" : "Mail send successfully"
        })
    }
    catch (error) {
        console.error(error)
        res.status(500).send("error sending mail")
    }

    
};