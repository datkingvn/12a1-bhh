import styles from "./MusicPlayer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faPause,
  faPlay,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { Alegreya } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { formatMusicTime } from "@app/utils";

const alegreyaFont = Alegreya({ subsets: ["latin"] });

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", (e) => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      });
      audioRef.current.addEventListener("pause", (e) => {
        setPaused(!!audioRef.current?.paused);
      });
      audioRef.current.addEventListener("play", (e) => {
        setInitialized(true);
        setPaused(!!audioRef.current?.paused);
        setDuration(audioRef.current?.duration || 0);
      });
    }
  }, [audioRef.current]);

  useEffect(() => {
    document.body.addEventListener("mouseup", function () {
      if (audioRef.current && !(audioRef.current as any).initialized) {
        (audioRef.current as any).initialized = true;
        return audioRef.current.play();
      }
    });
  }, []);

  return (
    <div
      className={styles.musicPlayer}
      style={{
        fontFamily: alegreyaFont.style.fontFamily,
      }}
    >
      <audio
        autoPlay={true}
        ref={audioRef}
        src="/assets/music/minhcungnhaudongbang.mp3"
      />
      <div className={styles.mobileProgress}>
        <div
          className={styles.progress}
          style={{
            width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
          }}
        />
      </div>
      <div
        className={styles.mobileArtwork}
        style={{
          backgroundImage: `url('https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/e/6/6/0/e660a6c3fecea2c01da298e42c9c03aa.jpg')`,
        }}
      />
      <div className={styles.track}>
        Mình Cùng Nhau Đóng Băng - Thùy Chi
        <div className={styles.mobileTimer}>
          {!audioRef.current?.currentTime
            ? "--:--"
            : formatMusicTime(currentTime!)}
          {" / "}
          {duration <= 0 ? "--:--" : formatMusicTime(duration)}
        </div>
      </div>
      <div className={styles.timer}>
        <div className={styles.currentTime}>
          {!audioRef.current?.currentTime
            ? "--:--"
            : formatMusicTime(currentTime!)}
        </div>
        <input
          type="range"
          min="1"
          max="100"
          className={styles.slider}
          id="myRange"
          value={duration > 0 ? (currentTime / duration) * 100 : 0}
        />
        <div className={styles.duration}>
          {duration <= 0 ? "--:--" : formatMusicTime(duration)}
        </div>
      </div>
      <div className={styles.mobileControls}>
        <div className={styles.control}>
          <a
            href={"https://www.youtube.com/watch?v=ANer4zU5pn4"}
            target={"_blank"}
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
        <div className={styles.control}>
          <a
            onClick={(e) => {
              e.preventDefault();
              if (paused) {
                audioRef.current?.play();
              } else audioRef.current?.pause();
            }}
          >
            <FontAwesomeIcon icon={paused ? faPlay : faPause} />
          </a>
        </div>
      </div>
      <div className={styles.controls}>
        <a className={styles.smallBtn}>
          <FontAwesomeIcon icon={faRepeat} />
        </a>
        <a
          className={styles.bigBtn}
          onClick={(e) => {
            e.preventDefault();
            if (paused) {
              audioRef.current?.play();
            } else audioRef.current?.pause();
          }}
        >
          <FontAwesomeIcon icon={paused ? faPlay : faPause} />
        </a>
        <a className={styles.smallBtn}>
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
    </div>
  );
}
