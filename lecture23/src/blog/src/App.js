import { Route, Routes } from "react-router-dom";
import ArticleCard from "./components/ArticleCard";
import Navbar from "./components/Navbar";
import ArticleLayout from "./pages/ArticleLayout";
import ArticlePage from "./pages/ArticlePage";
import CommentsPage from "./pages/CommentsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route element={<ArticleLayout/>}>
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/articles/:id/comments" element={<CommentsPage />}/>
        </Route>

        <Route path="/test" element={<ArticleCard article={{id: 1, title: "sample article title "}}/>} />
        <Route path="*" element={<div>Not Found</div>}/>
      </Routes>
    </>
  );
}

export default App;
