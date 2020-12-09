export class MenService {
    menArr = [
        {name: 'Oleg', id: 1, age: 23},
        {name: 'Andriy', id: 2, age: 44},
        {name: 'Ivan', id: 3, age: 23},
        {name: 'Igor', id: 4, age: 21}
        ]
    async getAllMen(){
        return await this.menArr.map(value => value)
    }
}
