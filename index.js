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
        case 'dab':
            const dabgif = ('https://media1.tenor.com/images/9b2147e6ad5a8c7f0ae0f39d37230a56/tenor.gif?itemid=9672617')
            msg.channel.send(dabgif)
        break;
        case 'crazy':
            const crazygif = ('https://media3.giphy.com/media/3oxRmGXbquXKz6DNPq/giphy.gif')
            msg.channel.send(crazygif)
        break;
        case 'bestdab':
            const bestdabgif = ('https://media0.giphy.com/media/3oEjI7M0cOXG0j4HWU/giphy.gif')
            msg.channel.send(bestdabgif)
        break;
        case 'nuke':
            const nukegif = ('https://media3.giphy.com/media/XevXoNu5WZxe0/giphy.gif')
            msg.channel.send(nukegif)
        break;
        case 'nuke1':
            const nuke1 = ('https://media0.giphy.com/media/GzVvGQYhFZIAg/giphy.gif')
            msg.channel.send(nuke1)
        break;
        case 'waffle':
            const wafflegif = ('https://media1.giphy.com/media/cRBRQf8syLUyY/giphy.gif')
            msg.channel.send(wafflegif)
        break;
        case 'watermelon':
            const watermelongif = ('https://media0.giphy.com/media/11Ej01Grffnr20/giphy.gif')
            msg.channel.send(watermelongif)
        break;
        case 'korea':
            const koreagif = ('https://media1.giphy.com/media/l3vR1tookIhM8nZJu/giphy.gif')
            msg.channel.send(koreagif)
        break;
        case 'bob':
            const bobgif = ('https://media2.giphy.com/media/3oEjHHALyoj9iPfoTm/giphy.gif')
            msg.channel.send(bobgif)
        break;
        case 'dance':
            const dancegif = ('https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5095868')
            msg.channel.send(dancegif)
        break;
        case 'noodle':
            const noodlegif = ('https://media.giphy.com/media/1zRdamA0f9ifJkfEGF/giphy.gif')
            msg.channel.send(noodlegif)
        break;
        case 'chocolate':
            const chocolategif = ('https://xceed.me/blog/wp-content/uploads/2017/09/giphy-6.gif')
            msg.channel.send(chocolategif)
        break;
        case 'rainbow':
            const rainbowgif = ('https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif')
            msg.channel.send(rainbowgif)
        break;
        case 'hobo':
            const hobogif = ('https://media2.giphy.com/media/xUOxeWgnyv0bXc9EDm/giphy.gif')
            msg.channel.send(hobogif)
        break;
        case 'dm':
            const dmgif = ('https://media1.tenor.com/images/685f9f2114613205ba5e82b70cb72cef/tenor.gif?itemid=7610838')
            msg.channel.send(dmgif)
        break;
        case 'attack':
            const attackgif = ('https://media.giphy.com/media/3oEdv3aU4kWJnCYW52/giphy.gif')
            msg.channel.send(attackgif)
        break;
        case 'rogue':
            const roguegif = ('https://media.giphy.com/media/1JbD7ffHhKPjq/giphy.gif')
            msg.channel.send(roguegif)
        break;
        case 'rum':
            const rumgif = ('https://media0.giphy.com/media/m9qkPC4koiGNa/giphy.gif')
            msg.channel.send(rumgif)
        break;
        case 'sparrow':
            const sparrowgif = ('https://media3.giphy.com/media/TE3ZlXmfr5psI/giphy.gif')
            msg.channel.send(sparrowgif)
        break;
        case 'lazy':
            const lazygif = ('https://media1.giphy.com/media/MuJDYvbYKzMwONKvdO/giphy.gif')
            msg.channel.send(lazygif)
        break;
        case 'coffee':
            const coffeegif = ('https://media1.giphy.com/media/687qS11pXwjCM/giphy.gif')
            msg.channel.send(coffeegif)
        break;
        case 'monday':
            const mondaygif = ('https://media3.giphy.com/media/3o6fJbwYFe3SmVVQ4M/giphy.gif')
            msg.channel.send(mondaygif)
        break;
        case 'coolz':
            const coolzgif = ('https://media3.giphy.com/media/4T5C71heypSItNAdXd/source.gif')
            msg.channel.send(coolzgif)
        break;
        case 'crazyman':
            const crazymangif = ('https://media1.giphy.com/media/12s2Es7u6eFI64/giphy.gif')
            msg.channel.send(crazygif)
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
        case 'kylo':
            const kylogif = ('https://media2.giphy.com/media/9E7kUhnT9eDok/giphy.gif')
            msg.channel.send(kylogif)
        break;
        case 'impossible':
            const impossiblegif = ('https://media.giphy.com/media/l3fZIF5A57lRuUBOg/giphy.gif')
            msg.channel.send(impossiblegif)
        break;
        case 'forseen':
            const forseengif = ('https://media1.giphy.com/media/B6Jr28VwfxUFa/giphy.gif')
            msg.channel.send(forseengif)
        break;
        case 'yoda':
            const yodagif = ('https://media1.giphy.com/media/SQgEr5ViRcXYs/giphy.gif')
            msg.channel.send(yodagif)
        break;
        case 'porg':
            const porggif = ('https://media3.giphy.com/media/3h2lUwrZKilQKbAK6f/source.gif')
            msg.channel.send(porggif)
        break;
        case 'season':
            const seasongif = ('https://media0.giphy.com/media/d2ZeeoOu8MHQFPQ4/source.gif')
            msg.channel.send(seasongif)
        break;
        case 'under':
            const undergif = ('https://media3.giphy.com/media/11cFgJK4tK4Jpu/giphy.gif')
            msg.channel.send(undergif)
        break;
        case 'fall':
            const fallgif = ('https://media1.giphy.com/media/r3knno4y8phhC/giphy.gif')
            msg.channel.send(fallgif)
        break;
        case 'clone':
            const clonegif = ('https://media.giphy.com/media/1lznA4FFhnyJiUYIip/giphy.gif')
            msg.channel.send(clonegif)
        break;
        case 'owl':
            const owlgif = ('https://media.giphy.com/media/3o6nUZMFasYD7yhbuo/giphy.gif')
            msg.channel.send(owlgif)
        break;
        case 'tie':
            const tiegif = ('https://media3.giphy.com/media/xTiTnzSGo70dLQYKv6/source.gif')
            msg.channel.send(tiegif)
        break;
        case 'jango':
            const jangogif = ('https://media.giphy.com/media/LXT3nVJ4sbWuI/giphy.gif')
            msg.channel.send(jangogif)
        break;
        case 'fail':
            const failgif = ('https://i.chzbgr.com/full/9031979008/hE8FF7F74/yoda-reaction-gif-that-is-why-you-fail-star-wars')
            msg.channel.send(failgif)
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
