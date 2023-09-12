import { Injectable } from '@nestjs/common';
import { createWorker } from 'tesseract.js';
import { PDFExtract } from 'pdf.js-extract';

@Injectable()
export class OcrService {
  async extractTextFromPDF(psfPath: string): Promise<string> {
    const worker = createWorker();
    await (await worker).load();
    await (await worker).loadLanguage('eng');
    await (await worker).initialize('eng');
    const pdfExtract = new PDFExtract();
    const data = await pdfExtract.extract(psfPath, {});
    let text = '';
    for (const page of data.pages) {
      text += page.content;
    }
    const {
      data: { text: ocrText },
    } = await (await worker).recognize(text);
    (await worker).terminate();
    return ocrText;
  }
}
