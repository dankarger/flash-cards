const Data = [
    {
        id: 1,
        question:"What is your favourite color?",
        answer:'Blue',
        isRead:false,
    },
    {
        id: 2,
        question:"What time is it?",
        answer:'12:00',
        isRead:false,
    },
    {
        id: 3,
        question:"Is Green a Color?",
        answer:'Yes',
        isRead:false,
    },
    {
        id: 4,
        question:"2+2?",
        answer:'4',
        isRead:false,
    },
]
export default Data


export const getData = async ()=>{

    const localCards =  localStorage.getItem('flash_Cards') ;
    if(localCards){
    return JSON.parse(localCards)
    }
    return Data
}
export class CardClass {
    constructor(question,answer) {
        this.id = Date.now() * (Math.random()*1000)
        this.question = question
        this.answer=answer
        this.isSeen=false
    }
}
