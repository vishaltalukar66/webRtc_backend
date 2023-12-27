import { FastifyReply, FastifyRequest } from "fastify";
import { pusherInstance } from "../utils/pusherInstance";

export const webRtcHandler = async (req: FastifyRequest, reply: FastifyReply) => {

    try {

        // const params = req.params as { type: string, enum: ['offer', 'answer', 'signal'] };

        const data = req.body as { from: string, to: string, data: string, type: string, room: string };
        // console.log(data);

        await pusherInstance().trigger("web", 'message', data).then(() => {
            reply.send({ status: 200, message: 'Incomming webRTC request......' }).status(200);
        });

    } catch (error) {
        reply.status(400).send({ status: 400, message: 'Error joining room' });
    }
}