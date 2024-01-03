import { CreateAuditEntity } from "./CreateAuditEntity";
import { IEntity } from "./IEntity";
import { IModifiedAuditEntity } from "./IModifiedAuditEntity";

export class ModifiedAuditEntity<TPrimaryKey, TUserId> extends CreateAuditEntity<TPrimaryKey, TUserId> implements IEntity, IModifiedAuditEntity<TUserId> {
    /**
     * 
     */
    Modified!: Date;
    /**
    * 
    */
    ModifiedBy!: TUserId;
    /**
     * 
     */
    Id!: TPrimaryKey;
    InIitModified(userId: TUserId): void {
        this.ModifiedBy = userId;
        this.Modified = new Date();
    }
}
