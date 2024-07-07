
import Article from "./components/Articles/Article";
import Header from "./components/Header/Header";
import AddArticle from "./components/AddArticle/AddArticle";
import AppContextProvider from "./store/AppContextProvider";

function App() {
  
  return (
    <AppContextProvider>
      <Header/>
      <Article/>
      <AddArticle/>
    </AppContextProvider>
  );
}

export default App;
