export default function Spinner(props) {
  return (
    <div className="d-flex justify-content-center" data-test="spinner-test">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
