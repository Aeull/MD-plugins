let fs = require('fs')

let handler = async (m, { conn, text }) => {
let text1 = text.split('|')[0]
let text2 = text.split('|')[1]
try {
   let q = m.quoted ? m.quoted : m
   let mime = m.quoted.mimetype || ''
   if (/webp/.test(mime)) {
      let img = await q.download()
      let enc = await conn.sendImageAsSticker(m.chat, img, m, { packname: text1 ? text1 : 'Kosong :(', author: text2 ? text2 : 'Tidak ada wm :(' })
      await fs.unlinkSync(enc)
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let enc = await conn.sendImageAsSticker(m.chat, img, m, { packname: text1 ? text1 : 'Kosong :(', author: text2 ? text2 : 'Tidak ada wm :(' })
      await fs.unlinkSync(enc)
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) throw 'Maksimal 10 detik!'
      let img = await q.download()
      let enc = await conn.sendVideoAsSticker(m.chat, img, m, { packname: text1 ? text1 : 'Kosong :(', author: text2 ? text2 : 'Tidak ada wm :(' })
      await fs.unlinkSync(enc)
    } else {
     m.reply('Tag image/video/sticker yang ingin diberikan wm custom!!')
     }
   } catch (e) {
     m.reply(e)
  }
}
handler.help = ['wm', 'take'].map(v => v + ' <packname|<author>')
handler.tags = ['sticker']
handler.command = /^(wm|take)$/i

handler.limit = true

module.exports = handler