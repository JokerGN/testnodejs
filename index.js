import Koa from 'koa'
import Router from 'koa-router'
import Test from './app/api/test'
import 'dotenv/config'

const app = new Koa()
const router = new Router()

router.use('/test', Test.routes())

app.use(router.routes())
app.use(router.allowedMethods())

console.log('app listen at port '+process.env.PORT)
app.listen(process.env.PORT)