export class aboutModule {
    id:number;
    name:string;
    content:any;
    bgColor:string;

    constructor(id:number,name:string,content:any,bgColor:string) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.bgColor = bgColor;
    }
}
