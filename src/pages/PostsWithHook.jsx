import useFetch from "../hooks/useFetch";

function PostsWithHook() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return (
      <>
        <p>Please waite..</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <h4>Posts coming using custom fetch hook</h4>

      <div>
        {posts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </>
  );
}

export default PostsWithHook;
