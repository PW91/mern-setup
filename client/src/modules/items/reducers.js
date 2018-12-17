import types from "./types";

const defaultState = {
  items: [],
  loading: false,
  error: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.GET_ITEMS_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case types.GET_ITEMS_FULFILLED: {
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    }

    case types.GET_ITEMS_REJECTED: {
      return {
        ...state,
        loading: false
      };
    }

    case types.POST_ITEM_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case types.POST_ITEM_FULFILLED: {
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false
      };
    }

    case types.POST_ITEM_REJECTED: {
      return {
        ...state,
        loading: false
      };
    }

    case types.DELETE_ITEM_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case types.DELETE_ITEM_FULFILLED: {
      const filteredItems = state.items.filter(item => item._id !== action.id);

      return {
        ...state,
        loading: false,
        items: filteredItems
      };
    }

    case types.DELETE_ITEM_REJECTED: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
}
