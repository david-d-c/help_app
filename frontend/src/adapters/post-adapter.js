import { fetchHandler } from "../utils/fetchingUtils";

const baseUrl = '/api';

export const getUserPosts = async (userId) => {
  return fetchHandler(`${baseUrl}/userpost/${userId}`);
};


