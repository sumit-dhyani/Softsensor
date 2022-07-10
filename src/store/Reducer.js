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
    case 'REMOVE':
        let newa=state.cart.filter((prod)=>prod.id!==action.payload.id)
        console.log(newa)
        return {...state,cart:newa}
    case "INCREASEQTY":
        let newar=state.cart.map(prod=>{
            if(prod.id===action.payload[0].id){
                return {...prod,quantity:parseInt(action.payload[1])}
            }
            else{
                return prod;
            }
        })
        return {...state,cart:newar}
    default:
      return state
  }
}