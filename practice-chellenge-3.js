/* প্রাকটিস চ্যালেঞ্জ-৩: 

উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও  */
var myDailyWork = [
    'Unlock module at 8 AM',
    'Practicing with videos',
    'Taking notes while watching videos',
    'After completion practice yourself',
    'If you do not understand join our support session'
]
var i = myDailyWork.length - 1;
while (i >= 0) {
    console.log(myDailyWork[i]);
    i--;
}