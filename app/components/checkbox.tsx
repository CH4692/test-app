import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

function Checkbox(props: { complete: boolean }) {
  return (
    <div>
      {!props.complete && (
        <FontAwesomeIcon className="h-12 w-12 text-accent2" icon={faCircle} />
      )}
      {props.complete && (
        <FontAwesomeIcon
          className="h-12 w-12 text-accent2"
          icon={faCircleCheck}
        />
      )}
    </div>
  );
}

export default Checkbox;
