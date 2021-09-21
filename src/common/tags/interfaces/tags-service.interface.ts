import {Tags} from "../entities/tags.entity";
import {CreateTagsDto} from "../dto/create-tags.dto";
import {UpdateTagsDto} from "../dto/update-tags.dto";


export interface ItagsService {
    getTags(): Promise<Tags[]>

    createTags(dto: CreateTagsDto): Promise<Tags>

    getTag(tagId: number): Promise<Tags>

    updateTag(dto: UpdateTagsDto, tagId): Promise<Tags>

    deleteTag(tagId: number): Promise<any>

}