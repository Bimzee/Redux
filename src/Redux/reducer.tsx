export interface stateType {
    value: number
}
export default function counterReducer(state: stateType={value: 0},action: { type: any }) {

    switch(action.type){
        case "INCREASE":
            return{value: state.value +1}
        case "DECREASE":
            return{value: state.value -1}
        default:
            return state
    }
}