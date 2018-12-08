import {CAR_ACTION, CarsAction} from './cars.action';

const initialState = {
  cars: []
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DEL_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    case CAR_ACTION.UPDATE_CAR:
      const indx = state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[indx].isSold = true;
      return {
        ...state,
        cars: [...state.cars]
      };
    case CAR_ACTION.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      };
    default:
      return state;
  }
}
