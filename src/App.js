import React, { useState, useEffect } from "react";
import './style.css';
import Search from './components/Search/Search';
import Post from './components/Post/Post';
import OwnPost from './components/OwnPost/OwnPost'
import Sidebar from './components/Sidebar/Sidebar'
import CreatingPost from "./components/CreatingPost/CreatingPost";
import { UploadImg } from './components/UploadImg/UploadImg'
import CategoryDropdown from "./components/ChooseCategory/ChooseCategory";
import { filter } from "./utils/helpers";
import Filter from "./components/Filter/Filter";

const initialState = {
  posts: [
    {
      id: 1,
      title: "BCIT Chronicles: A Day in the Life",
      postContent: "Calling all BCIT students! Let's give prospective and current students a glimpse into our daily lives on campus. Share a photo or a description of your typical day – from morning coffee rituals to favorite study spots. It's a chance to showcase the diverse experiences within the BCIT community. Can't wait to see your snapshots!",
      number: 12,
      comments: [
        { id: 1, user: "Jordan123", text: "yayyy!" },
        { id: 2, user: "BBBcit", text: "Love it" },
        { id: 3, user: "D3 Dudes", text: "Nice one" },
      ],
      postCategory: "Campus",
      own: false, // post that created by user
      like: true, // post that liked by user
      days: 3
    },
    {
      id: 2,
      title: "Hidden Gems at BCIT Campus",
      postContent: "Hey fellow BCIT students! Let's uncover the lesser-known treasures around our campus. Share your favorite study spots, hidden cafeterias, or any unique features of BCIT that not everyone might be aware of. Let's make navigating our campus a little more exciting! – from morning coffee rituals to favorite study spots. It's a chance to showcase the diverse experiences within the BCIT community. Can't wait to see your snapshots!",
      number: 32,
      comments: [
      ],

      postCategory: "Student Life",
      own: true, // post that created by user
      like: false, // post that liked by user
      days: 5
    },
    {
      id: 3,
      title: "BCIT Campus Upgrades – What Would You Like to See?",
      postContent: "Hey BCIT community! Rumor has it that there are potential campus upgrades in the pipeline. What facilities or changes would you love to see on campus? Whether it's more green spaces, tech upgrades, or new study areas, share your wishlist and let's dream up the future of our beloved BCIT campus!",
      number: 28,
      comments: [
      ],

      postCategory: "Study Group",
      own: false, // post that created by user
      like: true, // post that liked by user
      days: 4,
    },
  ],
  postCategory: null
}

export default function App() {
  const [posts, setPosts] = useState(initialState.posts);
  const [fileName, setFileName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ownFilterSelection, setOwnFilterSelection] = useState(false);
  const [likeFilterSelection, setLikeFilterSelection] = useState(false);
  const [sortBy, setSortBy] = useState("Trending");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const getSortedPosts = () => {
    let sortedPosts = [...filteredState];

    if (sortBy === "New") {
      sortedPosts.sort((a, b) => a.days - b.days); // Newest to Oldest
    } else if (sortBy === "Old") {
      sortedPosts.sort((a, b) => b.days - a.days); // Oldest to Newest
    } else if (sortBy === "Trending") {
      sortedPosts.sort((a, b) => b.number - a.number); // Trendest
    }

    return sortedPosts;
  };

  const handleFile = (file) => {
    setFileName(file.name);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  let filteredState = posts;
  filteredState = filter(filteredState, ownFilterSelection, likeFilterSelection);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const handlePost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  useEffect(() => {
    console.log('Updated Posts:', posts);
  }, [posts]);

  return (
    <div className="App">
      <Sidebar onCategorySelect={handleCategorySelect} />
      <div className="mainContainer">
        <Search filterOwn={setOwnFilterSelection} filterLike={setLikeFilterSelection} />
        {/*} <CreatingPost onPost={handlePost} />*/}
        <UploadImg handleFile={handleFile} />
        {fileName ? <p>Attach Image {fileName}</p> : null}
        <div className="postList">
          <Filter onSortChange={handleSortChange} />;
          {getSortedPosts()
            .filter((post) => !selectedCategory || post.postCategory === selectedCategory)
            .map((post) => (
              post.own === true ? <OwnPost key={post.id} post={post} /> : <Post key={post.id} post={post} />
            ))}
          {/* <OwnPost /> */}
        </div>
      </div>
    </div>
  );
}
