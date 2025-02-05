// Arnav
import { useParams } from "react-router-dom";

function Work() {
  let { workId } = useParams();

  return (
    <div>
      <h1>Work</h1>
      <p>This is the Work Page</p>
      <p>To be done by: Arnav</p>
      <p>Requested work ID: {workId}</p>
    </div>
  );
}

export default Work;
