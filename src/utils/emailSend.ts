import nodemailer from 'nodemailer';
import { User } from '../Types/form.interface'

export const sendEmail = async (data:any) => {
    try {

        const smtpTransport = nodemailer.createTransport({
            host: process.env.HOST,
            service:process.env.SERVICE,
            port: 587,
            secure: true,
            auth: {
              user:process.env.USER_NAME,
              pass:process.env.PASS ,
            },
        });

        const emailContent = `
        First Name: ${data.firstName}\n
        Last Name: ${data.lastName}\n
        Mobile Number: ${data.mobile}\n
        Email: ${data.email}\n
        Address: ${data.address}\n
        Pin Code: ${data.pinCode}\n
        City: ${data.city}\n
        State: ${data.state}\n
        Country: ${data.country}\n
        View Resume : ${data.resumeUrl}\n
        `;

        await smtpTransport.sendMail({
            from : process.env.USER_NAME,
            to : 'sujay@safeproindia.com',
            subject : 'Candidates Applications Data',
            text : emailContent
        }).then((response)=>{
            console.log('SENDED');
        })
        
    } catch (error) {
        console.log(error);
    }
}