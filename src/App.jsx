import "./App.css";
import Routes from "./routes";
import PostsProvider from "./context";
function App() {
  return (
    <div className="App">
      <PostsProvider>
        <Routes />
      </PostsProvider>
    </div>
  );
}

export default App;
