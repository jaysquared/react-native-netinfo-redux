# react-native-netinfo-redux
Listen to network state changes and dispatch redux actions

## Installation

```
npm install --save react-native-netinfo-redux
```

## Usage

Add the enhancer when creating the store

```javascript
import { createNetInfoEnhancer } from "react-native-netinfo-redux";

const store = createStore(reducer, initialState, compose(
  createNetInfoEnhancer(),
  ...
));
```

Add the _networkReducer_

```javascript
import { netinfoReducer } from "react-native-netinfo-redux";

export default combineReducers(
  Object.assign({}, ..., netinfoReducer)
);
```

## Usage with Redux Saga

Import the action name and listen to its dispatch
```javascript
import { NETWORK_STATE_CHANGE } from "react-native-netinfo-redux";

function* onNetworkStateChange(data){
  // Do stuff here
}

function* watchNetworkState(){
  yield takeEvery(NETWORK_STATE_CHANGE, onNetworkStateChange);
}

export default function* rootSaga() {
  yield all([
    ...
    watchNetworkState()
  ]);
}
```

## Credits
[https://github.com/bamlab/redux-enhancer-react-native-appstate](https://github.com/bamlab/redux-enhancer-react-native-appstate)
