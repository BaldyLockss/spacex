import s from "./page2.module.css";

const Page2 = () => {
  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.content}>
          <div>
            <h3>recent launch</h3>
            <h1>starlink mission</h1>
          </div>
          <div className={s.btn}>
            <button>rewatch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
