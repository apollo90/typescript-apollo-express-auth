module.exports = {
    schema: [
        {
            'http://localhost:4000/graphql': {
                headers: {
                },
            },
        },
    ],
    documents: ['./src/graphql/*.graphql'],
    overwrite: true,
    generates: {
        './src/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        }
    },
};