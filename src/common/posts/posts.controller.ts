import {Controller, Get, Post as PostMethod, Body, Put, Delete, ParseIntPipe, Param} from "@nestjs/common";
import {IPostsController} from "./interfaces/posts-controller.interface";
import {Post} from "./entities/post.entity";
import {ApiTags} from "@nestjs/swagger"
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {UpdatePostDto} from "./dto/update-post.dto";


@ApiTags('controller_posts')
@Controller('posts')
export class PostsController implements IPostsController {
constructor(
    private postService: PostsService
) {}

    @Get()
    getPosts(): Promise<Post[]> {
        return this.postService.getPosts()
    }
    @PostMethod()
    createPost(@Body() dto: CreatePostDto): Promise<Post> {
      return this.postService.createPost(dto)
    }
    @Get(":id")
    getPost(@Param("id", ParseIntPipe) postId: number): Promise<Post> { //валидация id по числам
    return  this.postService.getPost(postId)
    }
    @Put(":id")
    updatePost(@Body() dto: UpdatePostDto, @Param("id",ParseIntPipe) postId: number): Promise<Post> {
    return this.postService.updatePost(dto, postId)
    }
    @Delete(":id")
    deletePost(@Param("id", ParseIntPipe) postId: number): Promise<any> {
    return this.postService.deletePost(postId)
    }

}