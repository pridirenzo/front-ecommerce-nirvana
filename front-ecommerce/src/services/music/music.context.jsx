import { createContext, useContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// contexto p mantener todo más ordenado
const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(new Audio("smells_like_teen_spirit.mp3")); // podemos cambiar la canción.
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Guardar el tiempo de la canción en segundos

  const handlePlayMusic = () => {
    if (!isPlaying) {
      audioRef.current
        .play()
        .catch((error) => console.error("Error al reproducir música:", error));
      audioRef.current.currentTime = progress; // Reanudar desde el tiempo guardado
      setIsPlaying(true);
    }
  };

  const handlePauseMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setProgress(audioRef.current.currentTime); // Guardamos el tiempo de la canción al pausar
      setIsPlaying(false);
    }
  };

  // Actualizar el progreso de la canción en tiempo real
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        setProgress(audioRef.current.currentTime); // Actualizamos el progreso
      }
    };

    // Agregar el evento timeupdate para actualizar el progreso
    const audioElement = audioRef.current;
    audioElement.addEventListener("timeupdate", updateProgress);

    // Limpiar el evento al desmontar el componente
    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <MusicContext.Provider
      value={{ isPlaying, handlePlayMusic, handlePauseMusic, audioRef }}
      >
      {children}
    </MusicContext.Provider>
  );
};

MusicProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export const useMusic = () => useContext(MusicContext);
