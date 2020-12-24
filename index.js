require('dotenv').config();

const { Telegraf } = require('telegraf');
const Markup = require('telegraf/markup');

const TOKEN = process.env.TOKEN;
const DOC_API = process.env.DOC_API;
const ZOOM = process.env.ZOOM;
const DATA_KNOWLEDGE = process.env.DATA_KNOWLEDGE;
const YOUTRACK = process.env.YOUTRACK;

const bot = new Telegraf(TOKEN);

bot.start((ctx) =>  {
    ctx.reply(
        `Привет, ${ctx.message.from.first_name}! 👋\n\nДля получения ссылки на интересующий раздел проекта нажмите на соответствующую кнопку`,
        Markup.keyboard([
            ['Документация API', 'Zoom'],
            ['База знаний', 'Доска YT'],
        ]).resize().extra());
});

bot.help((ctx) => ctx.reply('Для запуска бота напишите команду /start и следуйте указаниям'));

bot.on('text', (ctx) => {
    const { text } = ctx.message;

    if (text === 'Документация API') {
        ctx.reply(DOC_API);
    } else if (text === 'База знаний') {
        ctx.reply(DATA_KNOWLEDGE);
    } else if (text === 'Zoom') {
        ctx.reply(ZOOM);
    } else if (text === 'Доска YT') {
        ctx.reply(YOUTRACK);
    } else {
        ctx.reply('К сожалению, я еще только учусь, и не все команды знаю, попробуйте ввести другую...');
    }
});

bot.launch();