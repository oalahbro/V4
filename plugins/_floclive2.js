import { generateWAMessageFromContent } from "@whiskeysockets/baileys";

let handler = async (m, { conn }) => {
  let prep = generateWAMessageFromContent(
    m.chat,
    {
      liveLocationMessage: {
        degreesLatitude: 34.672314,
        degreesLongitude: 135.484802,

        caption: wm,

        sequenceNumber: 1656662972682001,
        timeOffset: 8600,
        jpegThumbnail: null,
      },
    },
    { quoted: m }
  );

  return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id });
};

handler.command = /^loc2$/;

handler.owner = true;

export default handler;
