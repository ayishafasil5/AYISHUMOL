const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/EC7OcQS.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*✌︎➪ᴀᴄʜᴜᴍᴡᴏʟ☜︎︎︎✌︎*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/917594029466

Tʜɪs ʙᴏᴛ Oᴡɴᴇʀ Nᴀᴍᴇ : ❤️🥰 ✌︎ꜱʜɪʙɪ Sᴇʀ Bᴏᴛ ➪ ꜱʜɪʙɪ»:-ᴀᴄʜᴜᴍᴡᴏʟ

Aʙᴜ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/I5pM64Tju5VKGRuZh2u5sv

Gɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/SHIBI-SER/Achumwol

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/SHIBI-SER/Achumwol/tree/master/uploads

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/SHIBI-SER/Achumwol/tree/master/sticker


💝ᴀᴄʜᴜᴍᴡᴏʟ Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ ꜱʜɪʙɪ💝
`}) 

}));
