import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id, type, limit } = router.query; //pid -> page id

  //http://localhost:3000/posts/1?type=foods&&limit=5
  //ห้าม ตั้งชื่อ queryString เหมือนกับ params

  return (
    <p>
      Post: {id}, {type}, {limit}
    </p>
  );
};

export default Post;
