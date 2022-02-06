import axios from "axios";
const API_KEY = "23912332-87d188f5be6d9c1e2f8d141dd";

axios.defaults.baseURL = "https://pixabay.com/api";
const fetchImages = ({ searchQuery, currentPage = 1, pageSize = 12 }) => {
  return axios

    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };
