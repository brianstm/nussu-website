import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import CampusLife from "./pages/CampusLife";
import Freshman from "./pages/Freshman";
import Resources from "./pages/Resources";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/404";
import Supernova from "./pages/Supernova";
import StudentLifeFair from "./pages/StudentLifeFair";
import ExamWelfarePack from "./pages/ExamWelfarePack";
import UnionCamp from "./pages/UnionCamp";
import RagFlag from "./pages/RagFlag";
import FreshmanWelfareGift from "./pages/FreshmanWelfareGift";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/about" element={<About />} />
        <Route path="/freshman" element={<Freshman />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/work/:workId" element={<Work />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/supernova" element={<Supernova />} />
        <Route path="/student-life-fair" element={<StudentLifeFair />} />
        <Route path="/exam-welfare-pack" element={<ExamWelfarePack />} />
        <Route
          path="/freshman-welfare-gift"
          element={<FreshmanWelfareGift />}
        />
        <Route path="/union-camp" element={<UnionCamp />} />
        <Route path="/rag-flag" element={<RagFlag />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
