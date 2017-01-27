export class tagModule {
    id:number;
    name:string;
    tags:any;
    bgColor:string;

    constructor(id:number,name:string,tags:any,bgColor:string) {
        this.id = id;
        this.name = name;
        this.tags = tags;
        this.bgColor = bgColor;
    }
}
