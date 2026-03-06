import styles from "@/styles/Filter.module.css";

interface FilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
  types: string[];
}

const Filter = ({ selectedType, onTypeChange, types }: FilterProps) => {
  return (
    <select
      value={selectedType}
      onChange={(e) => onTypeChange(e.target.value)}
      className={styles.select}
    >
      <option value="">All Types</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default Filter;
