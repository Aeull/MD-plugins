const { MessageType } = require("@adiwajshing/baileys-md")

async function handler(m, { command }) {
    if (!global.db.data.settings.anon) return m.reply('Fitur ini tidak diaktifkan Oleh owner!')
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) throw 'Kamu tidak sedang berada di anonymous chat'
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) this.sendMessage(other, { text: 'Partner meninggalkan chat\nKasian :v', mentions: [m.sender] }, { quoted: m })
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) throw 'Kamu masih berada di dalam anonymous chat'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                this.sendMessage(room.a, { text: 'Menemukan partner!', mentions: [m.sender] }, { quoted: m })
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('Menemukan partner!')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                m.reply('Menunggu partner...')
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler