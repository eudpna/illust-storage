// next.config.js
module.exports = {
    async redirects() {
        return [
            {
                source: '/docs/java-sierpinski',
                destination: 'https://store.nyaw.net/java-sierpinski',
                permanent: true,
            },
        ]
    },
}