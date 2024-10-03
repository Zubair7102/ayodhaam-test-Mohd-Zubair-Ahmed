function Filter({ setFilter, filter }) {
    return (
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 bg-purple-500 text-white rounded-md mr-5"
      >
        <option value="all">ALL</option>
        <option value="complete">COMPLETED</option>
        <option value="incomplete">INCOMPLETE</option>
      </select>
    );
  }
  
  export default Filter;
  