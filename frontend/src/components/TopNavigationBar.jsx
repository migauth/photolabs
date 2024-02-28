import React from 'react';
import TopicList from './TopicList';
import sampleDataForTopicList from "data/sampleData"
import PhotoFavButton from './PhotoFavButton';
import '../styles/TopNavigationBar.scss'
import FavIcon from './FavIcon';
import FavBadge from './FavBadge';



const TopNavigationBar = (props) => {
  console.log("props.topicListData:", props.topicListData);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicListData={props.topicListData}/>
      <FavBadge />
    </div>
  )
}

export default TopNavigationBar;