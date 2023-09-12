import { Injectable, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService {
  async saveFile(file: any): Promise<string> {
    try {
      const filePath = path.join(__dirname, '..', 'uploads', file.originalname);

      fs.writeFileSync(filePath, file.buffer);
      return filePath;
    } catch (error) {
      throw new BadRequestException('Could not save file');
    }
  }
}
