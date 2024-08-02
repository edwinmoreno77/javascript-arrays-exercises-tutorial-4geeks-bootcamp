let i = 20;

do {
    // Magic goes here
    if (i === 0) {
        console.log('LIFTOFF');
    } else {
        (i % 5 === 0) ? console.log(i + '!') : console.log(i);
    }

    i--;
} while (i >= 0);
