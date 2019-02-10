export class DragonModel {
    constructor(public id: number,
                public name: string,
                public type: string,
                public histories?: Array<any>,
                public createdAt?: string ) {}
}
