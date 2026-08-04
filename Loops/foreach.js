let arr = [1,2,3,4,5,6,7,8,9,10]; // tbae da number kehra print akrna hai
let table = 5;      // starting vvalue ki hai tuhadi


// foreach use hunda hai for callback function ch asi array de har element te operation perform kar sakde haan.
// and yeh return karda hai undefined asi return value nu store nahi kar sakde haan.
//siraf console mei dekh sakde hai assi


arr.forEach(num => {
    console.log(`${table} x ${num} = ${table * num}`);
});