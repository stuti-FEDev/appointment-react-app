import { BiSearch, BiCaretDown } from "react-icons/bi";
import { useState } from "react";
import DropDown from "./DropDown";

const Search = ({query, searchAppointment, orderBy, onOrderByChange, sortBy, onSortByChange}) => {
    let [toggleSort, setToggleSort] = useState(false);
    return(
        <div className="py-5">
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BiSearch />
            <label htmlFor="query" className="sr-only" />
          </div>
          <input type="text" name="query" id="query" onChange={(e) => {searchAppointment(e.target.value)}} value={query}
            className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search" />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div>
              <button type="button" onClick={() => (setToggleSort(!toggleSort))}
                className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
                Sort By <BiCaretDown className="ml-2" />
              </button>
              <DropDown toggleSort={toggleSort}
              sortBy={sortBy} 
              onOrderByChange={myOrder => onOrderByChange(myOrder)}
              orderBy={orderBy}
              onSortByChange={mySort => onSortByChange(mySort)}
               />
            </div>
          </div>
        </div>
      </div>
    )
}
export default Search;