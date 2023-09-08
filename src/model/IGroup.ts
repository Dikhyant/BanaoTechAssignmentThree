import { IEntity } from "./IEntity";
import { IUser } from "./IUser";

export interface IGroup extends IEntity {
    users: IUser[];
}