document.write("11. to convert temperatures to and from Celsius, Fahrenheit."+"<br>");
function test11(c,fa){
    // var c=5*(f-32)/9
    var f=(c*9)/5+32;
    var cl=5*(fa-32)/9;

    return c+"\xB0C is "+f+" \xB0F"+"<br>"+fa+"\xB0F is "+cl+"\xB0C";
}
document.write(test11(60,45)+"<br><br>");