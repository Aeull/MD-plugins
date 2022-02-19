//made by https://github.com/Paquito1923
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let { youtubeSearch } = require('@bochilteam/scraper')
let fetch = require('node-fetch') 
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Alan walker faded`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  /*await conn.sendButton(m.chat, `
📌 *Title:* ${title}
🔗 *Url:* ${url}
🖹 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `.trim(), author, thumbnail, [
    ['Audio 🎧', `${usedPrefix}yta ${url} yes`], ['Video 🎥', `${usedPrefix}ytv ${url} yes`]
  ], m)*/
let anu =  `
📚 *Title:* ${title}
📹 *Duration:* ${durationH}
📌 *Upload:* ${publishedTime}
👨 *Author:* ${vid.author.name}
👁 *Views:* ${viewH}

Choose *Audio* or *Video* in button below
Dont see it? Type:\n- *!yta yt_url <Audio>*\n- *!ytv yt_url <Video>*
`

     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: await (await fetch(thumbnail)).buffer() }, 
           hydratedFooterText: `DESKRIPSI:\n${description}`,
           hydratedButtons: [{
             urlButton: {
               displayText: '🌟 Link YouTube',
               url: `${url}`,
             }

           },
               {
             quickReplyButton: {
               displayText: '🎬 Video',
               id: `.ytmp4 ${vid.url} yes`,
             }

            },
               {
             quickReplyButton: {
               displayText: '🎵 Audio',
               id: `.ytmp3 ${vid.url} yes`,
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['play'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.limit = 1
handler.command = /^(play)$/i

handler.exp = 0

module.exports = handler