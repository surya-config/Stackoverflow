import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";
import Question from "./Question/Question";

function MainPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const response = axios
      .get(
        "https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow"
      )
      .then((res) => setItems(res.data.items));
  }, []);

  console.log(items);

  return (
    <div className="mainpage">
      <h2>All Questions</h2>
      <p>{items.length} questions</p>
      {items?.map((item) => (
        <div className="mainpage__container">
          <Question
            title={item.title}
            answer_count={item.answer_count}
            displayName={item.owner.display_name}
            profileImage={item.owner.profile_image}
            CreatedDate={item.creation_date}
            link={item.owner.link}
            viewCount={item.view_count}
            pageLink={item.link}
          />
        </div>
      ))}
    </div>
  );
}

export default MainPage;
