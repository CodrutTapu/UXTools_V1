export class tabsModule {
    id:number;
    name:string;
    items:any;
    bgColor:string;

    constructor(id:number,name:string,items:any,bgColor:string) {
        this.id = id;
        this.name = name;
        this.items = items;
        this.bgColor = bgColor;
    }
}
