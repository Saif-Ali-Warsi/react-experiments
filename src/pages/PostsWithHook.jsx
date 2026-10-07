import useFetch from "../hooks/useFetch";

function PostsWithHook() {

  const API_URL = import.meta.env.VITE_API_URL;

  const {
    data: posts,
    loading,
    error,
  } = useFetch(`${API_URL}/posts`);

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
