const {Telegraf} = require('telegraf')
const {v4:uuidV4} = require('uuid')
require('dotenv').config()
let factGenerator = require('./factGenerator')
let {getJokes} = require('./jokesGenerator')
let {getRandomCatFacts} = require('./catFactsGenerator')


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
    let message = `please use the /fact command to receive a new fact`
    ctx.reply(message)
})

bot.command('fact', async(ctx) => {
    try{
        ctx.reply('generating image, please wait !!!')
        let imagePath = `./temp/${uuidV4()}.jpg`
        await factGenerator.generateImage(imagePath)
        await ctx.replyWithPhoto({ source: imagePath })
        factGenerator.deleteImage(imagePath)
    }catch(error){
        console.log('error', error)
        ctx.reply('error sending image')
    }
})

bot.command('doni', async(ctx) => {
    let doni = 'ini dari variable'
    try{
        ctx.reply(doni)
    }catch(error){
        console.log('error', error)
        ctx.reply('error, please try again')
    }
})

bot.command('joke', async(ctx) => {
    const jokes = getJokes();
    try{
        ctx.reply(jokes.body)
    }catch(error){
        console.log('error', error)
        ctx.reply('error, please try again')
    }
})
bot.command('cats', async(ctx) => {
    const catFact = await getRandomCatFacts();
    try{
        ctx.reply(catFact)
        console.log(catFact)
    }catch(error){
        console.log('error', error)
        ctx.reply('error, please try again')
    }
})

bot.launch()