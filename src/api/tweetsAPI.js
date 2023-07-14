import axios from "axios";

axios.defaults.baseURL = "https://641b60fc9b82ded29d510e63.mockapi.io";

export const getUsers = async (page) => {
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=3`);
    return data;
  } catch (error) {
    return Promise.reject(new Error("There is no tweets"));
  }
};

export const getAll = async () => {
  try {
    const { data } = await axios.get(`/users`);
    return data;
  } catch (error) {
    return Promise.reject(new Error("There is no tweets"));
  }
};

export const updateUserFollowing = async (id, updateData) => {
  try {
    const { data } = await axios.put(`/users/${id}`, {
      followers: updateData.count,
      isFollowing: updateData.userStatus,
    });

    return data;
  } catch (error) {
    return Promise.reject(new Error("There is no tweets"));
  }
};
