import Router from 'koa-router'

const Test = new Router()

Test.get('/', async function (context) {
    context.body = await 'Hello nodejs'
})

Test.get('/:name', async function (context) {
    let param = context.params.name
    context.body = await param
})

export default Test