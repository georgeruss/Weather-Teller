import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoAPIOptions } from "../../api";
import "./search.css";
import { ControlProps } from "chakra-react-select";
//import {options as apiOptions, api_url} from "../../api/api.js";

const Search = ({onSearchChange}) => {
    
    const [search, setSearch] = useState(null);
    
    const loadOptions = (inputValue) => {
        return fetch(
          `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
          geoAPIOptions
        )
        .then((response) => response.json())
        .then((response) => {
            return {
              options: response.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
        });
    };

    const handleOnChange = (searchData) => {
      setSearch(searchData);
      onSearchChange(searchData);
    };

    const customStyles = {
      control: (provided, state) => ({
          ...provided,
          borderRadius: '5px',
            border: '5px solid #ccf',
            boxShadow: state.isFocused ? '0 0 0 5px #3699FF' : null,
      }),
      option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#3699FF' : null,
          color: state.isFocused ? 'white' : null,
      }),
    }    

    return (
      <div className ={"search"}>
          <AsyncPaginate 
              placeholder="Search for your City's Weather..."
              debounceTimeout={1000}
              value={search}
              onChange={handleOnChange}
              loadOptions={loadOptions}
              styles={customStyles}
          />
        </div>
    )
}

export default Search;