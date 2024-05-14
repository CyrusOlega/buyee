function SearchBar() {
    return(
      <div className="justify-end border-2 my-14 mx-96 grid content-center bg-gray-300">
        <input type="text" placeholder=" Search here                                      " />
        <div className="">    
        <button>
            Search
          </button>
          </div>    
      </div>
    )
  }

  export default SearchBar;