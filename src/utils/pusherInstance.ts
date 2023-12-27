import Pusher from "pusher";

export const pusherInstance = () => {
    return (new Pusher({
        appId: `${process.env.appId}`,
        key: `${process.env.key}`,
        secret: `${process.env.secret}`,
        cluster: "ap2",
        useTLS: true,
    }))
}