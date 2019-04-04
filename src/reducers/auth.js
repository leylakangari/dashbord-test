
export default function (state={},action){
    switch(action.type){
    
        case 'POST_SIGNIN':
            return {...state,message:action.payload}
        default:
            return state;
    }
}