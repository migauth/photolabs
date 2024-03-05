import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { topicListData, count, fetchPhotosByTopic } = props;

  // console.log("count", props.count);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicListData={topicListData} fetchPhotosByTopic={fetchPhotosByTopic} />
      <FavBadge count={count} />
    </div>
  );
};

export default TopNavigation;
