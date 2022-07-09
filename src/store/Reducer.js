const initialstate={cart:[]}
export default function reducer(state=initialstate,action){
  switch(action.type){
    case "ADDITEM":
        let already=false;
        state.cart.forEach((prod)=>{
            if(prod.id===action.payload.id){
                console.log("already present in array")
                already=true;
            }
        })
        if(already){
            return state
        }
        else{

            return {...state,cart:[...state.cart,action.payload]}
        }
        
    default:
      return state
  }
}