import {Module} from "@nestjs/common";
import {TagsController} from "./tags.controller";
import {TagsServise} from "./tags.servise";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TagsRepository} from "./tags-repository";


@Module({
    controllers: [TagsController],
    providers: [TagsServise],
    imports: [TypeOrmModule.forFeature([TagsRepository])]
})
export class TagsModule {}