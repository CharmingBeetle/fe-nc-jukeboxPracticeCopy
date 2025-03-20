const Songs = (props) => {
  const currentSong = props.songs[props.currentlyPlaying];
  return (
    <>
      <ol className="songlist">
        {props.songs.map((song) => {
          return (
            <li key={song.id} className="song-item">
              <button
                onClick={() => {
                  props.setCounts((currCounts) => {
                    const newCounts = { ...currCounts };
                    newCounts[currentSong.title] += 1;
                    return newCounts;
                  });
                  props.setSong(() => {
                    return song.id - 1;
                  });
                  props.setCash((currCash) => {
                    if (currCash <= 0) {
                      <p>Not enough money in Balance!</p>;
                      return currCash;
                    } else {
                      return currCash - 1;
                    }
                  });
                }}
              >
                <h2>{song.title}</h2>
                <p>{song.artist}</p>
                <img src={song.albumCover} className="song-img"></img>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="song-current">
        <h2>Currently Playing:</h2>
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
        <img src={currentSong.albumCover}></img>
        <br></br>
        <iframe src={currentSong.previewURL} title="Spotify Preview"></iframe>
        <button
          onClick={() => {
            props.setCounts((currCounts) => {
              const newCounts = { ...currCounts };
              newCounts[currentSong.title] += 1;
              return newCounts;
            });
            props.setSong((currentlyPlaying) => {
              if (currentlyPlaying === props.songs.length - 1) {
                return 0;
              }
              return currentlyPlaying + 1;
            });
            props.setCash((currCash) => {
              if (currCash <= 0) {
                return currCash;
              } else {
                return currCash - 1;
              }
            });
          }}
        >
          ⏭️
        </button>
      </div>
    </>
  );
};

export default Songs;
