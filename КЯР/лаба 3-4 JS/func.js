

function task1()
{
        mass = new Array();
        mass[0] = 6*Math.pow(3.14, 2) + 3*Math.exp(8);
        mass[1] = 2*Math.cos(4) + Math.cos(12) + 8*Math.exp(3);
        mass[2] = 3*Math.sin(9) + Math.log(5) + Math.sqrt(3);
        mass[3] = 2*Math.tan(5) + 6*3.14 + Math.sqrt(12);

        
        document.write(Math.max(mass[0], mass[1], mass[2], mass[3]).toFixed(2));
        document.write("<br>")
        document.write(Math.min(mass[0], mass[1], mass[2], mass[3]).toFixed(2));
}
function task2() 
{
    all= new Array('pow','pop','push','shift','round','floor','sline','sort');
    arr= new Array(all[1], all[2], all[3], all[6], all[7]); 
    math= new Array(all[0], all[4], all[5]);

    let str='concat';
    document.write(str.concat(arr)+"<br>");
    document.write("Длина первого полученного mass: " + arr.length+ "<br>");
    let str1='PI';

    document.write(math.concat(str1)+"<br>");
     document.write("Длина второго полученного mass: " + math.length+ "<br>");

    document.write("Начальный massiv: "+all[0] + "  " + all[1] + "  " + all[2] + "  " + all[3] + "  " + all[4] + "  "+ all[5] + "  "+ all[6] + "  "+ all[7] + "  " + "<br> Длина: "+ all.length+ "<br>");
    
}
function task3()
{

	let mystring = "Астровская Дарья Александровна";
	document.write("Длина строки: " + mystring.length+"<br>");
	document.write(mystring.toUpperCase()+"<br>");
	document.write(mystring.toLowerCase()+"<br>");
	document.write(mystring.toUpperCase().concat(mystring.toLowerCase())+ '</br>');
	mystring = mystring.replace('стровская','') ;
	mystring = mystring.replace('арья','') ;
	mystring = mystring.replace('лександровна','') ;
    document.write (mystring);

}
function task4()
{

 var x = new Date;
        document.write('<table>');
 
        document.write('<tr><td>Год</td><td>' + x.getFullYear() + '</td>' + '</tr>');
        document.write('<tr><td>Месяц</td><td>' + (x.getMonth()+1) +'</td>' + '</tr>');
        document.write('<tr><td>День</td><td>' + x.getDate() + '</td>' + '</tr>');
        document.write('<tr><td>Час</td><td>' + x.getHours() + '</td>' + '</tr>');
        document.write('<tr><td>Минуты</td><td>' + x.getMinutes() + '</td>' + '</tr>');
        document.write('<tr><td>Секунду</td><td>' + x.getSeconds() + '</td>' + '</tr>');
        document.write('</table>');
  
}