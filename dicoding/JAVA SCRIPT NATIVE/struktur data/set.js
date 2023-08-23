/* SET(set of values) merupakan struktu data tidak memiliki index dan datanya bersifat unik, jadi jika ada data sama maka hanya ditulis 1 saja */
const mySet = new Set([1, 1, 23, 3, 3, 4, "HALLO"])
mySet.add(2) //untuk menambahkan data, jika data sudah ada maka akan diabaikan
mySet.delete(23) //untuk menghapus data, tulis value yg ingin dihapus karena set tidak berindex
console.log(mySet)
