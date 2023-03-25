//TEST 1
// function checkSeatStatus() {
// }

//TEST 2
// function checkSeatStatus(seatNumber) {
//     if (typeof seatNumber !== 'string') {
//         throw new TypeError('First parameter is not a string');
//     }
// }

//TEST 3
// function checkSeatStatus(row, seatNumber) {
//     if (typeof seatNumber !== 'number') {
//         throw new TypeError('Second parameter is not a number');
//     }
// }

//TEST 2 y 3
// function checkSeatStatus(row, number) {
//     if (typeof row !== 'string') throw new TypeError('First parameter is not a string');
//     if (typeof number !== 'number') throw new TypeError('Second parameter is not a number');
// }

//TEST 4

const layout = [
    [{ type: 'VIP', booked: false }, { type: 'VIP', booked: true }, { type: 'VIP', booked: true }, { type: 'VIP', booked: false },],
    [{ type: 'NORMAL', booked: false }, { type: 'VIP', booked: true }, { type: 'VIP', booked: false }, { type: 'NORMAL', booked: false },],
    [{ type: 'NORMAL', booked: false }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: false },],
    [{ type: 'ECONOMIC', booked: true }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: true }, { type: 'ECONOMIC', booked: false },],
    [{ type: 'ECONOMIC', booked: false }, { type: 'ECONOMIC', booked: true }, { type: 'ECONOMIC', booked: false }, { type: 'ECONOMIC', booked: false },],
];

/*
Podemos usar el código de las letras mayúsculas
Sabemos que .charCodeAt(0) aplicado al argumento row nos daria el código asociado
a dicha letra de fila y que la 'A' tiene código 65, la 'B' 66 y así sucesivamente...
Por lo tanto podríamos hacer algo así:
row.charCodeAt(0) - 65;
De esta forma:
   'A' --> 0
   'B' --> 1
    ...
*/

function getRowNumber(letter) {
    return letter.charCodeAt(0) - 65;
}

//TEST 5
// function checkSeatStatus(row, number) {
//     if (typeof row !== 'string') throw new TypeError('First parameter is not a string');
//     if (typeof number !== 'number') throw new TypeError('Second parameter is not a number');

//     const numberRow = getRowNumber(row);
//     const layoutRows = layout[numberRow];
//     const seat = layoutRows[number];
//     return seat.booked;

//     // let seat =  layout[numberRow][number].booked
//     // return seat
// }

//TEST 6
// function book(row, number) {
//     if (checkSeatStatus(row, number)) return `Seat in ${row}${number} is already booked`;
//     const numberRow = getRowNumber(row);
//     const layoutRows = layout[numberRow];
//     const seat = layoutRows[number];
//     seat.booked = true;
//     return `Seat in ${row}${number} successfully booked`
// }

//TEST 6.2
function getSeat(letter, number) {
    const numberRow = getRowNumber(letter);
    const layoutRows = layout[numberRow];
    const seat = layoutRows[number];
    return seat;
}

function checkSeatStatus(row, number) {
    if (typeof row !== 'string') throw new TypeError('First parameter is not a string'); if (typeof number !== 'number') throw new TypeError('Second parameter is not a number');

    const seat = getSeat(row, number);
    return seat.booked;

}

function book(row, number) { if (checkSeatStatus(row, number)) return `Seat in ${row}${number} is already booked`; const seat = getSeat(row, number); seat.booked = true; return `Seat in ${row}${number} successfully booked` }


module.exports = {
    checkSeatStatus,
    getRowNumber
}