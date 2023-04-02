import { createContext, useState } from "react";
import { BaseUrl } from "../BaseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading,setLoading] = useState(false);
    const [posts,SetPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages]= useState(null);

    

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${BaseUrl}?page=${page}`;
        console.log("printing the final URL");
        console.log(url);
        try{
            const result = await fetch(url);
            console.log(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            SetPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch{
            console.log("Error in featching data");
            setPage(1);
            SetPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        SetPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

// STEP 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}