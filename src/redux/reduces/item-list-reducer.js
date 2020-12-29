const initialState={
    itemList:[]
}

const reducer =(state = initialState, action)=>{
    switch (action.type){
        case 'SET_STATE':{
            return{
                ...state,
                itemList:action.payload
            }
        }
        default: return state
    }
}
export default reducer;