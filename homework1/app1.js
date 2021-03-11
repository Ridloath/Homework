function tabfact(n){
    if (n == 1){
        document.write(`
        <tr>
         <td>1</td>
         <td>1<td>
        </tr>
        `)
        return 1
    }else if (n >= 2){
        s = n*tabfact(n-1) 
       document.write(`
       <tr>
        <td>${n}</td>
        <td>${s}<td>
       </tr>
       `)
       return s
    }else{
        console.log("Wrong type of number")
    }
}
document.write(`
    <table>
        <tr>
            <th>N</th>
            <th>N!</th>
        </tr>
    `)
tabfact(10)
document.write(`
    </table>
`)
 
 