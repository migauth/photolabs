import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topics = props.topicListData.map((topic) => (
    <TopicListItem 
      label={topic.title}
      key={topic.id}
      />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topics}
    </div>
  );
};

export default TopicList;
