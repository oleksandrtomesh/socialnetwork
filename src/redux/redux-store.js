import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogs-reducer";
import friendsItemsReducer from "./friendItems-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

//combineReducer wlasne zajmajetsia pojednuwaniam reduseriv i dodaje ich do funkciji createStore,
//jaka w swoje chergu stworuje state
let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsItems: friendsItemsReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;