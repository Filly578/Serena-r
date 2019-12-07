const Discord = require('discord.js');
const bot = new Discord.Client();
const Attachment = require('discord.js');

const token = 'NjQ1NjM5NjM3ODA0NjQ2NDAx.XdFo0Q.ATm6hPUVxMRzYYWW_ca9xP8VETw';

const PREFIX = '!';

var version = '1.0.2';

bot.on('ready', () =>{
    console.log('This Bot is Online!')
})

bot.on('message', msg=>{
  let args = msg.content.substring(PREFIX.length).split(" ");
    
 switch(args[0]){
         // 1.0.1 Update Gifs
        // Anime Gif
        case 'sword':
            const swordgif = ('https://media3.giphy.com/media/dv63Zr3IjzRq8/source.gif')
            msg.channel.send(swordgif);
        break;
        // Anime Gif
        case 'happy':
            const happygif = ('https://media3.giphy.com/media/100HzPDqKviwVi/source.gif')
            msg.channel.send(happygif);
        break;
        // Funnies
        case 'what':
            const whatgif = ('https://media0.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif')
            msg.channel.send(whatgif);
        break;
        // Anime Gif
        case 'sad':
            const sadgif = ('https://media3.giphy.com/media/ROF8OQvDmxytW/giphy.gif')
            msg.channel.send(sadgif);
        break;
        // Anime Gif
        case 'suffer':
            const suffergif = ('https://media0.giphy.com/media/o8nHLRBIS2vcc/giphy.gif')
            msg.channel.send(suffergif);
        break;
        // Anime Gif
        case 'embarrased':
            const embarrasedgif = ('https://media.tenor.com/images/8a129f1fcb74672a640f4cf0737c1da1/tenor.gif')
            msg.channel.send(embarrasedgif);
        break;
        // Anime Gif
        case 'sillyme':
            const sillymegif = ('https://media1.giphy.com/media/JmbwX2xrXVi80/source.gif')
            msg.channel.send(sillymegif);
        break;
        // Avatar Gif
        case 'haha':
            const hahagif = ('https://media2.giphy.com/media/13XsAPzCvW5JYI/giphy.gif')
            msg.channel.send(hahagif);
        break;
        // Pokemon Gif
        case 'clap':
            const clapgif = ('https://media0.giphy.com/media/Jir3toQTWW9Ne/giphy.gif')
            msg.channel.send(clapgif);
        break;
        // Anime Gif
        case 'confused':
            const confusedgif = ('https://media1.tenor.com/images/c28cf58b51b74120d2f79f729be6b5de/tenor.gif?itemid=11866636')
            msg.channel.send(confusedgif);
        break;
        // Anime Gif
        case 'huh':
            const huhgif = ('http://likegif.com/wp-content/uploads/2013/11/anime-confused-gif.gif')
            msg.channel.send(huhgif);
        break;
        // Anime Gif
        case 'stopit':
            const stopitgif = ('https://media1.tenor.com/images/06771289ebf82f84196205e201beedc5/tenor.gif?itemid=11355263')
            msg.channel.send(stopitgif);
        break;
        // Anime Gif
        case 'stop':
            const stopgif = ('https://media2.giphy.com/media/nRTX3HNLaJToY/source.gif')
            msg.channel.send(stopgif);
        break;
        // Avatar Gif
        case 'excited':
            const excitedgif = ('https://media3.giphy.com/media/kkSkgexb9xBoQ/giphy.gif')
            msg.channel.send(excitedgif);
        break;
        // Avatar Gif
        case 'crazy':
            const crazygif = ('https://thumbs.gfycat.com/RespectfulRealisticHorse-size_restricted.gif')
            msg.channel.send(crazygif);
        break;
        // Avatar Gif
        case 'cactusjuice':
            const cactusjuicegif = ('http://giphygifs.s3.amazonaws.com/media/oQAHwsVpxpy8w/giphy.gif')
            msg.channel.send(cactusjuicegif);
        break;
        // Anime Gif
        case 'loading':
            const loadinggif = ('https://media1.giphy.com/media/zgGrSqSi3SSqs/source.gif')
            msg.channel.send(loadinggif);
        break;
        // Anime Gif
        case 'surprise':
            const surprisegif = ('https://media0.giphy.com/media/93c09w31Ys65O/source.gif')
            msg.channel.send(surprisegif);
        break;
        // Anime Gif
        case 'surprise1':
            const surprise1gif = ('https://media.giphy.com/media/nesIgyNcDdbxe/giphy.gif')
            msg.channel.send(surprise1gif);
        break;
        // Anime Gif
        case 'surprise2':
            const surprise2gif = ('https://i.gifer.com/DAuh.gif')
            msg.channel.send(surprise2gif);
        break;
        // Anime Gif
        case 'love':
            const lovegif = ('https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif')
            msg.channel.send(lovegif);
        break;
        // Anime Gif
        case 'tea':
            const teagif = ('https://i.pinimg.com/originals/f2/8f/1b/f28f1b8364a4cb4702cdcfdbbdb36b2f.gif')
            msg.channel.send(teagif);
        break;
        // Anime Gif
        case 'laugh':
            const laughgif = ('https://media1.giphy.com/media/4jo8C9xplrLG0/giphy.gif')
            msg.channel.send(laughgif);
        break;
        // Minecraft Gif
        case 'creeper':
            const creepergif = ('https://media3.giphy.com/media/qCFw3jLXkTAkM/giphy.gif')
            msg.channel.send(creepergif);
        break;
        // Minecraft Gif
        case 'pig':
            const piggif = ('https://media0.giphy.com/media/139eZBmH1HTyRa/giphy.gif')
            msg.channel.send(piggif);
        break;
        // Minecraft Gif
        case 'herobrine':
            const herobrinegif = ('https://media1.giphy.com/media/OzJ4bGpmSHBwA/giphy.gif')
            msg.channel.send(herobrinegif);
        break;
        // Minecraft Gif
        case 'enderbro':
            const enderbrogif = ('https://media3.giphy.com/media/lQ8UtEWNmtyj6/giphy.gif')
            msg.channel.send(enderbrogif);
        break;
        // Minecraft Gif
        case 'bomb':
            const bombgif = ('https://i.makeagif.com/media/5-10-2015/q0tjHp.gif')
            msg.channel.send(bombgif);
        break;
        // Minecraft Gif
        case 'tank':
            const tankgif = ('https://media1.tenor.com/images/228090744e4edbab78f778e6c804c0f3/tenor.gif?itemid=15395360')
            msg.channel.send(tankgif);
        break;
        // Anime Gif
        case 'disgust':
            const disgustgif = ('https://media1.giphy.com/media/VgNPHDen9axO0/source.gif')
            msg.channel.send(disgustgif);
        break;
        // Anime Gif
        case 'surprise3':
            const surprise3gif = ('https://thumbs.gfycat.com/SparklingObedientGoldfinch-size_restricted.gif')
            msg.channel.send(surprise3gif);
        break;
        // Pokemon Gif
        case 'angry':
            const angrygif = ('https://media0.giphy.com/media/KkN91uUyBo2Yw/source.gif')
            msg.channel.send(angrygif);
        break;
        }      

})

bot.login(process.env.token);
