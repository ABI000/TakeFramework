import { injectable } from "tsyringe";
import { PrismaRepository } from "./PrismaRepository";
import { Blog } from "@/domain/blog";
import { IBlogRepository } from "@/domain/Iblog_repository";

@injectable()
export default class BlogRepository extends PrismaRepository<Blog, bigint> implements IBlogRepository {
    override  SingleAsync(id: bigint): Blog {
        console.log("BlogRepository");
        return super.SingleAsync(id);
    }
}