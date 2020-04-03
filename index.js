const Discord = require('discord.js');
const client = new Discord.Client();
const puppeteer = require('puppeteer');

global.username = ''
global.password = ''
global.discordlogin = ''

client.on('ready', () => {
    cheggloggin()
    console.log(`Logged in as ${client.user.tag}!`);
  });
client.on('message', message => {
    if(message.member.hasPermission(['SEND_MESSAGES'])) {
        if(message.content.startsWith(`!chegg`)) {

            var s = message.content.replace('!chegg', '')
            cheggtopdf(s)
            async function cheggtopdf(url){
                await page.goto(url, {waitUntil: 'networkidle2'});
                global.screenshot = await page.screenshot({path: 'test.png', fullPage: true});
            
                message.channel.send(message.author.username, {files: [screenshot]});
            }
        }
    }
})
  client.login(discordlogin);
async function cheggloggin(){
    global.browser = await puppeteer.launch({headless: false});
    global.page = await browser.newPage();
    await page.goto("https://www.chegg.com/login/?redirect=https%3A%2F%2Fwww.chegg.com%2F", {waitUntil: 'networkidle2'});
    await page.type('#emailForSignIn', username, {delay: 100}); // Types slower, like a user
    await page.type('#passwordForSignIn', password, {delay: 100}); // Types slower, like a user
    await page.click('#eggshell-8 > form > div > div > div > footer > button'); // Types slower, like a user

}




