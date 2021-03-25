import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map((blogpost)=>{
        return blogpost.id===action.data.id ? action.data:blogpost;
      });
    case "add_blogpost":
      return [...state, { id: Math.floor(Math.random()*999999),title: action.data.title,content:action.data.content }];
    case "delete_blogpost":
      return state.filter((blogpost)=>blogpost.id!==action.id);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
    return (title,content,callback)=>{
        dispatch({ type: "add_blogpost",data:{title,content} });
        callback();
    }
};

const deleteBlogPost = (dispatch) => {
  return (id)=>{
      dispatch({ type: "delete_blogpost",id });
  }
};

const editBlogPost = (dispatch) => {
  return (id,title,content,callback)=>{
      dispatch({ type: "edit_blogpost",data:{id,title,content} });
      callback();
  }
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost,deleteBlogPost,editBlogPost },
  []
);
