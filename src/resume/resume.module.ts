import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { OcrService } from '../ocr/ocr.service';
import { UploadService } from '../upload/upload.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [ResumeController],
  providers: [OcrService, UploadService],
})
export class ResumeModule {}
