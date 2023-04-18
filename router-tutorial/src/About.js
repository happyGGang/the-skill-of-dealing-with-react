import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    // 문자열 맨앞 ? 생략
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <p>sdf</p>
      {showDetail && <div>detail</div>}
    </div>
  );
};

export default About;
