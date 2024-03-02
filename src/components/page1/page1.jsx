import s from "./page1.module.css";

const Page1 = () => {
  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.content}>
          <div>
            <h3>upcoming launch</h3>
            <h1>starlink mission</h1>
          </div>
          <div className={s.btn}>
            <button>watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
