import { Request , Response } from "express";
import { sendEmail } from "../utils/emailSend";
import { User } from '../Types/form.interface'

import applicationModel from "../model/applicationSchema";

export const getFormData = async (req: Request, res: Response) =>{
    try {
        let formData = req.body
        console.log(req.body,'body')

            const parts = formData.resume.split('.');
            console.log(parts)
            const url = parts[parts.length-1];
            const newPath = parts[0]+'.'+parts[1]+'.'+parts[2]+'.jpg';
            const newData = {
                firstName : req.body.firstname,
                lastName : req.body.lastname,
                mobile : req.body.number,
                email : req.body.email,
                address : req.body.address,
                pinCode : req.body.zipcode,
                city : req.body.city,
                state : req.body.state,
                country : req.body.country,
                resumeUrl : newPath
            }
            const infos = await applicationModel.create(newData)
            console.log(infos,'infos')
            await sendEmail(infos)
            res.status(200).json({status:true,message:'submitted successfully'})
    } catch (error) {
        res.status(500).json({status:false,message:'internal server error'})
    }
}