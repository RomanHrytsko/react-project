export class MenService {
    men = [
        { name: "vasya",id:1, age: 31, status: false },
        { name: "taras",id:2, age: 30, status: true },
        { name: "toha",id:3, age: 29, status: true },
        { name: "orest",id:4, age: 28, status: false },
        { name: "max",id:5, age: 30, status: true },
        { name: "anya",id:6, age: 31, status: false },
        { name: "oleg",id:7, age: 28, status: false },
        { name: "andrey",id:8, age: 29, status: true },
        { name: "masha",id:9,age: 31, status: false },
        { name: "max",id:10, age: 31, status: true },
    ];

     getAllMen(){
        return  this.men.map(value => value)
    }
}
