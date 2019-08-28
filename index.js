import NetInfo from "@react-native-community/netinfo";

export const NETWORK_STATE_CHANGE = "NETWORK_STATE_CHANGE";

export const createNetInfoEnhancer = () => createStore => (...args) => {
  const store = createStore(...args);

  const networkStateChangeListener = data => {
    store.dispatch({ type: NETWORK_STATE_CHANGE, data });
  };

  NetInfo.addEventListener(networkStateChangeListener);

  // Get the initial Network Status
  NetInfo.fetch();
  return store;
};

export const netinfoReducer = {
  networkInfo: (state = {}, action) => {
    switch (action.type) {
      case NETWORK_STATE_CHANGE:
        return { ...state, ...action.data };
      default:
        return state;
    }
  }
};
