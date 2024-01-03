import { FullAuditEntity } from "@/core/domain/entites/FullAuditEntity";

export class Blog extends FullAuditEntity<bigint, bigint> {

    // constructor(name: string, calories: number, userId: bigint) {
    //     super();
    //     this.InIit(userId);
    //     this.name = name;
    //     this.calories = calories;
    // }
    name!: string;
    calories!: number;
}