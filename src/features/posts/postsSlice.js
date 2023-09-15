import {createSlice} from  '@reduxjs/toolkit';

const initialState = [

    {id:'1', title: 'Learning Redux Toolkit', content: "I've heard good things."},
    {id:'2', title: 'Slices...', content: "The more I say slice,the more I want pizza."}
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {

            postAdded(state,action){
                state.push(action.payload)
            },

            prepare(title,content,userId){
                return{
                    payload:{
                        title,
                        content,
                        userId
                    }
                }
            }
    }
})

export const selectAllPosts = (state) => state.posts;
//This Selects all our posts.
// If shape of state ever changes essentially we'll just
// need to change in the slice not in every components.

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer