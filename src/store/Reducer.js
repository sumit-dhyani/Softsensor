const initialstate={cart:[],data:[]}
export default function reducer(state=initialstate,action){
  switch(action.type){
    case "ADDITEM":
        let already=false;
        console.log(action.payload)
        let new_arr=[]
        new_arr=state.cart.map((prod)=>{
            if(prod.id===action.payload.id){
                
                already=true;
                return {...prod,quantity:prod.quantity?prod.quantity+1:2}
            }
            else{
                return prod
            }
        })
        console.log(new_arr)
        if(already){
            return {...state,cart:new_arr}
        }
        else{

            return {...state,cart:[...state.cart,action.payload]}
        }
    case 'SETDATA':
        return {...state,data:action.payload}
    default:
      return state
  }
}