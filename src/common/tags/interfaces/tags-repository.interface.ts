import {Tags} from "../entities/tags.entity";

export interface ITagsRepository {
    getTag(tagId: number): Promise<Tags>
}