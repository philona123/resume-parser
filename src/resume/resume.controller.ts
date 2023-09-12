import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OcrService } from '../ocr/ocr.service';
import { UploadService } from '../upload/upload.service';

@Controller('resume')
export class ResumeController {
  constructor(
    private readonly ocrService: OcrService,
    private readonly uploadService: UploadService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('resume'))
  async uploadResume(@UploadedFile() file: any): Promise<string> {
    const filePath = await this.uploadService.saveFile(file);
    const extractedText = await this.ocrService.extractTextFromPDF(filePath);
    return extractedText;
  }
}
