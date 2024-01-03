import { IBaseService } from "@/core/domain/services/IBaseService";
import { BlogDto } from "./BlogDto";

export interface IBlogService extends IBaseService {
    SingleAsync(id: bigint): BlogDto;
}