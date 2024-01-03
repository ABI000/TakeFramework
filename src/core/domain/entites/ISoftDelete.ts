export interface ISoftDelete<TUserId> {

    /**
     * 
     */
    SoftDeleted: Date;
    /**
    * 
    */
    SoftDeleteBy: TUserId;
    /**
     * 
     */
    Deleted: boolean;
    /**
     * 
     * @param userId 
     */
    InIitSoftDelete(userId: TUserId): void;
}
