export interface IModifiedAuditEntity<TUserId> {
    /// <summary>
    /// 创建时间
    /// </summary>
    Modified: Date;
    /// <summary>
    /// 创建者
    /// </summary>
    ModifiedBy: TUserId;
    /**
     * 
     * @param userId 
     */
    InIitModified(userId: TUserId): void;
}
