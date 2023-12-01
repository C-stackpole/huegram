

interface PostObjects {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  post: PostObjects;
}

const Post = (props: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.post.color }}
    >
      <p className="text-white text-2xl opacity-80">{props.post.color}</p>

      <div className="bg-black text-white flex w-full justify-center rounded-b-3xl p-3">
        <p>{props.post.username}</p>
      </div>
    </div>
  );
};

export default Post;

