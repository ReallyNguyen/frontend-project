import './style.css';
import Search from './components/Search/Search';
import Post from './components/Post/Post';
import OwnPost from './components/OwnPost/OwnPost'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="mainContainer">
        <Search />
        <Post />
        <OwnPost />
      </div>
    </div>
  );
}

export default App;
