const PlayCounts = (props) => {
  const listArr = [];
  let count = 0;
  for (const songName in props.playCounts) {
    count += props.playCounts[songName];
    listArr.push(
      <li key={songName}>
        {songName}: {props.playCounts[songName]}
      </li>
    );
  }
  return (
    <>
      <h2>Play Counts</h2>
      <ul>{listArr}</ul>
      <h3>Total Plays: {count}</h3>
    </>
  );
};

export default PlayCounts;
