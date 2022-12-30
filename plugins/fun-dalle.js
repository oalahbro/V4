import fetch from "node-fetch";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "sk-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",
});
const openai = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`;
  const response = await openai.createImage({
    prompt: `${text}`,
    n: 1,
    size: "512x512",
  });
  // image_url = response.data.data[0].url;
  let url = response.data.data[0].url;
  conn.sendButton(
    m.chat,
    "Nehhh Kak><",
    wm,
    url,
    [["NEXT", `.sipi ${text}`]],
    m
  );
};
handler.command = /^(sipi)$/i;
handler.tags = ["fun"];
handler.help = ["sipi"];
handler.limit = true;
export default handler;
