module.exports = function check(str, bracketsConfig) {

    const config = [];
    let i = 0;
    let counter = 0;
    
    bracketsConfig.forEach(function() {
        config.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
        i++;
    });
    console.log(config)
    
   while (config.length > counter) {
        if (str.includes(config[counter])) {
            str = str.replace(config[counter], '');
            counter = 0;
        } else {
            counter++;
    }
}
    return str === '';
}
