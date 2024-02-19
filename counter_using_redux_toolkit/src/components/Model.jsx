const Model = ({ children }) => {
  return (
    <div className="card text-center">
      <div className="card-header">Featured</div>
      <div className="card-body">{children}</div>
      <div className="card-footer text-body-secondary">2 days ago</div>
    </div>
  );
};
export default Model;
