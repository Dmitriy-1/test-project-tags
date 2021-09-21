import {Post} from "../entities/post.entity"
import {CreatePostDto} from "../dto/create-post.dto";
import {promises} from "dns";
import {UpdatePostDto} from "../dto/update-post.dto";


export interface IPostsService {
    getPosts(): Promise<Post[]>
    createPost(dto: CreatePostDto): Promise<Post>
    getPost(postId: number): Promise<Post>
    updatePost(dto: UpdatePostDto, postId: number): Promise<Post>
    deletePost(postId: number): Promise<any>
}