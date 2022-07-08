import "./main.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const SearchInput = ({ prop,setData }) => {

  const handleChange = (e) => {
    console.log(e.target);
    let { value } = e.target;
    setData([])
    prop(value);
    
  };

  return (
    <div className="search">
      <div className="searchIcon">
        
        <SearchOutlinedIcon />
      </div>
      <div className="searchInputs">
      <input
        type="text"
        placeholder="Search for a contact"
        onChange={handleChange}
      />
      </div>
      
    </div>
  );
};
