import { Module } from '@nestjs/common'
import {PostsModule} from "./common/posts/posts.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {ApplicationConfig} from "./core/config";
import {DatabaseConfig} from "./core/config/database.config";
import {TagsModule} from "./common/tags/tags.module";


@Module({
    imports: [
        PostsModule,
        TagsModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [ApplicationConfig]
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseConfig,

        }),
    ]
})
export class AppModule {}
