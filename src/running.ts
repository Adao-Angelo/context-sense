import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { semanthicSearchToOffensiveWordsByContext } from "./configPrompt";

dotenv.config();

const googleApiKey: string = String(process.env.googleKey);

const genAI = new GoogleGenerativeAI(googleApiKey);

async function run(context: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = semanthicSearchToOffensiveWordsByContext(context);

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

export { run };
