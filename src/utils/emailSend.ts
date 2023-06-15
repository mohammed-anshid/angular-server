import nodemailer from 'nodemailer';
import { User } from '../Types/form.interface'

export const sendEmail = async (data:any) => {
    try {

        const smtpTransport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            service:'Gmail',
            port: 587,
            secure: true,
            auth: {
              user:'mohammedanshid100@gmail.com',
              pass:'egfnldkmybpipgof',
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
            from : 'mohammedanshid100@gmail.com',
            to : 'mohammedanshid101@gmail.com',
            subject : 'Candidates Applications Data',
            text : emailContent
        }).then((response)=>{
            console.log('SENDED');
        })
        
    } catch (error) {
        console.log(error);
    }
}