import { 
  FETCH_POSTS, 
  FETCH_POST, 
  FETCH_NEW_POST, 
  SAVE_POST,
  TOGGLE_POST 
} from '../constants';

const INITIAL_STATE = { 
  posts: [], 
  limit: 20, 
  page: 1, 
  total: 0, 
  post: null, 
  error: null, 
  message: null 
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_POST.REQUEST:
      return { ...state, loading: true };
    
    case FETCH_POSTS.SUCCESS:
      return { 
        ...state, 
        posts: action.payload.posts, 
        limit: action.payload.limit, 
        page: action.payload.page, 
        total: action.payload.total 
      };
    
    case FETCH_POST.SUCCESS:
      return { ...state, post: action.payload.post };
    
    case FETCH_NEW_POST.SUCCESS:
      return { ...state };
    
    case SAVE_POST.SUCCESS:
      return { ...state, message: 'Successfully Saved', loading: false };
    
    case TOGGLE_POST.SUCCESS:
      return { ...state, message: 'Successfully Change Published Status' };
    
    case SAVE_POST.FAILURE:
      return { ...state, error: action.payload, loading: false };
    
    case FETCH_NEW_POST.FAILURE:
    case FETCH_POSTS.FAILURE:
    case FETCH_POST.FAILURE:
    case TOGGLE_POST.FAILURE:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}