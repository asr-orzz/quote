import { createContext } from "react";

const AppContext=createContext({
    showArticle: false,
    data : [],
    isLoading: false,
    handleSubmitData: ()=>{},
    closeAddArticle: ()=>{},
    handleShowArticle: ()=>{}
});

export default AppContext;