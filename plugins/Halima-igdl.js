import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*Give me the link of the insta reel*`;
  m.reply(wait);

  let res = await fetch(`https://api.zeltoria.my.id/api/download/instagram?apikey=Elistz&url=${text}`);
  let x = await res.json();

  let cap = `HERE IS THE VIDEO >,<`;
  
  if (x.result && x.result.length > 0) {
    conn.sendFile(m.chat, x.result[0].url, 'instagram.mp4', cap, m);
  } else {
    throw `No video found.`;
  }
}

handler.help = ['instagram']
handler.tags = ['dl']
handler.command = /^(insta|igdl|ig|instagram)$/i


export default handler
