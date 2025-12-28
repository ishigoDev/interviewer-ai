
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
const chatModel = new ChatOpenAI({
  modelName: "gpt-4-turbo",
  temperature: 0.7,
});

const embeddingsModel = new OpenAIEmbeddings();
export { chatModel, embeddingsModel };