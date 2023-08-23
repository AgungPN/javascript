//ANGKOT 1

// var angkot = 1;
// while( angkot <= 10){
//     console.log('Angkot No.'+ " "+ angkot +" "+'beroperasi dengan baik.');
//     angkot++;
// }

// ANGKOT 2

var angkot = 1,
    angkotbaik = 6,
    jmlangkot = 10;

while( angkot<= angkotbaik){
    console.log('Angkot No. '+angkot+' beroperasi dengan baik.');
    angkot++;
}
for( angkot =angkotbaik + 1; angkot <= jmlangkot; angkot++ ){
    console.log('Angkot No.'+ " "+ angkot +" "+'tidak beroperasi.');
}