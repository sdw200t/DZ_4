const r1 = require('readline').createInterface(process.stdin, process.stdout);
let count = 0;

function question(quest) {
    return new Promise((resolve, reject) => {
        r1.question(quest, (data) => {
            resolve(data);
        })
    })
}

async function input() {
    const number = 5;
    while (true) {
        count++
        const cmd = await question("Введите число: ")
        if (cmd == number)  {
            r1.close();
            console.log(`Вы угадали число (количество попыток ${count})`);
            break;
        }  else if (cmd < number) {
            console.log(`Ваше число меньше загаданного (количество попыток ${count})`);
        } else {
            console.log(`Ваше число больше загаданного (количество попыток ${count})`);
        }
    }
}

input();