import "./styles.css";

export default function Form() {
  return (
    <form>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input type="text" className="form-control" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          WOOF!
        </button>
      </div>
    </form>
  );
}
