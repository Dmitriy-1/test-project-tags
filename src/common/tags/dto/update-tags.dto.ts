import {IsOptional, IsString} from "class-validator";

export class UpdateTagsDto {
    @IsOptional()
    @IsString()
    title:string

    @IsOptional()
    @IsString()
    description: string
}