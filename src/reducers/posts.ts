export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsStateType {
  posts: PostType[];
}

export interface PostsActionType {
  type: string;
  payload: PostType[];
}

const initialPostsState: PostsStateType = {
  posts: []
};

export const postsStore = (state = initialPostsState, action: PostsActionType) => {
  switch (action.type) {
    case "UPDATE_POSTS":
      return {
        posts: action.payload
      };
    default:
      return state;
  }
};
