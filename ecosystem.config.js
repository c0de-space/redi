module.exports = {
    apps: [
        {
            name: 'redi',
            script: 'src/app.js',
            // watch: '.',
            autorestart: true,
            env: { NODE_ENV: 'production' },
            out_file: './log/out.log',
            error_file: './log/err.log',
            node_args: '-r dotenv/config',
        },
    ],
}
