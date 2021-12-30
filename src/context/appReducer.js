export const initialState={
  exchange: {}
}



export default function appReducer(state, action) {
  switch (action.type) {
    case "CREATE_EXCHANGE":
      return { ...state, exchange: action.payload };
  }
}
