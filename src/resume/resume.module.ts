import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { OcrService } from '../ocr/ocr.service';
import { UploadService } from '../upload/upload.service';

@Module({
  controllers: [ResumeController],
  providers: [OcrService, UploadService],
})
export class ResumeModule {}
