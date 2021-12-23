
export default function appReducer(state, action) {
    const payload = action.payload
   
        return  {...state.exchanges, payload
        }
            


}
