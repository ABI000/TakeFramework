import { IGenericEntity } from "../entites/IEntity";
import { IGenericBaseRepository } from "./IBaseRepository";

export abstract class BaseRepository<T extends IGenericEntity<TPrimaryKey>, TPrimaryKey extends number | string | bigint> implements IGenericBaseRepository<T, TPrimaryKey> {

    abstract CreateAsync(intput: T): T;
    abstract SingleAsync(id: TPrimaryKey): T;

}
