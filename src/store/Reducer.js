const initialstate={cart:[]}
export default function reducer(state=initialstate,action){
  switch(action.type){
    case "ADDITEM":
        return {...state,cart:[...state.cart,action.payload]}
    default:
      return state
  }
}