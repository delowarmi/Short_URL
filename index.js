
import { app } from "./src/app.js";
import { APP_URL, PORT } from "./src/constants.js";
app.listen(PORT,()=>{
        console.log(`server is running on ${APP_URL}:${PORT}`);
        
})
