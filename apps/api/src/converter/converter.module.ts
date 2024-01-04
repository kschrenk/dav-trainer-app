import { Module } from '@nestjs/common';
import { ConverterService } from './converter.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ConverterService],
  exports: [ConverterService],
})
export class ConverterModule {}
