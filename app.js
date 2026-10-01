
let UserPassWord = prompt('Enter Your Password:');
const classff1 = document.querySelector('.classff1');
const classff4 = document.querySelector('.classff4')
const wrong = document.querySelector('.wrong');

if (UserPassWord == 'classff1') {
    classff1.classList.add('on')


} else if (UserPassWord == 'classff4') {
    classff4.classList.add('on')

} else {
    wrong.classList.add('on')
}