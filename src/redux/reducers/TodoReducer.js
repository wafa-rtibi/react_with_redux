// importation 
import {
    ADD,
    DELET,
    DONE,
    EDIT,
} from "../actions/ActionType";

// initiale state 
export const initialeState = {
  tasks: [
    { id: Math.random(), text: "learn Redux", done: false, date: "2022-02-14" },
    {
      id: Math.random(),
      text: "learn JavaScript",
      done: false,
      date: "2022-02-15",
    },
    {
      id: Math.random(),
      text: "learn HTML5/CSS3",
      done: false,
      date: "2022-02-16",
    },
    {
      id: Math.random(),
      text: "learn React Js and Native",
      done: false,
      date: "2022-02-17",
    },
  ],
};
// pure function 
export const todoReducer =(state=initialeState,{type,payload})=>{ // action={type,payload}
        switch (type) {
        case ADD:
            return { ...state, tasks:[...state.tasks, payload] };
        case DELET:
            return {
            ...state,
            tasks: state.tasks.filter((el) => el.id != payload),
            };
        case EDIT:
            return {
            ...state,
            tasks: state.tasks.map((el) => el.id == payload.id ? { ...el, text:payload.text , date:payload.date} : el)};
        case DONE:
            return {
            ...state,
            tasks: state.tasks.map((el) =>
                el.id == payload ? { ...el, done: !(el.done )} : el
            ),
            };
        default:
            return state
}
}