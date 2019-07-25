import * as React from "react";
import { connect } from "react-redux";
import { PostType } from "../../reducers/posts";
import { FetchPostsAsync, RemovePostAsync } from "../../actions/posts";

interface propsType {
  posts: PostType[];
  FetchPostsAsync: () => Promise<void>;
  RemovePostAsync: (id: number) => Promise<void>;
}

const Posts = (props: propsType) => {
  
  React.useEffect(() => {
    props.FetchPostsAsync();
  }, []);

  let posts: JSX.Element[] = [];
  if (props.posts && props.posts.length > 0) {
    posts = props.posts.map(p => {
      return <li key={p.id} onClick={() => props.RemovePostAsync(p.id)}>{p.title}</li>;
    });
  }
  

  return (
    <div>
      <ul>
        {posts}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.postsStore.posts
  };
};

const mapDispatchToProps = {
  FetchPostsAsync,
  RemovePostAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
