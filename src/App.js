import './style.css';
import Search from './components/Search/Search';
import Post from './components/Post/Post';
import Comment from './components/Comment/Comment'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="mainContainer">
        <Search />
        <Post />
      </div>
    </div>
  );
}

export default App;
