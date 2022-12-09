import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { searchText, onInputChange, formState } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 0) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">
            No hero with <b>ABC</b>
          </div>
        </div>
      </div>
    </>
  );
};
