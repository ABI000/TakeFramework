export interface ICreateAuditEntity<TUserId> {

    /// <summary>
    /// 创建时间
    /// </summary>
    Created: Date;
    /// <summary>
    /// 创建者
    /// </summary>
    CreatedBy: TUserId;
    /**
     * 
     * @param userId 
     */
    InIit(userId: TUserId): void;
}
