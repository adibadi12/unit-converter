console.log('Hello!');
function logToConsole(event) {
    console.dir(document)

    console.dir(event.target)

    const value = event.target.value 

    console.dir("unit:"+ unit)
    console.dir("value:"+ value)

    const unit = event.target.id

    const centimeter = converteFromTo(unit, "centimeter", value)
    const meter = converteFromTo(unit, "meter", value)
    const inch = converteFromTo(unit, "inch", value)
    const feet = converteFromTo(unit, "feet", value)

    //for hvert felt oppdater til den nye verdien

    for (const input of inputElements)

    }

    function converteFromTo(from, to, value)
    {
    const result = 0
    
    return result 
        
    }

const inputCentimeter = document.getElementById("centimeter")
inputCentimeter.addEventListener("input", logToConsole)

const inputMeter = document.getElementById("meter")
inputMeter.addEventListener("input", logToConsole)

const inputFeet = document.getElementById("feet")
inputFeet.addEventListener("input", logToConsole)

const inputInch = document.getElementById("inch")
inputInch.addEventListener("input", logToConsole)


