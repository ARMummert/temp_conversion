const fs = require('fs');

function convert_input_degree(input_unit, select_temp, conversion) {
    let resultValue;
    if (input_unit == 'c') {
        if (conversion == 'f') {
            resultValue = (1.8 * select_temp) + 32;
        } else if (conversion == 'k') {
            resultValue = select_temp + 273.15; 
        }
    }
    return resultValue.toFixed(2);
}

fs.readFile('temperature.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    try {
        const obj = JSON.parse(data);
        const input_unit = obj.input_unit;
        const select_temp = obj.select_temp;
        const conversion = obj.conversion;
        const value = convert_input_degree(input_unit, select_temp, conversion);

        fs.writeFile('temperature.txt', value, err => {
            if (err) {
                console.error(err);
            } else {
                console.log(value);
            }
        });
    } catch (err) {
        console.error(err);
    }
});

module.exports = convert_input_degree;

