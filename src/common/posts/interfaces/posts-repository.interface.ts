import {IPost} from "./post.interface";
import {Post} from "../entities/post.entity";

export interface IPostsRepository {
    getPost(postId: number): Promise<Post>
}