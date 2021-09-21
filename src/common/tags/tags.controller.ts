import {ItagsController} from "./interfaces/tags-controller.interface";
import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Post as PostMethod, Put, Delete, ParseIntPipe, Param} from "@nestjs/common";
import {CreateTagsDto} from "./dto/create-tags.dto";
import {Tags} from "./entities/tags.entity";
import {TagsServise} from "./tags.servise";
import {UpdateTagsDto} from "./dto/update-tags.dto";


@ApiTags('controller_tags')
@Controller('tags')
export class TagsController implements ItagsController{
    constructor(
        private tags_service: TagsServise
    ) {}

    @PostMethod()
    createTags(@Body() dto: CreateTagsDto): Promise<Tags> {
        return this.tags_service.createTags(dto)
    }
    @Delete(":id")
    deleteTag(@Param("id", ParseIntPipe) tagId: number): Promise<any> {
        return this.tags_service.deleteTag(tagId)
    }
    @Get(":id")
    getTag(@Param("id", ParseIntPipe) tagId: number): Promise<Tags> {
        return this.tags_service.getTag(tagId)
    }
    @Get()
    getTags(): Promise<Tags[]> {
        return this.tags_service.getTags()
    }
    @Put(":id")
    updateTag(@Body() dto: UpdateTagsDto, @Param("id", ParseIntPipe) tagId: number): Promise<Tags> {
        return this.tags_service.updateTag(dto, tagId)
    }


}