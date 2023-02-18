const fs = require('fs')

const convert_input_degree=(input_unit, select_temp, conversion) => {
    
    var resultValue = 0;
    var value = 0;
    if (input_unit == 'f') 
        if (conversion == 'c') 
        resultValue = (select_temp - 32) / 1.8
        
    if (input_unit == 'f') 
        if (conversion == 'k') 
        resultValue = ((select_temp - 32) / 1.8) + 273.15
     
    if (input_unit == 'k') 
        if (conversion == 'c') 
        resultValue = ((select_temp - 273.15)*1.8) + 32
    
    if (input_unit == 'k') 
        if (conversion == 'f')
        resultValue = select_temp - 273.15
    
    if (input_unit == 'c') 
        if (conversion == 'f') 
        resultValue = (1.8*select_temp) + 32
        
    if (input_unit == 'c') 
        if (conversion == 'k')
        resultValue = select_temp + 237.15
        
    value = resultValue.toFixed(2);
    fs.writeFile('temperature.txt', value, err => {
    if (err) 
        {console.error(err)}
        console.log(value)
})};


fs.readFile('temperature.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    input_unit = obj.input_unit
    select_temp = obj.select_temp
    conversion = obj.conversion
    value = convert_input_degree(input_unit, select_temp, conversion);
});
