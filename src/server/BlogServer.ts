import { IBlogRepository } from "@/domain/Iblog_repository";
import { BlogDto } from "@/server.contracts/BlogDto";
import { IBlogService } from "@/server.contracts/IBlogServer";
import { BaseService } from "@/core/domain/services/BaseService";
import { inject, injectable } from "tsyringe";
@injectable()
export default class BlogService extends BaseService implements IBlogService {
    constructor(@inject("BlogRepository") private repository: IBlogRepository) {
        super();
    }

    SingleAsync(id: bigint): BlogDto {
        this.repository.SingleAsync(id);
        console.log("BlogService");
        return new BlogDto();
    }

}