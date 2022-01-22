const {
    readFile,
    writeFile
} = require('fs');

// Async here allows for concurrent running of threads

readFile('./content/stuff1.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    };
    const first = result;
    console.log(result);
    readFile('./content/stuff2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        };
        const second = result;
        console.log(result);

        writeFile('./content/result-async.txt', `The results:\n${first} ${second} \n`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                };
                console.log(result);
            })
    })

});