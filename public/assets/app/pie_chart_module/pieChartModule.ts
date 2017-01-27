export class pieChartModule {
    id:number;
    pieId:number;
    name:string;
    title:string;
    labels:any;
    data:any;
    bgColor:string;

    constructor(id:number,pieId:number,name:string,title:string,labels:any,data:any,bgColor:string) {
        this.id = id;
        this.pieId = pieId;
        this.name = name;
        this.title = title;
        this.labels = labels;
        this.data = data;
        this.bgColor = bgColor;
    }
}
