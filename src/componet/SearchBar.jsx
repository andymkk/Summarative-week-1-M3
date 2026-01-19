function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search Projects"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
