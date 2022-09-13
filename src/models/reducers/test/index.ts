import createReducer from "../createReducer";

const useTestReducers = () => {
    const test = createReducer(
        {},
        {
            "TEST"(state: any, action: any){
                return {
                    ...state,
                    ...action.payload
                }
            }
        }
    )
    return {
        test
    }
}

export default useTestReducers;