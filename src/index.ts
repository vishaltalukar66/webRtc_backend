import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'
import Pusher from 'pusher';
require('dotenv').config()

const server = fastify()


const pusher = new Pusher({
    appId: `${process.env.appId}`,
    key: `${process.env.key}`,
    secret: `${process.env.secret}`,
    cluster: "ap2",
    useTLS: true,
})


server.register(cors, {
    // put your options here
    origin: "*",
    credentials: true,
    methods: ["GET", "POST"]
})

//Create Room
server.post('/join', async (req: FastifyRequest, reply: FastifyReply) => {
    const data = req.body as { room: string, newUsername: string };

    try {


        // Notify other users in the room that a new user has joined
        await pusher.trigger(`chat-${data.room}`, 'user-joined', data);

        console.log(JSON.stringify(data))
        reply.send({ message: `Joined Room ${data.room}` }).status(200);
    } catch (error) {
        console.error('Error joining room:', error);
        reply.status(500).send({ message: 'Error joining room' });
    }
});



//send message 
server.post('/messages/:room', async (req: FastifyRequest, reply: FastifyReply) => {
    const data = req.body as { room: string, username: string, message: string };

    try {

        // Broadcast the message to all users in the room
        await pusher.trigger(`chat-${data.room}`, 'message', data);
        console.log(JSON.stringify(data))
        reply.send({ status: 'Message sent' }).status(200);


    } catch (error) {
        console.error('Error sending message:', error);
        reply.status(500).send({ status: 'Error sending message' });

    }
});

server.listen({ port: 8080 || 3000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})