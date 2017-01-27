export class accordionModule {
    id:number;
    name:string;
    title:string;
    items:any;
    bgColor:string;

    constructor(id:number,name:string,title:string,items:any,bgColor:string) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.items = items;
        this.bgColor = bgColor;
    }
}
