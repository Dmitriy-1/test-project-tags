import {Column, Entity} from "typeorm";
import {Model} from "../../../core/database/entities/Model";
import {ITags} from "../interfaces/tags.interface";


@Entity("tags")
export class Tags extends Model implements ITags{

    @Column ({type: "text"})
    description: string //??????????????????????????
    @Column ()
    title: string

}