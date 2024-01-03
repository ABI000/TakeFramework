import { BaseRepository } from "@/core/domain/repositories/BaseRepository";
import { IGenericBaseRepository } from "@/core/domain/repositories/IBaseRepository";
import { IGenericEntity } from "@/core/domain/entites/IEntity";
import { Blog } from "@/domain/blog";
import { injectable } from "tsyringe";



@injectable()
export class PrismaRepository<T extends IGenericEntity<TPrimaryKey>, TPrimaryKey extends string | number | bigint> extends BaseRepository<T, TPrimaryKey> implements IGenericBaseRepository<T, TPrimaryKey> {

    override  CreateAsync(intput: T): T {
        return intput;
    }
    override SingleAsync(id: TPrimaryKey): T {
        console.log(String(id) + "PrismaRepository");
        return <T><unknown>this.create(Blog);
    }
    create<T>(c: { new(): T; }): T {
        return new c();
    }
}