const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <img></img>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="all-btn">
      <input className="input-btn"></input>
      <button className="search-btn"></button>
      <button className="filtering-btn"></button>
      </div>
      <div className="shimmerCards">
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
      </div>
    </div>
  );
};

export default Shimmer;
