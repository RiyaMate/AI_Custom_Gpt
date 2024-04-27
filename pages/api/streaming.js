// Solution
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { input, firstMsg } = req.body;

    if (!input || !input.name || !input.city) {
      return res.status(400).json({ error: "Incomplete input provided!" });
    }

    if (firstMsg) {
      console.log("Initializing chain");
      model = new OpenAI({ modelName: "gpt-3.5-turbo" });
      memory = new BufferMemory();
      chain = new ConversationChain({ llm: model, memory: memory });
    }

    const customPrompt = `Given the name ${input.name} and the city ${input.city}, create a short and catchy rap that includes a pun about the city.`;
    console.log("Generated custom prompt: ", customPrompt);
    try {
      const response = await chain.generateResponse(customPrompt);
      return res.status(200).json({ output: response });
    } catch (error) {
      console.error("Failed to generate response: ", error);
      return res.status(500).json({ error: "Failed to generate the rap" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
