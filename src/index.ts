import express from 'express';
import { RequestParams } from './types/params.types';
const app = express();


app.get('/:title', (req :RequestParams<{title:string}>,res)=>{    
    const title :string = req.params.title
    res.send(`Hello ${title}`)
})


app.listen(5000, () => console.log("> Server worked for 5000 port") )