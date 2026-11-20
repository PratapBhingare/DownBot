import { ChatGroq } from "@langchain/groq"
import { env } from "../../config/env.js";

const model = new ChatGroq({
    model: "qwen/qwen3.8-27b",
    apiKey: env.groqApiKey,
})