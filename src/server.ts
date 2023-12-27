import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'
import { routes } from './Routes/routes';


export const startServer = async () => {

    const server = fastify();



    // const pusher = new Pusher({
    //     appId: `${process.env.appId}`,
    //     key: `${process.env.key}`,
    //     secret: `${process.env.secret}`,
    //     cluster: "ap2",
    //     useTLS: true,
    // });


    server.register(cors, {
        // put your options here
        origin: "*",
        credentials: true,
        methods: ["GET", "POST"]
    });

    await server.register(routes);

    server.listen({ port: 8080 || 3000 }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    })
}








