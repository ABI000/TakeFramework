import { IGenericBaseRepository } from "@/core/domain/repositories/IBaseRepository";
import { Blog } from "./blog";

export interface IBlogRepository extends IGenericBaseRepository<Blog, bigint> {

}