import Axios from "axios";

function getMainUnits() {
    return Axios({
        method: "get",
        url: "http://localhost:8080/unit/type",
    })
}

function getSubUnit(selectedUnits) {
    return Axios({
        method: "get",
        url: `http://localhost:8080/unit/type/${selectedUnits}`,
    })
}

function getConvertedValue(value1, firstSubUnit1, secondSubUnit1) {
    const conversionDTO = {
        value: value1,
        firstUnitType: firstSubUnit1,
        secondUnitType: secondSubUnit1,
    }
    return Axios.post("http://localhost:8080/unit/converter", conversionDTO)
}

export {getSubUnit, getMainUnits, getConvertedValue}
