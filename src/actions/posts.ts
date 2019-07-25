import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { PostType} from "../reducers/posts";

const UpdatePosts = (posts: PostType[]) => {
    return {
        type: "UPDATE_POSTS",
        payload: posts
    };
};

export const FetchPostsAsync = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        let posts: PostType[] = [];
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (resp.ok) {
            posts = await resp.json();
        }
        dispatch(UpdatePosts(posts));
    };
};

export const RemovePostAsync = (id: number) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
        const state = getState();
        const posts: PostType[]= state.postsStore.posts;
        const filteredPosts = posts.filter(v => v.id != id);
        dispatch(UpdatePosts(filteredPosts));
    };
};