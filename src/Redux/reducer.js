import { ADD,  DLT,  REMOVE } from "./type";


const initialState={
   carts:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        
        case ADD:
            const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex >= 0){
            state.carts[IteamIndex].quantity +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,quantity:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }
            
        
        
        case REMOVE:
            const data = state.carts.filter((el)=>el.id !== action.payload); 
            
            return {
                ...state,
                carts:data
            }

        case DLT:
                const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
       
                if(state.carts[IteamIndex_dec].quantity >= 1){
                    const dltiteams = state.carts[IteamIndex_dec].quantity -= 1
                    console.log([...state.carts,dltiteams]);
    
                    return {
                        ...state,
                        carts:[...state.carts]
                    }
                }else if(state.carts[IteamIndex_dec].quantity === 1 ){
                    const data = state.carts.filter((el)=>el.id !== action.payload);
    
                    return {
                        ...state,
                        carts:data
                    }
                }
            


        default :
            return state;
    
        
    }

}
export default reducer;