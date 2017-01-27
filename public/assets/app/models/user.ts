export class user {

    id:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    documents:Array<any>;

    constructor(id:number,firstName:string,lastName:string,email:string,password:string,documents:Array<any>) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.documents = documents;
    }
}
