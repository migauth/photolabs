import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { label, fetchPhotosByTopic, id } = props;
  console.log('topiclistid',id);
  return (
    <div className="topic-list__item">
      <span onClick={() => {fetchPhotosByTopic(id)}}>{label}</span>
    </div>
  );
};

export default TopicListItem;
