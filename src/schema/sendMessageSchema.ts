export const sendMessageSchema = {
    body: {
        type: 'object',
        properties: {
            room: { type: 'string' },
            username: { type: 'string' },
            message: { type: 'string' },
        },
        required: ['room', 'username', 'message'],
    },
    response: {
        200: {
            type: 'object',
            properties: {
                status: { type: 'number' },
                message: { type: 'string' },
            },
        },
        400: {
            type: 'object',
            properties: {
                status: { type: 'number' },
                message: { type: 'string' },
            },
        },
    },
};
