import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const postBookmark = async (contentId) => {
  try {
    const res = await axios.post(`${apiUrl}/catalog/bookmarks`, {
      contentId,
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
