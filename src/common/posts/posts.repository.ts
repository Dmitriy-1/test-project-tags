import {EntityRepository, Repository} from "typeorm";

import {Post} from "./entities/post.entity";
import {IPostsRepository} from "./interfaces/posts-repository.interface";
import {HttpException, HttpStatus} from "@nestjs/common";


@EntityRepository(Post)
export class PostsRepository extends Repository<Post> implements IPostsRepository {
   async getPost(postId: number): Promise<Post> { // метод получения поста по id
        const post =await this.findOne({
            where: {id: postId}
        })
       if(!post)
           throw new HttpException(`пост с идентификатором ${postId} не найден`, HttpStatus.NOT_FOUND)
       return post
    }

}
