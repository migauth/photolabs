import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  // console.log("count", props.count);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicListData={props.topicListData}/>
      <FavBadge count={props.count} />
    </div>
  )
}

export default TopNavigation;