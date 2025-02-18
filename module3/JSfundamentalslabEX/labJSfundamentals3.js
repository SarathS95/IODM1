//Which of the following console.log message will print? Why?
if (0) console.log('#1 zero is true') //will not print because zero is flase.
if ("0") console.log('#2 zero is true') // will print because non-empty string.
if (null) console.log('null is true') // will not print because 'null' has no value.
if (-1) console.log('negative is true') //will print because it is non-zero number.
if (1) console.log('positive is true') //will print because it is non-zero number. * any number that is not zero(-or+) will be printed.