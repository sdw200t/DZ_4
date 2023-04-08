function getPasswordChecker(password) {
    let truePass = password
    return function (pass) {
        return truePass === pass
    }
}

const funcPass = getPasswordChecker("123")

console.log(funcPass("321"))
console.log(funcPass("123"))