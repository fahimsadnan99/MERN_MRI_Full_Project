import { ADD_POP_UP_QUESTION } from './actionTypes';
const initialState = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAns: "",


}
  
  const PopUpQuestion = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POP_UP_QUESTION:
            return  state = {
                ...state,...action.payload
              }
          
      default:
        state = { ...state }
        break
    }
    return state
  }
  
  export default PopUpQuestion