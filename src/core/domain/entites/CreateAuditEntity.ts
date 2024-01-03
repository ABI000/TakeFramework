import { ICreateAuditEntity } from "./ICreateAuditEntity";
import { IEntity } from "./IEntity";
import { BaseEntity } from "./BaseEntity";

export class CreateAuditEntity<TPrimaryKey, TUserId> implements IEntity, BaseEntity<TPrimaryKey>, ICreateAuditEntity<TUserId>{
    Id!: TPrimaryKey;
    Created!: Date;
    CreatedBy!: TUserId;
    InIit(userId: TUserId): void {
        this.CreatedBy = userId;
        this.Created = new Date();
    }
}
