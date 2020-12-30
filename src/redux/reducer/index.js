const initialState = []

export const reducer = (state = initialState, action)=>{
    switch (action.type){
        case "ADD": {
            state.push(action.payload)
            console.log(action.payload)
            return[...state]
        }
        case 'REMOVE_SELECTED_USER':{

            state.filter(value => {
                if(value.id === action.payload){

                }

            })
        }
        default: return state
    }

}
