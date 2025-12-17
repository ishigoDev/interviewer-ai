import { NextRequest, NextResponse } from "next/server";
import { embedAndStoreResume } from "@/lib/vectorStore";
import { parsePDF } from "@/lib/pdf";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const userId = formData.get("userId") as string;

    // 1. Validation
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 });
    }

    // 2. Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 3. Extract Text from PDF
    const text = await parsePDF(buffer);

    if (!text || text.length < 50) {
        return NextResponse.json({ error: "Could not extract enough text from PDF." }, { status: 400 });
    }

    const result = await embedAndStoreResume(userId, text);

    return NextResponse.json({ 
      success: true, 
      message: "Resume embedded successfully",
      chunks: result.chunks 
    });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}