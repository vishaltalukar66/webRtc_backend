import { FastifyInstance } from "fastify";
import { createRoom } from "../handler/createRoom";
import { createRoomSchema } from "../schema/createRoomSchema";
import { sendMessageSchema } from "../schema/sendMessageSchema";
import { handleMessage } from "../handler/handleMessage";
import { webRtcHandler } from "../handler/webRtcHandler";



export const routes = async (server: FastifyInstance) => {



    const createRoomRoute = {
        schema: createRoomSchema,
        handler: createRoom
    }


    const handleMessageRoute = {
        schema: sendMessageSchema,
        handler: handleMessage
    }

    const webRtcRoute = {
        // schema: webRtcSchema,
        handler: webRtcHandler
    }

    // Route initialize
    server.post('/common/createroom', createRoomRoute);
    server.post('/common/message', handleMessageRoute);
    server.post('/webrtc/connect', webRtcRoute);
}
