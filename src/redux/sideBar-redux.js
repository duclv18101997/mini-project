import { createReducer, createActions } from "reduxsauce"

// TODO:Declare Action and type
const {Types, Creators} = createActions({
  getClickSideBar: [],
})

export const PostTypes = Types
export default Creators

//TODO: Declare initial state
export const INITIAL_STATE = {
  collapsed: false,
}

// TODO: Declare Reducers
export const clickSideBar = (state) => ({
  ...state,
  collapsed: !state.collapsed,
})

//TODO:Hookup Reducers To Types in Action
export const reducer = createReducer(INITIAL_STATE, {
  [PostTypes.GET_CLICK_SIDE_BAR]: clickSideBar,
})