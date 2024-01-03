import { ICreateAuditEntity } from "./ICreateAuditEntity";
import { IModifiedAuditEntity } from "./IModifiedAuditEntity";
import { ISoftDelete } from "./ISoftDelete";

export interface IFullAuditEntity<TUserId> extends IModifiedAuditEntity<TUserId>, ICreateAuditEntity<TUserId>, ISoftDelete<TUserId> {

}
