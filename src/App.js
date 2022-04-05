const App = () => {
  const playListTitle = 'My cool playlist';
  const songs = [
    {
      id: 1,
      title: 'Dreams',
      artist: 'Fleetwood Mac',
      albumCover:
        'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
      previewURL:
        'https://open.spotify.com/embed/track/0ofHAoxe9vBkTCp2UQIavz?utm_source=generator',
    },
    {
      id: 2,
      title: 'Enter Sandman',
      artist: 'Metallica',
      albumCover:
        'https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg',
      previewURL:
        'https://open.spotify.com/embed/track/5sICkBXVmaCQk5aISGR3x1?utm_source=generator',
    },
    {
      id: 3,
      title: "Don't stop me now",
      artist: 'Queen',
      albumCover:
        'https://upload.wikimedia.org/wikipedia/en/9/97/Queen-dont-stop-me-now-1979-6-s.jpg',
      previewURL:
        'https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7?utm_source=generator',
    },
  ];
  const playCounts = {
    Dreams: 10,
    'Enter Sandman': 5,
    "Don't stop me now": 8,
  };
  const currentlyPlaying = "Don't stop me now";

  return (
    <div className="App">
      <h1>React Intro</h1>
    </div>
  );
};

export default App;

// Create your new Components here
