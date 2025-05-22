import styles from "./CalendarSection.module.scss";
import { Alegreya } from "next/font/google";
import Countdown from "react-countdown";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const alegreyaFont = Alegreya({ subsets: ["latin"] });
export default function CalendarSection() {
  const Map = dynamic(
    () => import("@app/components/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <div>Chụp kỷ yếu đã diễn ra...</div>;
    } else {
      // Render a countdown
      return (
        <div className={styles.dateSection}>
          <div className={styles.pock}>
            <div className={styles.number}>{days}</div>
            <div className={styles.unit}>ngày</div>
          </div>
          <div className={styles.pock}>
            <div className={styles.number}>{hours}</div>
            <div className={styles.unit}>giờ</div>
          </div>
          <div className={styles.pock}>
            <div className={styles.number}>{days}</div>
            <div className={styles.unit}>ngày</div>
          </div>
          <div className={styles.pock}>
            <div className={styles.number}>{minutes}</div>
            <div className={styles.unit}>phút</div>
          </div>
          <div className={styles.pock}>
            <div className={styles.number}>{seconds}</div>
            <div className={styles.unit}>giây</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={styles.calendarSection}
      style={{
        fontFamily: alegreyaFont.style.fontFamily,
      }}
    >
      <div className={styles.content}>
        <div className={styles.title}>Địa Điểm</div>
        <div className={styles.opening}>
          Buổi chụp kỷ yếu sẽ bắt đầu vào{" "}
          <span className={styles.specific}>
            8 giờ sáng, ngày 24 tháng 05 năm 2025.
          </span>
        </div>
        {client && (
          <Countdown
            date={new Date("2025-05-24T17:00:00+07:00")}
            renderer={renderer}
          />
        )}
        <div className={styles.location}>
          Buổi chụp kỷ yếu được tổ chức tại Phòng Học Số 1 tại{" "}
          <a
            href={"https://maps.app.goo.gl/ejQVv7HZ5FTTS2yg7"}
            className={styles.address}
            target={"_blank"}
          >
            Trường THPT Nguyễn Huệ, Tam Hiệp, Núi Thành, Quảng Nam, Việt Nam
          </a>
          .
        </div>
        <div
          style={{
            width: "100%",
            height: 400,
          }}
        >
          <Map />
        </div>
      </div>
    </div>
  );
}
