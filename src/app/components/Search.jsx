const Search = ({ onSearch }) => {
  return (
    <form>
      <input
        className="border border-[#153243] focus:outline-none focus:ring-2 focus:ring-[#153243] rounded-full py-2 px-4 w-full font-text"
        type="search"
        name="query"
        placeholder="Søg i alle produkter"
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
<input type="text" placeholder="Søg i alle produkter" />;
