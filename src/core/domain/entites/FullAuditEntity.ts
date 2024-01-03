import { IFullAuditEntity } from "./IFullAuditEntity";
import { ISoftDelete } from "./ISoftDelete";
import { ModifiedAuditEntity } from "./ModifiedAuditEntity";

export class FullAuditEntity<TPrimaryKey, TUserId> extends ModifiedAuditEntity<TPrimaryKey, TUserId> implements IFullAuditEntity<TUserId>, ISoftDelete<TUserId>{
    /**
 * 
 */
    SoftDeleted!: Date;
    /**
 * 
 */
    SoftDeleteBy!: TUserId;
    /**
 * 
 */
    Deleted!: boolean;
    /**
 * 
 */
    InIitSoftDelete(userId: TUserId): void {
        this.SoftDeleteBy = userId;
        this.SoftDeleted = new Date();
    }
}
