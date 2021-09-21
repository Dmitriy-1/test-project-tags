import {IsNotEmpty, IsString, isString} from "class-validator";



export class CreateTagsDto {

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string
}