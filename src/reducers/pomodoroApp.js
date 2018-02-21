import { fromJS } from "immutable";

const initialState = fromJS({
  pomodoroCount: 0,
  list: {
    id: 1,
    name: "Create pomodoro app",
  },
});

export default function pomodoroApp(state = initialState, action) {
  return state;
  // switch (action.type) {
  //   case SET_VISIBILITY_FILTER:
  //     return Object.assign({}, state, {
  //       visibilityFilter: action.filter,
  //     });
  //   default:
  //     return state;
  // }
}
