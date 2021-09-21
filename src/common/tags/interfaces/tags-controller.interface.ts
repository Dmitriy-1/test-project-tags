import {ITags} from "./tags.interface";
import {Tags} from "../entities/tags.entity";
import {CreateTagsDto} from "../dto/create-tags.dto";
import {UpdateTagsDto} from "../dto/update-tags.dto";


export interface ItagsController {
    getTags(): Promise<Tags[]>

    createTags(dto: CreateTagsDto): Promise<Tags>

    getTag(tagId: number): Promise<Tags>

    updateTag(dto: UpdateTagsDto, tagId: number): Promise<Tags>

    deleteTag(tagId: number): Promise<any>
}