import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class GetPageRequest {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  roomId: number;
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  pageSize: number;
}