export class Product {
    id: number;
    name:string;
    description:string;
    price:number;
    imgUrl:string;

    constructor(id=0,name='',description='https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
    price=0,imgUrl=''){
        this.id=id;
        this.name=name;
        this.description=description
        this.price=price
        this.imgUrl=imgUrl

    }
}
