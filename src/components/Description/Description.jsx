import ccs from "../Description/Description.module.css";

export default function Description() {
  return (
    <>
      <h1 className={ccs.title}>Sip Happens Café</h1>
      <p className={ccs.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
