import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  return (
    <div>
      Search
      <div>searching for {query}</div>
    </div>
  );
};

export default Search;
