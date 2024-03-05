import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topicListData, fetchPhotosByTopic } = props;

  const topics = topicListData.map((topic) => (
    <TopicListItem
      label={topic.title}
      fetchPhotosByTopic={fetchPhotosByTopic}
      id={topic.id}
      key={topic.id}
    />
  ));

  return <div className="top-nav-bar__topic-list">{topics}</div>;
};

export default TopicList;
