import styles from "@/styles/Search.module.css";

interface SearchProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const Search = ({ searchQuery, onSearch }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      className={styles.search}
    />
  );
};

export default Search;