import Axios from "axios";

function getMainUnits() {
    return Axios({
        method: "get",
        url: "http://localhost:8080/unit/type",
    })
}

export {getMainUnits}
