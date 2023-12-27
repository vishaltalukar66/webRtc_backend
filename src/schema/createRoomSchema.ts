export const createRoomSchema = {
    body: {
        type: 'object',
        properties: {
            room: { type: 'string' },
            newUsername: { type: 'string' },
        },
        required: ['room', 'newUsername'],
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
}