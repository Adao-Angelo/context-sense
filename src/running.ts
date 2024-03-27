import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const googleApiKey: string = String(process.env.googleKey);

const genAI = new GoogleGenerativeAI(googleApiKey);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt =
    "como posso faser soma de dois numeros coma ia genemi da google";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

run();
