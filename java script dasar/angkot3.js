//ANGKOT 3

// var jmlangkot = 10,
//     angkotberopeasi = 6;

// for(var angkot = 1; angkot <= jmlangkot; angkot++){
//     if(angkot <=6){
//         console.log('Angkot No. '+ angkot + ' beroprasi dengan baik.');
//     }
//     else{
//         console.log('Angkot No. '+angkot+' tidak beroprasi.' );
//     }
// }

//ANGKOT 4

// var jml = 10,
//     beroprasi = 6;

// for(var angkot = 1; angkot <= jml;angkot++){
//     if(angkot <= beroprasi){
//         console.log('Angkot No. '+ angkot + ' beroprasi dengan baik.');
//     }
//     else if ( angkot === 8){
//         console.log('Angkot No. '+ angkot + ' sedang lembur.');
//     }
//     else{
//         console.log('Angkot No. '+angkot+' tidak beroprasi.' );
//     }
// }

//ANGKOT 5

var jml = 10,
  beroprasi = 6

for (var angkot = 1; angkot <= jml; angkot++) {
  if (angkot <= beroprasi && angkot !== 5) {
    console.log("Angkot No. " + angkot + " beroprasi dengan baik.")
  } else if (angkot === 8 || angkot === 10 || angkot === 5) {
    console.log("Angkot No. " + angkot + " sedang lembur.")
  } else {
    console.log("Angkot No. " + angkot + " tidak beroprasi.")
  }
}
