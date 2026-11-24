import { ChatGroq } from "@langchain/groq"
import { env } from "../../config/env.js";
import { SystemMessage, HumanMessage, AIMessage } from "langchain"
import * as z from "zod";

const model = new ChatGroq({
    model: "qwen/qwen3.8-27b",
    apiKey: env.groqApiKey,
})

const structureModel = model.withStructuredOutput(z.object({
    title: z.string().min(1).max(60).describe("The title of the conversation on the basis of the user's 1st message")
}))


export async function generateTitle(message) {

    const systemMessage = new SystemMessage(`
        You are an AI asistant that generates the title of the conversation on the basis of users message

        ##Follow these guidelines 
        -the title should be concise and related to users message.
        -the title should be no longer than 60 chharacater.
        -avoide using generic characters like chat and communications.
        -focus on main topic or intent of the user.

        `)

    const humanmessage = new HumanMessage(message);

    const response = await structureModel.invoke([systemMessage, humanmessage]);

    return response;
}