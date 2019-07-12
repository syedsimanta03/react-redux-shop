import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import { addToBag } from './helper';

const shoppingBag = (state = [], action) => {

  let shoppingBag;
  
	switch (action.type) {
		case ADD_GROCERY:
			//return { ...state, ...payload };
			shoppingBag = [...state, addToBag(action.id)];
			return shoppingBag;

		case REMOVE_GROCERY:
			//return { ...state, ...payload };
			shoppingBag = state.filter(item => item.id !== action.id);
			return shoppingBag;

		default:
			return state;
	}
};

export default shoppingBag;
