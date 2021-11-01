console.log('RTX ON')

require('express')()
    .use(require('morgan')('dev'))
    .get('*', (_, res) => res.redirect(`https://discord.gg/${'urdDmpeZGX'}`))
    .listen(
        process.env.PORT,
        console.log.bind(`start at http://127.0.0.1:${process.env.PORT}`),
    )
