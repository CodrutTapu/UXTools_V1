export class scaleChartModule {
    id:number;
    name:string;
    title:string;
    scales:any;
    bgColor:string;

    constructor(id:number,name:string,title:string,scales:any,bgColor:string) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.scales = scales;
        this.bgColor = bgColor;
    }
}
