const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// 画像生成
async function generate() {
  const response = await openai.createImage({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  });
  console.log(response.data)
}

generate()