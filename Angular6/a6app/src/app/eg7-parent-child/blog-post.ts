export class BlogPost {
    //title : string;
    //summary : string;

    isFav? : boolean;// for ngClass
    //In TS declaring const with public fields create public member variables as well
    constructor(public title: string, public summary: string){

    }
}
