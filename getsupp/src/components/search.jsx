import "./main.css";
// import { SearchOutlinedIcon } from "@mui/icons-material";
// import {SearchOutlinedIcon} from '@mui/icons-material/SearchOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const SearchInput = ({ prop }) => {
  // const [search,setSearch]=useState()

  const handleChange = (e) => {
    console.log(e.target);
    let { value } = e.target;
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
        // className="search_input"
        onChange={handleChange}
      />
      </div>
      
    </div>
  );
};
