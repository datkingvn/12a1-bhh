import styles from "./MainSection.module.scss";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Alegreya } from "next/font/google";
import Leaves from "@app/components/sections/MainSection/Leaves";
import MainFigure from "@app/assets/figures/bear.png";
import { InvitationDto } from "@app/types/invitation.type";

const TanPearlFont = localFont({
  src: "../../../assets/fonts/TAN-MIGNON.otf",
});
const TanMonCheriFont = localFont({
  src: "../../../assets/fonts/TAN-MON-CHERI.otf",
});

const alegreyaFont = Alegreya({ subsets: ["latin"] });

export default function MainSection() {
  return (
    <div className={styles.mainSection}>
      <Leaves />
      <div
        className={styles.mobileFigure}
        style={{
          backgroundImage: `url(${MainFigure.src})`,
        }}
      />
      <div
        className={styles.welcomeText}
        style={{
          fontFamily: alegreyaFont.style.fontFamily,
        }}
      >
        <div className={styles.welcome}>Lời mời tham dự của</div>
        <div className={styles.guest}>{"Gia Đình Báo Đốm"}</div>
      </div>
      <div
        className={styles.title}
        style={{ fontFamily: alegreyaFont.style.fontFamily }}
      >
        Buổi chụp kỉ yếu của tập thể lớp
      </div>
      <div
        className={styles.names}
        style={{
          fontFamily: TanMonCheriFont.style.fontFamily,
        }}
      >
        <div className={styles.groom}>
          12<span className={TanPearlFont.className}>A</span>1
          <FontAwesomeIcon icon={faHeart} className={styles.connector} />
        </div>
      </div>
      {/*<div className={styles.shortStory} style={{fontFamily: alegreyaFont.style.fontFamily}}>*/}
      {/*  Một câu chuyện được viết lên bằng âm nhạc, tình yêu và tuổi trẻ. Viết vài câu vào dây dài dài sao cho nó dài được*/}
      {/*  khoảng 2 dòng là vừa đẹp...*/}
      {/*</div>*/}

      <div style={{ zIndex: 99999 }} className={"flex justify-between"}>
        <div className={"flex-grow-1"}>
          <h2
            style={{
              fontFamily: alegreyaFont.style.fontFamily,
            }}
          >
            Giáo viên chủ nhiệm:
          </h2>
          <h3
            style={{
              fontFamily: alegreyaFont.style.fontFamily,
              fontWeight: 500,
            }}
          >
            Cô: Nguyễn Thị Hồng Tư
          </h3>
        </div>
      </div>

      {/*<div className={styles.cta}>*/}
      {/*  <a className={styles.button} style={{*/}
      {/*    fontFamily: alegreyaFont.style.fontFamily*/}
      {/*  }}>*/}
      {/*    <span className={styles.text}>*/}
      {/*      Lịch trình*/}
      {/*    </span>*/}
      {/*    <span className={styles.date}>*/}
      {/*      Jan 4th, 2024*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
}
