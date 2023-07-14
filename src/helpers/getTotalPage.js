import { getAll } from "../api/tweetsAPI";

const getTotalPage = async (limit, func) => {
  try {
    const userArray = await getAll();
    func(Math.ceil(userArray.length / limit));
  } catch (err) {
    console.log(err);
  }
};
export default getTotalPage;
