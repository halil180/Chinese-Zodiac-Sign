/*

PROGRAM ANALYSE 

1.this program finds users  chinese zodiac sign based on the input given  by the user
2.birth year of the user is required

birth year % 12  ==>  index of the  BRANCH  array 
e.g  birth year % 12  ===  0 then MONKEY etc...

The Element for Your Year of Birth

Metal: Birth years ending in 0 or 1.
Water: Birth years ending in 2 or 3.
Wood: Birth years ending in 4 or 5.
Fire: Birth years ending in 6 or 7.
Earth: Birth years ending in 8 or 9.
*/


const BRANCH = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger',
    'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'
]

// following happens when if user enters a value less than 1900 
document.getElementById('error').style.display = 'none'
document.getElementById('close').style.display = 'none'
document.getElementById('danger').style.display = 'none'

///// input, button and result
let tarih = document.getElementById('input').value;
let button = document.getElementById('btn');
let sonuc = document.getElementById('result');

///////this occurs after clicking the button
button.addEventListener("click", function () {


    document.getElementById('info').style.display = 'none'



    //////getting the birthyear from the user (tarih means date in turkish in case ur wondering what that means)
    let tarih = document.getElementById('input').value;

    ///////if the user enters any value less than 1900 :
    if (tarih < 1900) {

        document.getElementById('error').style.display = 'block'
        document.getElementById('close').style.display = 'block'
        document.getElementById('danger').style.display = 'block'
        loopDisplayNone()


    } else {
        ////// getting the last digit in order to find the  zodiac elements
        const lastDigit = tarih.charAt(3);
        /////////resimler
        let el = document.getElementsByClassName('iconify')

        ///// delete every icon 
        function loopDisplayNone() {
            for (let index = 0; index < el.length; index++) {
                el[index].style.display = 'none'
            }
        }

        let button = document.getElementById('btn');
        ///// steem
        let steem;
        if (lastDigit == 0 || lastDigit == 1) {
            steem = 'Metal'
            loopDisplayNone()
            document.getElementById('metal-icon').style.display = 'block'
        } else if (lastDigit == 2 || lastDigit == 3) {
            loopDisplayNone()
            document.getElementById('water-icon').style.display = 'block'
            steem = 'Water'
        } else if (lastDigit == 4 || lastDigit == 5) {
            loopDisplayNone()
            document.getElementById('wood-icon').style.display = 'block'
            steem = 'Wood'
        } else if (lastDigit == 6 || lastDigit == 7) {
            loopDisplayNone()
            document.getElementById('fire-icon').style.display = 'block'
            steem = 'Fire'
        } else if (lastDigit == 8 || lastDigit == 9) {
            loopDisplayNone()
            document.getElementById('earth-icon').style.display = 'block'
            steem = 'Earth'
        }
        ////// function for finding your zodiac animal
        let myFunction = (a, b) => a % b;
        /////////// 
        let division = myFunction(tarih, 12);

        let yourZodiacSign;
        if (division == 0) {
            yourZodiacSign = BRANCH[0]
            document.getElementById('monkey').style.display = 'block'
        } else if (division == 1) {
            yourZodiacSign = BRANCH[1]
            document.getElementById('rooster').style.display = 'block'
        } else if (division == 2) {
            yourZodiacSign = BRANCH[2]
            document.getElementById('dog').style.display = 'block'
        } else if (division == 3) {
            yourZodiacSign = BRANCH[3]
            document.getElementById('pig').style.display = 'block'
        } else if (division == 4) {
            yourZodiacSign = BRANCH[4]
            document.getElementById('rat').style.display = 'block'
        } else if (division == 5) {
            yourZodiacSign = BRANCH[5]
            document.getElementById('ox').style.display = 'block'
        } else if (division == 6) {
            yourZodiacSign = BRANCH[6]
            document.getElementById('tiger').style.display = 'block'
        } else if (division == 7) {
            yourZodiacSign = BRANCH[7]
            document.getElementById('rabbit').style.display = 'block'
        } else if (division == 8) {
            yourZodiacSign = BRANCH[8]
            document.getElementById('dragon').style.display = 'block'
        } else if (division == 9) {
            yourZodiacSign = BRANCH[9]
            document.getElementById('snake').style.display = 'block'
        } else if (division == 10) {
            yourZodiacSign = BRANCH[10]
            document.getElementById('horse').style.display = 'block'
        } else if (division == 11) {
            yourZodiacSign = BRANCH[11]
            document.getElementById('sheep').style.display = 'block'
        }
        ///////result on the screen
        document.getElementById('result').innerHTML = ` Branch: ${yourZodiacSign} <br>  Steem: ${steem}   `;






    }
})