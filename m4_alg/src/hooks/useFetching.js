import { useEffect, useReducer, useRef } from "react";

export const useFetch = (url, options = {}) => {
  const cache = useRef({});

  const initialState = {
    status: 'idle',
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state, action) => {

    const states = {
      'FETCHING': { ...initialState, status: 'fetching' },
      'FETCHED': { ...initialState, status: 'fetched', data: action.payload },
      'FETCH_ERROR': { ...initialState, status: 'error', error: action.payload },
    }

    const result = !!states[action.type] ? states[action.type] : state;
    return result;

  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: 'FETCHED', payload: data });
      } else {
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: 'FETCHED', payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };

  }, [url]);

  return state;
};
