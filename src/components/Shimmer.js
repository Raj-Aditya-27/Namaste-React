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
      <button></button>
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
