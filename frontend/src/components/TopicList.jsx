import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topicListData, fetchPhotosByTopic } = props;
  console.log('topiclistdata',topicListData);

  const topics = topicListData.map((topic) => (
    <TopicListItem 
      label={topic.title}
      fetchPhotosByTopic={fetchPhotosByTopic}
      id={topic.id}
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
