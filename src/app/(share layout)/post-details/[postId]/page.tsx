import { title } from "process";
import Video from "next-video";
import { getPostById } from "../../../../../actions/getPosts";

interface PostDetailsProps {
  params: {
    postId: string;
    title: string;
    category: string;
    videoURL: string;
    content: string;
  };
}

const PostDetails = async ({ params }: PostDetailsProps) => {
  const post = await getPostById(params.postId);

  if (!post) return <div>Opps! Post not found</div>;

  return (
    <div className="container h-screen mx-4">
      <div>
        <Video />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default PostDetails;
