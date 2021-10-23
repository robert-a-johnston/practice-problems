// s = string
// k = number of places to shift alphabet

function caesarCipher(s, k){
    let cipher = ''

    for(let i = 0; i < s.length; i++){
        // capital letters
        console.log(s.charCodeAt(i))
        if(s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91){
            console.log('cap before', s[i])
            cipher += String.fromCharCode((s.charCodeAt(i) + k - 65) % 26 + 65)
            // lower case
        } else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
            console.log('before', s[i])
            cipher += String.fromCharCode((s.charCodeAt(i) + k - 97) % 26 + 97)
            
        } else {
            cipher += s[i]
        }
    }
    return cipher
}

let s1 = 'middle-Outz'
let s2 = "There's-a-starman-waiting-in-the-sky"
console.log(caesarCipher(s1, 2))
console.log(caesarCipher(s2, 3))
