import { rest } from 'msw';

export const handlers = [
    rest.get('/node_list', (req, res, ctx) => {
        const data = [
            {
                name: '0-0',
                parentId: null,
            },
            {
                name: '0-1',
                parentId: null,
            },
            {
                name: '0-2',
                parentId: null,
            },
            {
                name: '0-0-0',
                parentId: '0-0',
            },
            {
                name: '0-0-0-0',
                parentId: '0-0-0',
            },
            {
                name: '0-0-0-1',
                parentId: '0-0-0',
            },
            {
                name: '0-0-0-2',
                parentId: '0-0-0',
            },
            {
                name: '0-0-1-0',
                parentId: '0-0-1',
            },
            {
                name: '0-0-1-1',
                parentId: '0-0-1',
            },
            {
                name: '0-0-1-2',
                parentId: '0-0-1',
            },
            {
                name: '0-0-2',
                parentId: '0-0',
            },
            {
                name: '0-1-0',
                parentId: '0-1',
            },
        ];

        return res(ctx.status(200), ctx.json(data));
    }),
];
