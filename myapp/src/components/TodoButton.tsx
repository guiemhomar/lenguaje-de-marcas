import { click } from "@testing-library/user-event/dist/click";
import React from "react";
function TodoButton() {
    const [cont, setCont] = React.useState(0);

    function Click() {
        setCont(cont +1);
    }

    return (
        <div>
            <p>{cont}</p>
            <button onClick={Click}>Click</button>
        </div>
    );
}

export default TodoButton;