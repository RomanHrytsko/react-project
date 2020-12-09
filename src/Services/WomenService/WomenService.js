export class WomenService{
    women = [
        { name: "olga",id:3, age: 31, status: false },
        { name: "lena",id:4, age: 30, status: true },
        { name: "ira",id:7, age: 29, status: true },
        { name: "vika",id:8, age: 28, status: false },
        { name: "sveta",id:10, age: 30, status: true },
        { name: "anya",id:1, age: 31, status: false },
        { name: "katia",id:2, age: 28, status: false },
        { name: "luba",id:5, age: 29, status: true },
        { name: "nastia",id:6,age: 31, status: false },
        { name: "oksana",id:9, age: 31, status: true },
    ];

    async getAllWomen(){
        return await this.women.map(value => value)
    }
}