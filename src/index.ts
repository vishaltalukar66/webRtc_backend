//start server

import { startServer } from "./server";

require('dotenv').config({ path: './.env' })


const index = async () => {
    try {
        //Invoke Db connect then start server

        await startServer();



    } catch (error) {
        console.log("Unable to start Server");
    }
}



index();