export class devicesPlatformsModule {
    id:number;
    moduleId:number;
    name:string;
    options:any;
    bgColor:string;

    constructor(id:number,moduleId:number,name:string,options:any,bgColor:string) {
        this.id = id;
        this.moduleId = moduleId;
        this.name = name;
        this.options = options;
        this.bgColor = bgColor;
    }
}
