import "./btn.scss";

export default function Btn({ children, style }) {
  return (
    <>
      <button className={`btn ${style}`}>{children}</button>
    </>
  );
}
