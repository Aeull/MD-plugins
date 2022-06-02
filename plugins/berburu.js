let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    if (global.db.data.users[m.sender].stamina < 1) return conn.sendButton(m.chat, 'Stamina mu tidak cukup untuk berburu!\nSilakan masak makanan dan Memakan makanannya agar stamina mu kembali!', `Tekan tombol dibawah untuk memeriksa inventory anda!\n${wm}`, 'Periksa Inv', '.inv', m)
    let __timers = (new Date - global.db.data.users[m.sender].lasthunt)
    let _timers = (60000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.data.users[m.sender]
    let buttons = [
{buttonId: '.kandang', buttonText: {displayText: 'Kandang 🐾'}, type: 1}, 
]
const buttonMessage = {
    text: `📍 Sepertinya Kamu Sudah Kecapean\nSilahkan Istirahat dulu Untuk melanjutkan berburu !\n🕖 *${timers}*`,
    footer: `${wm}`, 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.db.data.users[m.sender].lasthunt > 60000) {
let zero1 = `${Math.floor(Math.random() * 7)}`
let zero2 = `${Math.floor(Math.random() * 7)}`
let zero4 = `${Math.floor(Math.random() * 7)}`
let zero3 = `${Math.floor(Math.random() * 7)}`
let zero5 = `${Math.floor(Math.random() * 7)}`
let zero6 = `${Math.floor(Math.random() * 7)}`
let zero7 = `${Math.floor(Math.random() * 7)}`
let zero8 = `${Math.floor(Math.random() * 7)}`
let zero9 = `${Math.floor(Math.random() * 7)}`
let zero10 = `${Math.floor(Math.random() * 7)}`
let zero11 = `${Math.floor(Math.random() * 7)}`
let zero12 = `${Math.floor(Math.random() * 7)}`
let heal = `${Math.floor(Math.random() * 40)}`
.trim()

global.db.data.users[m.sender].stamina -= 5
global.db.data.users[m.sender].money -= 5000

hsl = `*━━━[ Hasil Berburu]━━━*

 *🐂 = [ ${zero1} ]*			 *🐃 = [ ${zero7} ]*
 *🐅 = [ ${zero2} ]*			 *🐮 = [ ${zero8} ]*
 *🐘 = [ ${zero3} ]*			 *🐒 = [ ${zero9} ]*
 *🐐 = [ ${zero4} ]*			 *🐟 = [ ${zero10} ]*
 *🐼 = [ ${zero5} ]*			 *🐠 = [ ${zero11} ]*
 *🐊 = [ ${zero6} ]*			 *🐓 = [ ${zero12} ]*

Beberapa Hewan bisa dimasak!

-5 Stamina (Energi)
Tersisa [${user.stamina} / 200]

-5000 Money (Biaya Berburu)
Tersisa [${global.db.data.users[m.sender].money}]
`
global.db.data.users[m.sender].banteng += zero1 * 1
global.db.data.users[m.sender].harimau += zero2 * 1
global.db.data.users[m.sender].gajah += zero3 * 1
global.db.data.users[m.sender].kambing += zero4 * 1
global.db.data.users[m.sender].panda+= zero5 * 1
global.db.data.users[m.sender].buaya += zero6 * 1
global.db.data.users[m.sender].kerbau += zero7 * 1
global.db.data.users[m.sender].sapi += zero8 * 1
global.db.data.users[m.sender].monyet += zero9 * 1
global.db.data.users[m.sender].ikan += zero10 * 1
global.db.data.users[m.sender].lele += zero11 * 1
global.db.data.users[m.sender].ayam += zero12 * 1

setTimeout(() => {
                     conn.sendButton(m.chat, hsl, wm, 'Cek Kandang', '#kandang', m)
                     }, 3000) 
  conn.reply(m.chat, '_Sedang Berburu..._', m)
  user.lasthunt = new Date * 1

    } else conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(berburu)$/i
handler.register = true
handler.group = true

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
