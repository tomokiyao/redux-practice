import _ from 'lodash';
import {
  READ_EVENTS,
  DELETE_EVENT,
  GET_EVENT,
  UPDATE_EVENT,
  CREATE_EVENT,
} from '../actions';

const events = (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
    case UPDATE_EVENT:
    case CREATE_EVENT:
      return _.mapKeys(action.response.data, 'id');
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    case GET_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    default:
      return events;
  }
};

export default events;
