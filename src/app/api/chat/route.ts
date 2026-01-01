import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { chatModel,embeddingsModel } from '@/lib/ai';

interface ResumeEmbedding {
  text_content: string;
}

export async function POST(req: Request) {
  try {
    const { userId, message } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const queryVector = await embeddingsModel.embedQuery(message || "Introduction");

    const vectorResults = await prisma.$queryRaw<ResumeEmbedding[]>`
      SELECT text_content 
      FROM "resume_embeddings"
      WHERE "userId" = ${userId}
      ORDER BY vector <=> ${JSON.stringify(queryVector)}::vector`;

    const resumeContext = vectorResults.map(r => r.text_content).join("\n\n");

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", `
        You are an expert technical interviewer called "Interviewer AI".
        
        CONTEXT FROM CANDIDATE'S RESUME:
        {context}

        INSTRUCTIONS:
        - You are interviewing the candidate based on the resume context above.
        - Ask probing, follow-up questions based on what they just said.
        - Keep your responses concise (1-3 sentences).
        - Act professional but friendly.
        - If the user's message is "Introduction", start by asking them to introduce themselves or asking about a highlight from their resume.
      `],
      ["user", "{input}"]
    ]);

    const chain = prompt.pipe(chatModel).pipe(new StringOutputParser());

    const response = await chain.invoke({
      context: resumeContext || "No resume context found.",
      input: message || "Introduction"
    });

    return NextResponse.json({ response });

  } catch (e) {
    return NextResponse.json({ message: "Internal Server Error" , error: e}, { status: 500 });
  }
}