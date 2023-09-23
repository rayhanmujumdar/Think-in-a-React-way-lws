# useReducer Hook

**Date: 21/9/23**

******************Concept:******************

- useReducer is a React Hook. This hook usage to state management.
- useState() hook বানানো হয়েছে useReducer() এর উপর base করে
- useReducer() hook useState() hook এর একটা বিকল্প।
- useReducer() হচ্ছে React - এ State Change করারা একটা mechanism

## reduce vs useReducer

| reduce | useReducer |
| --- | --- |
| array.reduce(reducer,initialValue) | useReducer(reducer,initialState) |
| singleReturnValue = reducer(accumulator,itemValue) | newState = reducer(currentState,action) |
| returns a single value | returns a tuple - [newState,dispatch] |

## Usage:

****`useReducer(reducer, initialArg, init?)`**

### **Parameters**

- `reducer`: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
- `initialArg`: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next `init` argument.
- **optional** `init`: The initializer function that should return the initial state. If it’s not specified, the initial state is set to `initialArg`. Otherwise, the initial state is set to the result of calling `init(initialArg)`.

### **Returns**

`useReducer` returns an array with exactly two values:

1. The current state. During the first render, it’s set to `init(initialArg)` or `initialArg` (if there’s no `init`).
2. The `[dispatch` function](https://react.dev/reference/react/useReducer#dispatch) that lets you update the state to a different value and trigger a re-render.

### **Caveats**

- `useReducer` is a Hook, so you can only call it **at the top level of your component** or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
- In Strict Mode, React will **call your reducer and initializer twice** in order to [help you find accidental impurities.](https://react.dev/reference/react/useReducer#my-reducer-or-initializer-function-runs-twice) This is development-only behavior and does not affect production. If your reducer and initializer are pure (as they should be), this should not affect your logic. The result from one of the calls is ignored.

## References:
[useReducer – React](https://react.dev/reference/react/useReducer)