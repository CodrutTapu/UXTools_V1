export class gridElem {

    id:number;
    dim:number;
    modules:Array<any>;
    csColor:any;

    constructor(dim:number,id:number,modules:any,csColor:any) {
        this.dim = dim;
        this.id = id;
        this.modules = modules;
        this.csColor = csColor;
    }
}
