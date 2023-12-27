import { FastifyReply, FastifyRequest } from "fastify";
import { pusherInstance } from "../utils/pusherInstance";


export const createRoom = async (req: FastifyRequest, reply: FastifyReply) => {


    //Create Room

    const data = req.body as { room: string, newUsername: string };

    console.log(JSON.stringify(data))
    try {


        // Notify other users in the room that a new user has joined

        await pusherInstance().trigger(`chat-${data.room}`, 'user-joined', data).then(() => {

            reply.send({ status: 200, message: `Joined Room ${data}` }).status(200);
        });
        console.log("into")



    } catch (error) {

        reply.status(400).send({ status: 400, message: 'Error joining room' });
    }

}