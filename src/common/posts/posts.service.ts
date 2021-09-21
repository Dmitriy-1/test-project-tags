import {Delete, Get, Injectable, Put} from "@nestjs/common";
import {PostsRepository} from "./posts.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {CreatePostDto} from "./dto/create-post.dto";
import {IPostsService} from "./interfaces/posts-service.interface";
import {Post} from "./entities/post.entity";
import {Repository} from "typeorm";
import {UpdatePostDto} from "./dto/update-post.dto";

@Injectable()
export class PostsService implements IPostsService {
    constructor(
        @InjectRepository(PostsRepository)
        private postsRepository: PostsRepository
    ) {
    }

    async createPost(dto: CreatePostDto): Promise<Post> {
        const {title, text} = dto
        const post = this.postsRepository.create({title, text})
        return this.postsRepository.save(post)
    }

    getPosts(): Promise<Post[]> {
        return this.postsRepository.find();
    }

    getPost(postId: number): Promise<Post> {
        return this.postsRepository.getPost(postId)
    }


    async updatePost(dto: UpdatePostDto, postId: number): Promise<Post> {
        const post: Post = await this.getPost(postId)
        return this.postsRepository.save({
            id: post.id,
            ...dto
        })

    }

    deletePost(postId: number): Promise<any> {
        return this.postsRepository.delete(postId)
    }
}


