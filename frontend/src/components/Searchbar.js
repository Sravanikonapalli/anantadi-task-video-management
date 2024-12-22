const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get(`http://localhost:8080/videos/search?q=${searchTerm}`);
        setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search videos..."
      />
      <button type="submit">Search</button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((video) => (
            <li key={video._id}>{video.title}</li>
        ))}
      </ul>
    )}
  </form>
);
};

export default SearchBar