import React, { useState } from "react";
import './style.css';
import Search from './components/Search/Search';
import Post from './components/Post/Post';
import OwnPost from './components/OwnPost/OwnPost'
import Sidebar from './components/Sidebar/Sidebar'
import { UploadImg } from './components/UploadImg/UploadImg'
import CategoryDropdown from "./components/ChooseCategory/ChooseCategory";

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
      category: "Campus", // Add a category property
    },
    {
      id: 2,
      title: "Hidden Gems at BCIT Campus",
      postContent: "Hey fellow BCIT students! Let's uncover the lesser-known treasures around our campus. Share your favorite study spots, hidden cafeterias, or any unique features of BCIT that not everyone might be aware of. Let's make navigating our campus a little more exciting! – from morning coffee rituals to favorite study spots. It's a chance to showcase the diverse experiences within the BCIT community. Can't wait to see your snapshots!",
      number: 32,
      comments: [
        { id: 1, user: "Jordan123", text: "yayyy!" },
        { id: 2, user: "BBBcit", text: "Love it" },
        { id: 3, user: "D3 Dudes", text: "Nice one" },
      ],
      category: "Student Life", // Add a category property
    },
    {
      id: 3,
      title: "BCIT Campus Upgrades – What Would You Like to See?",
      postContent: "Hey BCIT community! Rumor has it that there are potential campus upgrades in the pipeline. What facilities or changes would you love to see on campus? Whether it's more green spaces, tech upgrades, or new study areas, share your wishlist and let's dream up the future of our beloved BCIT campus!",
      number: 28,
      comments: [
        { id: 1, user: "Jordan123", text: "yayyy!" },
        { id: 2, user: "BBBcit", text: "Love it" },
        { id: 3, user: "D3 Dudes", text: "Nice one" },
      ],
      category: "Study Group", // Add a category property
    },
  ],
  editing: null //will be null or "new" or some product's id
}

export default function App() {
  const [fileName, setFileName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFile = (file) => {
    setFileName(file.name);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="mainContainer">
        <Search />
        <UploadImg handleFile={handleFile} />
        {fileName ? <p>Attach Image {fileName}</p> : null}
        <CategoryDropdown categories={["Campus", "Student Life", "Study Group", "Housing", "Events", "Program", "Career", "Alumni"]} handleCategoryChange={handleCategoryChange} />
        {initialState.posts
          .filter((post) => !selectedCategory || post.category === selectedCategory)
          .map((post) => (
            <Post key={post.id} post={post} />
          ))}
        <OwnPost />
      </div>
    </div>
  );
}
