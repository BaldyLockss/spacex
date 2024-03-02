import s from "./page3.module.css";

const Page3 = () => {
  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.content}>
          <div>
            <h3>recent launch</h3>
            <h1>esa eucid mission</h1>
          </div>
          <div className={s.btn}>
            <button>rewatch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
