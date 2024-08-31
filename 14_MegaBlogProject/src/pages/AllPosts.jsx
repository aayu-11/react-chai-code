import React from "react";
import { Container } from "../components";
import { PostCard } from "../components";
import appwriteService from "../appwrite/config";

export default function AllPosts() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="py-8 w-full h-full">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full h-full">Loading...</div>
  );
}
