import PDFParser from "pdf2json";
import { safeDecode } from "./utils";

export async function parsePDF(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const parser = new PDFParser(null, true);
    parser.on("pdfParser_dataError", (errData) => reject(typeof errData === "object" && errData !== null && "parserError" in errData ? errData.parserError : errData));
    
    parser.on("pdfParser_dataReady", (pdfData) => {
       try {
        let fullText = "";
        for (const page of pdfData.Pages) {
          for (const textItem of page.Texts) {
            for (const run of textItem.R) {
              fullText += safeDecode(run.T) + " ";
            }
          }
          fullText += "\n";
        }
        resolve(fullText);
      } catch (error) {
        reject(error);
      }
    });

    parser.parseBuffer(buffer);
  });
}