// TBA
import { useParams } from "react-router-dom";

function Blog() {
  let { slug } = useParams();

  return (
    <div>
      <h1>Blogs</h1>
      <p>This is the Blog Page</p>
      <p>To be done by: TBA</p>
      <p>Requested blog slug: {slug}</p>
    </div>
  );
}

export default Blog;
