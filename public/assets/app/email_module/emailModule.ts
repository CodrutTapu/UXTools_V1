export class emailModule {
    id:number;
    name:string;
    email:string;
    content:any;
    bgColor:string;

    constructor(id:number,name:string,email:string,content:any,bgColor:string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.content = content;
        this.bgColor = bgColor;
    }
}
