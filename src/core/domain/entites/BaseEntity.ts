import { IGenericEntity } from "./IEntity";

export class BaseEntity<T> implements IGenericEntity<T>  {
    Id!: T;
}
