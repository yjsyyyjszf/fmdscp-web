import { combineReducers } from 'redux';

const statuslistitemReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ITEM':
      if (state.uuid === action.uuid) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

const statuslistReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_OUTSESSIONITEM':
      var found = state.findIndex((element, index, array) => { return (action.item.uuid == element.uuid) });
      if(found != -1) {
        state[found].updatedAt = action.item.updatedAt;
        state[found].status = action.item.status;
        return [ ...state];
      }
      else
        return [ {
          uuid: action.item.uuid,
          StudyInstanceUID: action.item.StudyInstanceUID,
          PatientName: action.item.PatientName,
          PatientID: action.item.PatientID,
          StudyDate: action.item.StudyDate,
          ModalitiesInStudy: action.item.ModalitiesInStudy,
          destination_name: action.item.destination_name,
          status: action.item.status,
          updatedAt: action.item.updatedAt,
          createdAt: action.item.createdAt },
          ...state];
    case 'SET_OUTSESSIONS':
      return action.statuslist;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  statuslist: statuslistReducer
});

export default rootReducer;
