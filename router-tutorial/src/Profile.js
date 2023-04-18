import React from "react";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 홍길동",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  console.log({ match });
  const profile = data[username];

  if (profile) {
    return (
      <div>
        {profile.name} / {profile.description}
      </div>
    );
  } else {
    return <div>프로필이 없습니다.</div>;
  }
};

export default Profile;
