import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { prisma } from "./db";
import env from "dotenv";

env.config();
// 1. Initialize OpenAI Embeddings (The "Translator" to numbers)
const embeddings = new OpenAIEmbeddings({
  modelName: "text-embedding-3-small", // Cheaper & faster model
  openAIApiKey: process.env.OPENAI_API_KEY,
});

/**
 * Main Function: Takes a User ID and Resume Text, checks it, 
 * turns it into numbers, and saves it to Neon.
 */
export async function embedAndStoreResume(userId: string, resumeText: string) {
  try {
    // Step A: Clean old data (Optional: delete previous resume versions)
    // We want the AI to only know the latest version of the candidate.
    await prisma.resumeEmbedding.deleteMany({
      where: { userId: userId },
    });

    // Step B: Split text into chunks
    // AI can't read a whole file at once effectively. We break it into ~1000 char pieces.
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200, // Overlap ensures context isn't lost at the cut point
    });
    
    const docs = await splitter.createDocuments([resumeText]);

    // Step C: Convert chunks to vectors
    // We map over the text chunks and ask OpenAI for the vector for each.
    const vectorData = await Promise.all(
      docs.map(async (doc) => {
        const embedding = await embeddings.embedQuery(doc.pageContent);
        return {
          content: doc.pageContent,
          embedding: embedding,
        };
      })
    );

    for (const item of vectorData) {
      const vectorString = `[${item.embedding.join(",")}]`;

      await prisma.$executeRaw`
        INSERT INTO "resume_embeddings" ("id", "content", "embedding", "userId")
        VALUES (gen_random_uuid(), ${item.content}, ${vectorString}::vector, ${userId});
      `;
    }
    return { success: true, chunks: docs.length };

  } catch (error) {
    throw error;
  }
}