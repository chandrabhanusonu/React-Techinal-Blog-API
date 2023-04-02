import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect ( () => {
    fetchBlogPosts();
  },[]);

  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}
