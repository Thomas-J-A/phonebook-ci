const Filter = ({ query, handleChangeQuery }) => (
  <div>
    Name:{" "}
    <input type="search" value={query} onChange={handleChangeQuery}></input>
  </div>
);

export default Filter;
