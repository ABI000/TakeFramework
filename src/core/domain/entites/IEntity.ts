
export interface IEntity {

}


export interface IGenericEntity<T> extends IEntity {
    Id: T;
}
