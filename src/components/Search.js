import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";

import { filterList } from "../features/cardSlice";

const fuseOptions = {
  keys: ["title", "type", "tasks", "discription"],
  threshold: 0.3,
};

function searchWithFuse(query, aiList) {
  const fuse = new Fuse(aiList, fuseOptions);
  if (!query || query.trim().toLowerCase() === "all") {
    return aiList.map((result) => result.id);
  }

  return fuse.search(query).map((result) => result.item.id);
}

function Search() {
  const dispatch = useDispatch();
  const aiList = useSelector((state) => state.card.aiList);
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    const results = searchWithFuse(query, aiList);
    dispatch(filterList(results));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-input"
        id="query"
        aria-label="Search"
        size={10}
      />
      <button className="search-btn">Search</button>
    </form>
  );
}

export default Search;
