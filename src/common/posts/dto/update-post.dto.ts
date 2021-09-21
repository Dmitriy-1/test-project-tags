import {IsNotEmpty, IsOptional, IsString} from "class-validator";


export class UpdatePostDto {

    @IsOptional() //необязательный параметр аргумента
    @IsString()
    title: string

    @IsOptional()
    @IsString()
    text: string
}
