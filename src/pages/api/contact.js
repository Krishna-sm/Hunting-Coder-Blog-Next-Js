import * as fs from 'fs';
export default async function handler(req,res){
        if(req.method==="GET")
        {
            res.send({
                status:401,
                msg:"Get method Not allowed"
            })
        }
        else{
            console.log(req.body);
            const data =fs.promises.readdir('contactdata');
            fs.promises.writeFile(`contactdata/${(await data).length+1}.json`,JSON.stringify(req.body),()=>{})
          
            res.send({
                status:200,
                msg:"Thanku, Your Data Has Been Submit"
            });
        }
}