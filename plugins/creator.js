const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
let a = [{
    displayName: 'Owner',
    vcard: 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n'
    + 'N:;Ownerbot;;;FN:~ ʙᴏᴛᴢ ~\n'
    + 'ORG:Pemilik Bot\n'
    + 'TEL;Creator👑;waid=6285822347348:6285822347348\n'
    //+ 'item1.TEL;Support Whatsapp;waid=15517868060:15517868060\n'
    + `item1.X-ABLabel:👑 Creator ${global.wm} \n`
    + 'item2.EMAIL;type=INTERNET: arulltes@gmail.com\n'
    + 'item2.X-ABLabel:💌 𝙀𝙢𝙖𝙞𝙡\n'
    + 'item3.URL:https://instagram.com/sahrulwara_____\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;🇲🇨 Indonesia 🇲🇨;;;;\n'
    + 'item4.X-ABADR:ac\n'
    + 'item4.X-ABLabel:🌎 𝙍𝙚𝙜𝙞𝙤𝙣\n'
    + 'item5.X-ABLabel:Chat yg benar!\n'
    + 'END:VCARD'
  },
  {
   displayName: 'Halo',
   vcard: 'BEGIN:VCARD\n' // metadata of the contact card

   + 'VERSION:3.0\n' 

   + 'N:;Manusia;;;'

   + 'FN:~ orang ~\n' // full name

   + 'ORG:Bot\nTEL;Bot ♨️;waid=6283843192208:6283843192208\n'

   //+ 'item1.TEL;Support Whatsapp;waid=6281299878753:6281299878753\n' // WhatsApp ID + phone number

   + `item1.X-ABLabel:👑 Moderator ${global.wm} \n`
   + 'item2.EMAIL;type=INTERNET: arulltes@gmail.com\n'

   + 'item2.X-ABLabel:💌 𝙀𝙢𝙖𝙞𝙡\n'

   //+ 'item3.URL:https://instagram.com/sahrulwara_____\n'

   //+ 'item3.X-ABLabel:Instagram\n'

   + 'item4.ADR:;;🇲🇨 Indonesian 🇲🇨;;;;\n'

   + 'item4.X-ABADR:ac\n'

   + 'item4.X-ABLabel:🌎 𝙍𝙚𝙜𝙞𝙤𝙣\n'

   + 'item5.X-ABLabel:Gusah Dichat,Gbakaln Dibalas\n'

   + 'END:VCARD'
}];

conn.sendMessage(m.chat, { contacts: { displayName: 'Huy', contacts: a }}, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
