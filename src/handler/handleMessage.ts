import { FastifyReply, FastifyRequest } from "fastify";
import { pusherInstance } from "../utils/pusherInstance";

export const handleMessage = async (req: FastifyRequest, reply: FastifyReply) => {

    //send message 

    const data = req.body as { room: string, username: string, message: string };

    try {

        // Broadcast the message to all users in the room
        await pusherInstance().trigger(`chat-${data.room}`, 'message', data).then(() => {
            reply.send({ status: 200, message: 'Message sent' }).status(200);
        });
        console.log(JSON.stringify(data))

    } catch (error) {
        console.error('Error sending message:', error);
        reply.status(400).send({ status: 400, message: 'Error sending message' });

    }

}