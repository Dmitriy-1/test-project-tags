import {IPost} from "../interfaces/post.interface";
import {Column, Entity} from "typeorm";
import {Model} from "../../../core/database/entities/Model";


@Entity("posts")
export class Post extends Model implements IPost {

    @Column({type: "text"})
    text: string

    @Column()
    title: string

    @Column({type: "int", default: 0})
    views: number

}