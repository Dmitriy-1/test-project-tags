import {EntityRepository, Repository} from "typeorm";
import {Tags} from "./entities/tags.entity";
import {ITagsRepository} from "./interfaces/tags-repository.interface";
import {HttpException, HttpStatus} from "@nestjs/common";


@EntityRepository(Tags)
export class TagsRepository extends Repository<Tags> implements ITagsRepository {
    async getTag(tagId: number): Promise<Tags> {
        const tags = await this.findOne({
            where: {id: tagId}
        })
        if (!tags)
            throw new HttpException(`тег с идентификатором ${tagId} не найден`, HttpStatus.NOT_FOUND)
        return tags
    }

}