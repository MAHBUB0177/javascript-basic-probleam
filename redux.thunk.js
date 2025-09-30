npm install redux react-redux @reduxjs/toolkit redux-thunk axios


//create store
// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// redux/reducers/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  getdata: null,
  postdata: null,
  getLoading: false,
  postLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startGetLoading: (state) => {
      state.getLoading = true;
    },
    stopGetLoading: (state) => {
      state.getLoading = false;
    },
    startPostLoading: (state) => {
      state.postLoading = true;
    },
    stopPostLoading: (state) => {
      state.postLoading = false;
    },
    setgetData: (state, action) => {
      state.getdata = action.payload;
    },
    setpostData: (state, action) => {
      state.postdata = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  startGetLoading,
  stopGetLoading,
  startPostLoading,
  stopPostLoading,
  setgetData,
  setpostData,
  setError,
} = userSlice.actions;

export default userSlice.reducer;


// redux/actions/userActions.ts
import axios from 'axios';
import { AppDispatch } from '../store';
import {
  startGetLoading,
  stopGetLoading,
  startPostLoading,
  stopPostLoading,
  setgetData,
  setpostData,
  setError,
} from '../features/userSlice';

export const fetchUserData = () => async (dispatch: AppDispatch) => {
  dispatch(startGetLoading());
  try {
    const response = await axios.get('https://api.example.com/user');
    dispatch(setgetData(response.data));
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(stopGetLoading());
  }
};

export const postUserData = (payload: any) => async (dispatch: AppDispatch) => {
  dispatch(startPostLoading());
  try {
    const response = await axios.post('https://api.example.com/user', payload);
    dispatch(setpostData(response.data)); // optional
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(stopPostLoading());
  }
};


import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, postUserData } from './redux/actions/userActions';
import { RootState } from './redux/store';

const UserComponent = () => {
  const dispatch = useDispatch();
  const { getdata,postdata, getLoading, postLoading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handlePost = () => {
    const payload = { name: 'Mahbub', age: 28 };
    dispatch(postUserData(payload));
  };

  return (
    <div>
      <button onClick={handlePost} disabled={postLoading}>
        {postLoading ? 'Posting...' : 'Post Data'}
      </button>

      {getLoading ? (
        <p>Loading table...</p>
      ) : (
        <table>{/* show data here */}</table>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};
