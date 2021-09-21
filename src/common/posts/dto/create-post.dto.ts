import {IsNotEmpty, IsString} from "class-validator";


export class CreatePostDto {

    @IsNotEmpty() //обязательный параметр аргумента
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    text: string
}
