const r1 = require('readline').createInterface(process.stdin, process.stdout);
let count = 0;

function question() {
    const number = 5;
    r1.question("Введите число: ", (cmd) => {
        if (cmd == number)  {
            r1.close();
            console.log(`Вы угадали число (количество попыток ${count})`);
            return
        }  else if (cmd < number) {
            console.log(`Ваше число меньше загаданного (количество попыток ${count})`);
        } else {
            console.log(`Ваше число больше загаданного (количество попыток ${count})`);
        }
        question();
    })
    count++
}

question();