import React from "react";
import "./Question.css";

function Question({
  title,
  answer_count,
  displayName,
  profileImage,
  CreatedDate,
  link,
  viewCount,
  pageLink,
  tags,
}) {
  var d = new Date(CreatedDate);

  return (
    <div className="question">
      <div className="question__left">
        <div className="answer__count">
          <p>
            {answer_count}
            <span>answers</span>
          </p>
          <p style={{ margin: "10px 0px" }}>{viewCount} views</p>
        </div>
      </div>
      <div className="question__right">
        <a href={pageLink}>
          <h4>{title}</h4>
        </a>
        <div className="question__tags">
          {tags.map((t) => (
            <div className="tags">
              <p>{t}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="question__rightInfo">
        <p>asked {d.toLocaleString()}</p>
        <div className="question__userInfo">
          <img className="profile__picture" src={profileImage} alt="" />
          <a href={link}>
            <p>{displayName}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Question;
