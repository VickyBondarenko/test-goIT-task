import { useState, useEffect, useRef } from "react";
import { getUsers } from "../api/tweetsAPI";
import getTotalPage from "../helpers/getTotalPage";
import Dropdoun from "../components/Dropdoun";
import { GoBackButton } from "../components/GoBackButton";
import LoadMoreButton from "../components/LoadMoreButton";
import TweetCardList from "../components/TweetCardList";

import styled from "styled-components";

export function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [filter, setFilter] = useState("All");
  const [renderData, setRenderData] = useState([...users]);
  const [following, setFollowing] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    getTotalPage(3, setTotalPage);
    const parsedArray = JSON.parse(localStorage.getItem("followings"));
    console.log("parsedArray", parsedArray);
    if (!parsedArray) {
      localStorage.setItem("followings", JSON.stringify([]));
    } else {
      setFollowing(parsedArray);
    }
    console.log("following", following);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(()=>{},[])

  useEffect(() => {
    if (users.length > 0) {
      switch (filter) {
        case "All":
          setRenderData([...users]);
          break;
        case "Follow":
          setRenderData([...users].filter(({ id }) => !following.includes(id)));
          break;
        case "Followings":
          setRenderData([...users].filter(({ id }) => following.includes(id)));
          break;
        default:
          console.log("something wrong!");
          break;
      }
    }
  }, [filter, users, following]);

  useEffect(() => {
    const getUsersData = async (page, data) => {
      const userData = await getUsers(page);
      setUsers([...data, ...userData]);
      setPage(page + 1);
    };
    getUsersData(page, users);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    // window.scrollTo(0, document.documentElement.scrollHeight);
  }, [renderData]);

  const loadMore = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <BtnWrapper>
        <GoBackButton />
        <Dropdoun setFilter={setFilter} />
      </BtnWrapper>
      <CardListContainer>
        <TweetCardList
          id="TweetCardList"
          users={renderData}
          following={following}
          setFollowing={setFollowing}
        />
        {page <= totalPage && <LoadMoreButton onHandleClick={loadMore} />}{" "}
        <Guard ref={ref}></Guard>
      </CardListContainer>
    </>
  );
}
export default TweetsPage;

const BtnWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;
const CardListContainer = styled.div`
  margin: 0;
  padding: 0;
  height: calc(100vh - 160px);
  overflow-y: auto;
`;
const Guard = styled.div``;
