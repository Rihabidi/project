import { ADD, DLT, REMOVE } from "./type";

export const add=(item)=>{
    return {
        type: ADD,
        payload:item
};
};
// remove iteams
export const remove=(id)=>{
    return {
        type: REMOVE,
        payload:id
};
};
// remove individual iteam

export const dlt = (iteam) => {
    return {
        type: DLT,
        payload: iteam
    }
}