import { error } from "console"

export default async function handler(req ,res){
    try{

        const result = await  req.json()
        res.status(200).json({result})
    }
    catch(err){

        res.status(500).json({error:"failed to load data"})
    }
}