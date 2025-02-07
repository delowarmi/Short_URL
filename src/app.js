import e from "express";
const app = e()
import path from "path";
import { fileURLToPath } from "url";
app.use (e.json({limit:'1mb'}))
app.use(e.urlencoded({limit:'1mb',extended:true}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.get('/',(_,res)=>{
        res.send("server is runnung")
})
app.all('*',(_,res)=>{
        res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})
export{app}