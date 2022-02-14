import { ADD, DELET, EDIT ,DONE, UNDONE, ALL ,FINISH,UNFINISH} from "./ActionType"

    export const addTask =newTask=>{ 
        return {
            type:ADD,
            payload:newTask
        }
    }
    export const deletTask= id =>{ 
        return {
            type:DELET,
            payload : id
        }
    }
    export const editTask=(id,text,date) =>{ 
        return {
            type:EDIT,
            payload:{id,text,date}
        }
    }
    export const done=(id)=>{
        return {
            type: DONE,
            payload: id,
        };
    }
