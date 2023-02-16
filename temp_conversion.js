const fs = require('fs')

const convert_input_degree=(input_unit, select_temp, conversion) => {
    
    var resultValue = 0;
    var value = 0;
    if (input_unit == 'f') {
        if (conversion == 'c') {
            resultValue = 5/9*select_temp - 32
        }
        else if (input_unit == 'k'){
            resultValue = select_temp + 457.87
        }
    } 
    if (input_unit == 'k') {
        if (conversion == 'c') {
           resultValue = select_temp - 273.15
    }
    else if (input_unit == 'f'){
        resultValue = select_temp + 457.87
    }}
    if (input_unit == 'c') {
        if (conversion == 'f') {
            resultValue = 9/5*select_temp + 32
        }
        else if (input_unit == 'k'){
            resultValue = select_temp + 237.15
    }};
    console.log(resultValue)
    value = resultValue.toFixed(2);
    fs.writeFile('temperature.txt', value, err => {
    if (err) 
        {console.error(err)}
    
});
console.log(value)
}
fs.readFile('temperature.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    input_unit = obj.input_unit
    select_temp = obj.select_temp
    conversion = obj.conversion
    value = convert_input_degree(input_unit, select_temp, conversion);
});
