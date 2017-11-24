


 const ES6Exercise =()=> {
    const a = 1;
    const b = 2;

    const c = {a, b}

    const selectedRows = [1, 2, 4]
    const isSelectedRows = selectedRows.includes(2)
    const indexOfSelectedRows = selectedRows.indexOf(4)
    console.log("isSelectedRows", isSelectedRows, indexOfSelectedRows)// true

    const p1 = 1;
    const p2 = [2, 3, 5]
    const p3 = [6]


    const p1p2p3 = [p1, ...p3, ...p2] // extrct from array

    console.log("p1p2p3", p1p2p3)

    const q1 = [2, 3, 4]
    const [q2,q3,...q4] =q1 // it works as gathering in array

    console.log("q2q3", q2, q3, q4)
}

 export default ES6Exercise