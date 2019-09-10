import React from "react";
// import Story from "./story/story.js";
// import Post from "./post";
import UsersList from "./users/user.controler";



const CAT_1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsS-_KA6xp0nAtm90UQXqdFOadN52hqm4TkgqAYl1h9Y7AVMjxAA";
const CAT_2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AnS6Y29lZjK8-MzTNlVD2L_zu7zoI_OfcOmXuE9bYSKvUJAB";
const CAT_3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUht-26Rd9YwvWlUxt8Mp8K6o_GYN-hzIFRz5QrT3_hGAmgrkg";

const stories = [
  {
    name: "Vlad",
    time: "3",
    image: CAT_1
  },
  {
    name: "Andrew",
    time: "6",
    image: CAT_2
  },
  {
    name: "Vadym",
    time: "9",
    image: CAT_3
  }
];

const App = props => (
  <div>
    {/* {stories.map(story => (
      <Story {...story} />
	))} */}
	
	{/* <Post avatar={CAT_1} text="text posta" author="Vadim"/> */}
  <UsersList />
  </div>
);

export default App;
