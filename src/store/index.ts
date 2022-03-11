import { createStore } from "redux";
import { UserReducer } from "../reducers/UserReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(UserReducer, composeWithDevTools());

export type RootState = ReturnType<typeof UserReducer>; // ReturnType<typeof rootReducer> 