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
        case 'sword':
            const swordgif = ('https://media3.giphy.com/media/dv63Zr3IjzRq8/source.gif')
            msg.channel.send(swordgif);
        break;
        case 'ok':
            const okgif = ('https://media.giphy.com/media/l0K4k1O7RJSghST3a/giphy.gif')
            msg.channel.send(okgif)
        break;
        case 'force':
            const forcegif = ('https://media1.tenor.com/images/1374275cbd1274e54cf956bb65de3115/tenor.gif?itemid=10597313')
            msg.channel.send(forcegif)
        break;
        case 'yes':
            const yesgif = ('https://media.giphy.com/media/l1ugpiu9HmHlbimTm/giphy.gif')
            msg.channel.send(yesgif)
        break;
        case 'no':
            const nogif = ('https://media0.giphy.com/media/wYyTHMm50f4Dm/giphy.gif')
            msg.channel.send(nogif)
        break;
        case 'unlearn':
            const unlearngif = ('https://irp-cdn.multiscreensite.com/e895222d/dms3rep/multi/mobile/ezgif.com-gif-maker+%285%29.gif')
            msg.channel.send(unlearngif)
        break;
        case 'order':
            const ordergif = ('https://media.giphy.com/media/xTiIzrRyvrFijaEtY4/giphy.gif')
            msg.channel.send(ordergif)
        break;
        case 'bobcrazy':
            const bobcrazygif = ('https://media.discordapp.net/attachments/604704499034226709/646778303763709963/image0.jpg?width=300&height=300')
            msg.channel.send(bobcrazygif)
        break;
        case 'crazy':
            const crazygif = ('https://media3.giphy.com/media/3oxRmGXbquXKz6DNPq/giphy.gif')
            msg.channel.send(crazygif)
        break;
        case 'crazyman':
            const crazymangif = ('https://media1.giphy.com/media/12s2Es7u6eFI64/giphy.gif')
            msg.channel.send(crazymangif)
        break;
        case 'pass':
            const passgif = ('https://media1.tenor.com/images/fefe44b82b6e4b197cf5641206a63ee5/tenor.gif?itemid=8224531')
            msg.channel.send(passgif)
        break;
        case 'done':
            const donegif = ('https://media.giphy.com/media/3oKIPf3C7HqqYBVcCk/giphy.gif')
            msg.channel.send(donegif)
        break;
        case 'showoff':
            const showoffgif = ('https://media1.giphy.com/media/3UGIfG44d7ToY/giphy.gif')
            msg.channel.send(showoffgif)
        break;
        case 'user':
         const user = new Discord.RichEmbed()
         .setTitle('User Information')
         .addField('Player Name', msg.author.username, true)
         .addField('Version', version, true)
         .addField('Current Server', msg.guild.name, true)
         .setColor(0xF1C40F)
         .setThumbnail(msg.author.avatarURL)
         msg.channel.sendEmbed(user);
        break;
        case 'happy':
            const happygif = ('https://media3.giphy.com/media/100HzPDqKviwVi/source.gif')
            msg.channel.send(happygif);
        break;
        case 'what':
            const whatgif = ('https://media0.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif')
            msg.channel.send(whatgif);
        break;
        case 'sad':
            const sadgif = ('https://media3.giphy.com/media/ROF8OQvDmxytW/giphy.gif')
            msg.channel.send(sadgif);
        break;
        case 'suffer':
            const suffergif = ('https://media0.giphy.com/media/o8nHLRBIS2vcc/giphy.gif')
            msg.channel.send(suffergif);
        break;
        case 'embarrased':
            const embarrasedgif = ('https://media.tenor.com/images/8a129f1fcb74672a640f4cf0737c1da1/tenor.gif')
            msg.channel.send(embarrasedgif);
        break;
        case 'sillyme':
            const sillymegif = ('https://media1.giphy.com/media/JmbwX2xrXVi80/source.gif')
            msg.channel.send(sillymegif);
        break;
        case 'haha':
            const hahagif = ('https://media2.giphy.com/media/13XsAPzCvW5JYI/giphy.gif')
            msg.channel.send(hahagif);
        break;
        case 'clap':
            const clapgif = ('https://media0.giphy.com/media/Jir3toQTWW9Ne/giphy.gif')
            msg.channel.send(clapgif);
        break;
        case 'confused':
            const confusedgif = ('https://media1.tenor.com/images/c28cf58b51b74120d2f79f729be6b5de/tenor.gif?itemid=11866636')
            msg.channel.send(confusedgif);
        break;
        case 'huh':
            const huhgif = ('http://likegif.com/wp-content/uploads/2013/11/anime-confused-gif.gif')
            msg.channel.send(huhgif);
        break;
        case 'stopit':
            const stopitgif = ('https://media1.tenor.com/images/06771289ebf82f84196205e201beedc5/tenor.gif?itemid=11355263')
            msg.channel.send(stopitgif);
        break;
        case 'stop':
            const stopgif = ('https://media2.giphy.com/media/nRTX3HNLaJToY/source.gif')
            msg.channel.send(stopgif);
        break;
        case 'mushroom':
            const mushroomgif = ('https://media3.giphy.com/media/kkSkgexb9xBoQ/giphy.gif')
            msg.channel.send(mushroomgif);
        break;
        case 'loveexplosion':
            const loveexplosiongif = ('https://thumbs.gfycat.com/RespectfulRealisticHorse-size_restricted.gif')
            msg.channel.send(loveexplosiongif);
        break;
        case 'cactusjuice':
            const cactusjuicegif = ('http://giphygifs.s3.amazonaws.com/media/oQAHwsVpxpy8w/giphy.gif')
            msg.channel.send(cactusjuicegif);
        break;
        case 'loading':
            const loadinggif = ('https://media1.giphy.com/media/zgGrSqSi3SSqs/source.gif')
            msg.channel.send(loadinggif);
        break;
        case 'surprise':
            const surprisegif = ('https://media0.giphy.com/media/93c09w31Ys65O/source.gif')
            msg.channel.send(surprisegif);
        break;
        case 'supersurprise':
            const supersurprisegif = ('https://media.giphy.com/media/nesIgyNcDdbxe/giphy.gif')
            msg.channel.send(supersurprisegif);
        break;
        case 'gasp':
            const gaspgif = ('https://i.gifer.com/DAuh.gif')
            msg.channel.send(gaspgif);
        break;
        case 'love':
            const lovegif = ('https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif')
            msg.channel.send(lovegif);
        break;
        case 'notamused':
            const notamusedgif = ('https://i.pinimg.com/originals/f2/8f/1b/f28f1b8364a4cb4702cdcfdbbdb36b2f.gif')
            msg.channel.send(notamusedgif);
        break;
        case 'laugh':
            const laughgif = ('https://media1.giphy.com/media/4jo8C9xplrLG0/giphy.gif')
            msg.channel.send(laughgif);
        break;
        case 'creeper':
            const creepergif = ('https://media3.giphy.com/media/qCFw3jLXkTAkM/giphy.gif')
            msg.channel.send(creepergif);
        break;
        case 'pig':
            const piggif = ('https://media0.giphy.com/media/139eZBmH1HTyRa/giphy.gif')
            msg.channel.send(piggif);
        break;
        case 'herobrine':
            const herobrinegif = ('https://media1.giphy.com/media/OzJ4bGpmSHBwA/giphy.gif')
            msg.channel.send(herobrinegif);
        break;
        case 'enderbro':
            const enderbrogif = ('https://media3.giphy.com/media/lQ8UtEWNmtyj6/giphy.gif')
            msg.channel.send(enderbrogif);
        break;
        case 'bomb':
            const bombgif = ('https://i.makeagif.com/media/5-10-2015/q0tjHp.gif')
            msg.channel.send(bombgif);
        break;
        case 'tank':
            const tankgif = ('https://media1.tenor.com/images/228090744e4edbab78f778e6c804c0f3/tenor.gif?itemid=15395360')
            msg.channel.send(tankgif);
        break;
        case 'disgust':
            const disgustgif = ('https://media1.giphy.com/media/VgNPHDen9axO0/source.gif')
            msg.channel.send(disgustgif);
        break;
        case 'superdupersurprise':
            const superdupersurprisegif = ('https://thumbs.gfycat.com/SparklingObedientGoldfinch-size_restricted.gif')
            msg.channel.send(superdupersurprisegif);
        break;
        case 'angry':
            const angrygif = ('https://media0.giphy.com/media/KkN91uUyBo2Yw/source.gif')
            msg.channel.send(angrygif);
        break;
        case 'terrified':
            const terrifiedgif = ('https://media1.giphy.com/media/14ut8PhnIwzros/giphy.gif')
            msg.channel.send(terrifiedgif);
        break;

        }      

})

bot.login(process.env.token);
