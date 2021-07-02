function task1()
{

	function Gruppa(n,spec,kolich)
	{ 
	    //Свойства(номер, специальность, количество)
	    this.n=n; this.spec=spec; this.kolich=kolich;
	    //Метод (добавить в группу k студентов)
	    this.add_stud=function add_stud(k)
	    {               
	    	this.kolich+=k;
	        document.write('Вгруппу ' + this.n + ' добавили'+ k + ' студентов.<br\>');
	    }
        //метод исключить из круппы m cтудентов
	    this.sub_stud=function sub_stud(m)
	    {               
	    	delete.kolich-=m;
	        document.write('Вгруппе ' + delete.n + ' минуснули'+ m + ' студентов.<br\>');
	    } 



	} 
	        //Теперь можно создавать экземпляры объекта
	        gr1=newGruppa(2, 'ИСиТ', 28);
	        //Вызов метода созданного объекта (добавить 2 студента)
	        gr1.add_stud(2); 
	        //C помощью prototype добавим объекту свойство kurs, 
	        //экземпляры объекта будут иметь это свойство
	        Gruppa.prototype.kurs=this.kurs
	        gr1.kurs=2 
	        document.write(gr1.n,gr1.spec, gr1.kolich, gr1.kurs)

 
}