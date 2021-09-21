import {InjectRepository} from "@nestjs/typeorm";
import {ItagsService} from "./interfaces/tags-service.interface";
import {TagsRepository} from "./tags-repository";
import {CreateTagsDto} from "./dto/create-tags.dto";
import {Tags} from "./entities/tags.entity";
import {Post} from "../posts/entities/post.entity";
import {UpdateTagsDto} from "./dto/update-tags.dto";


export class TagsServise implements ItagsService{
    constructor(
        @InjectRepository(TagsRepository)
        private tagsRepository: TagsRepository
    ) {
    }

    async createTags(dto: CreateTagsDto): Promise<Tags> {
        const {title, description} = dto
        const tags =this.tagsRepository.create({title,description})
        return this.tagsRepository.save(tags)
    }

    deleteTag(tagId: number): Promise<any> {
        return this.tagsRepository.delete(tagId)
    }

    getTag(tagId: number): Promise<Tags> {
        return this.tagsRepository.getTag(tagId)
    }

    getTags(): Promise<Tags[]> {
        return this.tagsRepository.find()
    }

    async updateTag(dto: UpdateTagsDto, tagId: number): Promise<Tags> {
        const tag: Tags = await this.getTag(tagId)
        return this.tagsRepository.save({
            id: tag.id,
                ...dto
        })
    }




}