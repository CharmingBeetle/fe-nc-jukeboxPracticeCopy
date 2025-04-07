const PlayCounts = ({playCounts}) => {
  
  function songSort(a, b) {
     const regex = /[0-9]+/g
    const aNum = a.match(regex)[0]
    const bNum = b.match(regex)[0]
    return bNum - aNum
  }

  const listArr = [];
  let count = 0;
  for (const songName in playCounts) {
    count += playCounts[songName];
    listArr.push(`${songName}: ${playCounts[songName]}`);
  }
 

  const sortedSongs = listArr.sort(songSort)
  console.log(sortedSongs)
  return (
    <>
      <h2>Play Counts</h2>
      <ul>{listArr.map((song)=>{
        return <li>{song}</li>
      })}</ul>
      <h3>Total Plays: {count}</h3>
    </>
  );


};


export default PlayCounts;
