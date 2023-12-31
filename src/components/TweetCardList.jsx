import TweetCard from "./TweetCard";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { forwardRef } from "react";

const TweetCardList = ({ users, following, setFollowing }) => {
  return (
    <>
      <UserList>
        {users &&
          users.map((item) => (
            <TweetCard
              key={item.id}
              data={item}
              following={following}
              setFollowing={setFollowing}
            />
          ))}
      </UserList>
    </>
  );
};
TweetCardList.displayName = "TweetCardList";

TweetCardList.propTypes = {
  following: PropTypes.arrayOf(PropTypes.string),
  setFollowing: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isFollowing: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TweetCardList;

const UserList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
