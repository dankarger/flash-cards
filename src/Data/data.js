const Data = [
    {
        id: 1,
        question:"her",
        answer:'dasd',
        isRead:false,
    },
    {
        id: 2,
        question:"hee2e2e2e",
        answer:'dasde2e2e2ee',
        isRead:false,
    },
    {
        id: 3,
        question:"thhee ht hthh  2e",
        answer:'da sd  e2  e    2e2ee',
        isRead:false,
    },
    {
        id: 4,
        question:"1111",
        answer:'cce',
        isRead:false,
    },
]
export default Data


export const getData=async ()=>{
    return  Data
}
export class CardClass {
    constructor(question,answer) {
        this.id = Date.now() * (Math.random()*1000)
        this.question = question
        this.answer=answer
        this.isSeen=false
    }
}
