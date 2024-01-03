import { IGenericEntity } from "../entites/IEntity";

export interface IGenericBaseRepository<T extends IGenericEntity<TPrimaryKey>, TPrimaryKey extends number | string | bigint> extends IBaseRepository {
    CreateAsync(intput: T): T;
    SingleAsync(id: TPrimaryKey): T;
}
export interface IBaseRepository {
}