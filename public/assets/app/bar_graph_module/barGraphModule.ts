export class barGraphModule {
    id:number;
    name:string;
    title:string;
    bars:Array<any>;
    bgColor:string;

    constructor(id:number,name:string,title:string,bars:any,bgColor:string) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.bars = bars;
        this.bgColor = bgColor;
    }
}
