import { useState } from "react";


const Songs = ({songs, setCounts, setCash, error, setError}) => {
  const [currentlyPlaying, setSong] = useState(0);
  const currentSong = songs[currentlyPlaying];
  

  function handleNextSongBtn() {

    setCash((currCash) => {
      if (currCash <= 0) {
        const errorMsg = "You ran out of cash!"
        setError(errorMsg)
        return currCash;
      } else {
        setCounts((currCounts) => {
          const newCounts = { ...currCounts };
          newCounts[currentSong.title] += 1;
          return newCounts;
        });
        setSong((currentlyPlaying) => {
          if (currentlyPlaying === songs.length - 1) {
            return 0;
          }
          return currentlyPlaying + 1;
        });
        return currCash - 1;
      }
    });
  }

  function handleSongSelection(song) {
    const [] = useState(song.id)
 
    setCash((currCash) => {
      if (currCash <= 0) {
        <p>Not enough money in Balance!</p>;
        return currCash;
      } else {
        setCounts((currCounts) => {
          const newCounts = { ...currCounts };
          newCounts[currentSong.title] += 1;
          return newCounts;
        });
        setSong(() => {
          return song.id - 1;
        });
        return currCash - 1;
      }
    });
  }

  return (
    <> 
    {/* //change song selection via album  */}
      <ol className="songlist">
        {songs.map((song) => {
          return (
            <>
            <li key={song.id} className="song-item">
              <button
                onClick= { () => handleSongSelection(song)}>
                <h2>{song.title}</h2>
                <p>{song.artist}</p>
                <img src={song.albumCover} className="song-img"></img>
              </button>
            </li>
            <p id= {song.id} className = "error"></p>
            </>
          );
        })}
      {/* //next song selection  */}
      </ol>
      <div className="song-current">
        <h2>Currently Playing:</h2>
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
        <img src={currentSong.albumCover}></img>
        <br></br>
        <iframe src={currentSong.previewURL} title="Spotify Preview"></iframe>
        <button onClick={(handleNextSongBtn)}>⏭️</button>
        <p>{error}</p>
        </div>
</>)
      }
  


export default Songs;
