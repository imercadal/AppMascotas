import { Fragment } from "react";

export const HeaderComp = (props) => {
  return (
    <Fragment>
      <div>
        <h1>aaaaaappp de mascotas</h1>
        <button onClick={props.onclick}>
          {props.linkName}
        </button>
      </div>
      <div>
        <h2>{props.subTitle}</h2>
        <div>{props.boton}</div>
      </div>
    </Fragment>
  );
};
