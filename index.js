"use strict";
//let c = 0;
let passwords = [];

function generate(n   /*, args /*Args contain which set to use: no args= 255 character.  */) {
    // avoid range 0-32, 127-160, 173

    let newPassword = "";
    while (n-- > 0) {
        let num = 0;
        while (true) {
            num = Math.floor(Math.random() * (255 - 32)) + 32;
            if (num != 173 && !(num >= 127 && num <= 160)) {
                break;
            }


        }

        let c = String.fromCharCode(num);

        //console.log(c);
        newPassword += c;
    }




    //passwords.push(newPassword);
    return newPassword;
}

iterateChars();
console.log("\n\n" + generate(22));
console.log("\n\n" + generate(22));
console.log("\n\n" + generate(22));
console.log("\n\n" + generate(22));


function iterateChars() {
    for (let i = 0; i < 256; i++) {
        console.log(`${i}:  ${String.fromCharCode(i)}  :`);
    }
}