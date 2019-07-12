import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import groceryItemsList from '../data/groceryItems.json';
import { addToBag } from './helper';

const grocery = (state = groceryItemsList, action) => {

  let grocery;
  
	switch (action.type) {
		case ADD_GROCERY:
			//return { ...state, ...payload };
			grocery = state.filter(item => item.id !== action.id);
			return grocery;

		case REMOVE_GROCERY:
			//return { ...state, ...payload };
			grocery = [...state, addToBag(action.id)];
			return grocery;

		default:
			return state;
	}
};

export default grocery;
