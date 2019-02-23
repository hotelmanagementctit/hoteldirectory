var imageUrl=["Slideshow1.jpg","SlideShow2.jpg","Slideshow3.png","Slideshow4.png","Slideshow5.jpg","Slideshow6.png"]			//IMAGES URL STORED IN ARRAY FOR SLIDESHOW
var i=-1

var UniDate=new Date()
																	//DATE OBJECT FOR VALIDATING BOOKING
var DCompare=[]
DCompare[0]=UniDate.getFullYear()
DCompare[1]=UniDate.getMonth()+1
DCompare[2]=UniDate.getDate()






function automateSlideShow()														//FUNCTION THAT AUTOMATES SLIDESHOW
{
	slideShow(1)
	setTimeout(automateSlideShow,"5000")
}



function slideShow(val)															//FUNCTION FOR SLIDESHOW
{
	

	
	i+=parseInt(val)

	if(i==6)
		i=0
	if(i==-1)
		i=5

	document.getElementById("slideshow").style.backgroundImage="url("+imageUrl[i]+")"
	

}









function Greet()
{
	var val
	var tdate=new Date()
	var date=tdate.getDate()
	var Month=tdate.getMonth()+1
	var Year=tdate.getFullYear()													//FUNCTION FOR LIVE CLOCK AND GREET ACCORDING TO THAT
	var Hours=tdate.getHours()
	var Minutes=tdate.getMinutes()
	var Seconds=tdate.getSeconds()
	
	



	if(Hours<12)
		val="GOOD MORNING"
	else if(Hours<18)
		val="GOOD AFTERNOON"
	else if(Hours<20)
		val="GOOD EVENING"
	else val="GOOD NIGHT"




	document.getElementById("greet").value=val+", USER"




	if(date<10)

		date="0"+date

	if(Month<10)
		Month="0"+Month

	if(Hours<10)
		Hours="0"+Hours

	if(Minutes<10)
		Minutes="0"+Minutes
	
	if(Seconds<10)
		Seconds="0"+Seconds




	document.getElementById("Live Clock Head").value=date+"-"+Month+"-"+Year
	
	document.getElementById("Live Clock Foot").value=Hours+":"+Minutes+":"+Seconds	

	

	setTimeout(Greet,1000)
	
	
}














function extend(id,val)															//FUNCTION FOR MENU AND BOOKING BAR EXPANSION
{
	if(id=="lightshade")
	{	document.getElementById("extend1").style.visibility=val
		document.getElementById("menuBar").style.visibility="hidden"
	}
	else
	{	document.getElementById("menuBar").style.visibility=val
		document.getElementById("extend1").style.visibility="hidden"
	
	}
}














function checkDate(ID)															//FUNCTION FOR VALIDATING DATE 
{
	var DateElements=document.getElementById(ID).value.split("-")			//Format is YYYY-MM-DD				
	var wrong

	
	if(ID=="RDDate" )
	{	
		if(!document.getElementById("RADate").value)
		{	
			alert("The Arrival Date Should Be Entered First")
			document.getElementById(ID).value=""
			return 0;
		}




		var DateElements1=document.getElementById("RADate").value.split("-")

		
		if(parseInt(DateElements[0])<DCompare[0] || parseInt(DateElements[0])<parseInt(DateElements1[0]) )			
			wrong=1 
		else if(parseInt(DateElements[1])<DCompare[1] || parseInt(DateElements[1])<parseInt(DateElements1[1]))
			wrong=1 
		else if(parseInt(DateElements[2])<DCompare[2] || parseInt(DateElements[2])<parseInt(DateElements1[2]))
			if(!(parseInt(DateElements[1])>DCompare[1] && parseInt(DateElements[1])>parseInt(DateElements1[1])))
				wrong=1
		else
			wrong=0




		if(wrong==1)
		{	
			alert("Departure Date Should Be After Arrival")
			document.getElementById("RDDate").value=""
		}


	}



	else


	{

		if(parseInt(DateElements[0])<DCompare[0])			
			wrong=1
		else if(parseInt(DateElements[1])<DCompare[1])
			wrong=1
		else if(parseInt(DateElements[2])<DCompare[2])
			if(!(parseInt(DateElements[1])>DCompare[1]))
				wrong=1
		else
			wrong=0
	



		if(wrong==1)
		{
			alert("There is mistake in Date, So resetting it to null")
			document.getElementById(ID).value=""
		}

		else 
			if(ID[0]=="T")
				document.getElementById("Table Book1").innerHTML=DateElements[2]+"-"+DateElements[1]+"-"+DateElements[0]
	
	}	


}
















function checkPeople(ID)
{


	var allowedPeople=20

	
	if(document.getElementById(ID).value>allowedPeople)
	{	alert("Sorry for Inconvinience, We have capacity of 20 only !!!")
		document.getElementById(ID).value=""
	}
	else if(document.getElementById(ID).value<1)
	{	alert("The Capacity can't be less than 1")
		document.getElementById(ID).value=""
	}
	else	
		if(ID[0]=="T")
			document.getElementById("Table Book2").innerHTML=document.getElementById(ID).value


} 














function loadList()
{

	var tempDate=new Date()
	var listHour=tempDate.getHours()
	listHour+=4
	var content="",i
	


	for(i=0;i<4;i++)
	{
		if(listHour>=24)
			listHour-=24
		else
			listHour+=1

		content+="<option>"+parseInt(listHour)+" O' Clock</option>"
		
	}

	
	
	
	document.getElementById("TTime").innerHTML=content
	document.getElementById("Table Book3").innerHTML=document.getElementById("TTime").options[0].text
}
















function putTime(ID)
{
	
	var time=document.getElementById(ID);
	document.getElementById("Table Book3").innerHTML=time.options[time.selectedIndex].text;
}




	







function RoomAdvance(ID,VALUE)
{

	if(VALUE=="none")
		VALUE="block"
	else
		VALUE="none"


	if(ID=="SCode" || ID=="ASearch" || ID=="ASearch1")
	{	document.getElementById(ID).value=VALUE
		document.getElementById(ID+"1").style.display=VALUE

		if(ID=="ASearch" && document.getElementById(ID+"11").style.display=="block")
		{	document.getElementById(ID+"11").style.display=VALUE
			document.getElementById(ID+"1").value=VALUE
		}
		
	}	
	

}








function checkThree(ID)														//Check the Room , Children And Adults for Validation
{


	var element=parseInt(document.getElementById(ID).value)

	var wrong=0
	
	if(element>30)		
	{
		alert("You can't set "+ID+" more than 30")
		wrong=1
	}

	if(element<0)
	{	
		alert("You can't set "+ID+" less than 0")	
		wrong=1
	
	}

	if(wrong==1)
	{	if(ID=="RChildren")
			document.getElementById(ID).value=0
		else
			document.getElementById(ID).value=1

	}


}




function validateBookRoom()
{
	var prices=[2400,3400,4400,5400,1000]

	var tempADate=document.getElementById("RADate").value
	var tempDDate=document.getElementById("RDDate").value
	var tempRooms=parseInt(document.getElementById("RRooms").value)
	var tempAdults=document.getElementById("RAdults").value
	var tempChildren=parseInt(document.getElementById("RChildren").value)
	var tempPromo=document.getElementById("RPromo").value
	var tempRoomType,finalPrice=0

	
	var Nights
	
	for(var i=0;i<4;i++)
	{
		if(document.getElementById("RoomType"+i).checked)
		{	tempRoomType=document.getElementById("RoomType"+i).value
			break;
		}
	}


	
	if(!(tempADate && tempDDate && tempRooms && tempAdults && tempRoomType) && tempChildren<0)
		{
			alert("All columns must be fullfilled")
			return 0;
		}

	

	var tempDate=tempADate.split("-")
	var tempDate2=tempDDate.split("-")

	tempDate=parseInt(tempDate[2])
	tempDate2=parseInt(tempDate2[2])

	
	if((tempDate2-tempDate)<0)
	{	tempDate=30-tempDate
		Nights=tempDate+tempDate2
	}
	else
		Nights=tempDate2-tempDate
		




	if(Nights>30)
	{
		alert("You can't book hotel for more than 30 nights , Please Reconsider Your Departure Date")
		document.getElementById("RDDate").value=""
		return 0;
	}

	
	

	if(Nights==0)
	{
		 Nights=1
	
	}


	finalPrice=(((prices[i]+(prices[i]*0.18))+tempChildren*prices[4])*Nights)*tempRooms
	
	if(tempPromo)
		if(tempPromo=="LOKKUSH")
		{	
			finalPrice-=1000
			alert("Promocode Applied : You get the Disount worth Rs:1000")
		}
		else
		{
			alert("The Promocode is not valid")
			return 0; 
		}
	
	


	alert("You have Successfully booked "+tempRooms+" Rooms worth INR: "+finalPrice+" !" )




	
}









function checkGuest(ID)														//Check the Guests

{
	var element=parseInt(document.getElementById(ID).value)

	var wrong=0
	
	if(element>3000)		
	{
		alert("You can't set "+ID+" more than 3000, So Setting it to 1")
		wrong=1
	}

	if(element<0)
	{	
		alert("You can't set "+ID+" less than 0 ,So Setting to 1")	
		wrong=1
	
	}

	if(wrong==1)
		document.getElementById(ID).value=1

}




function checkName(ID)
{


	var Name=document.getElementById(ID).value
	
	var patt=/^(?:[-A-Z]+\.? )+[-A-Z]+$/i



	if(!patt.test(Name))
	{
		alert("Invalid Name , Try Reconsidering it.")
		document.getElementById(ID).value=""
	}

}
	





function LoadEventList(ID)
{



	var arr=["Marriage Anniversary","Birthday Party","Other Event"]
	var content=""

	for(var i=0;i<arr.length;i++)
	{
		content+="<option>"+arr[i]+"</option>"
	}

	

	document.getElementById(ID).innerHTML=content
}
	



function booktable()
{


	
	var date=document.getElementById("TDate").value
	var no_of_person=document.getElementById("TPersons").value
	var chk_time=document.getElementById("TTime").value


	if(date && no_of_person && chk_time)
		alert("Your table have been booked :" + date + no_of_person + chk_time)
	else
		alert("ALL field should be filled")
	
}






function checkEmail(ID)
{

	var patt=/\S+@\S+\.+\S+/
	var str=document.getElementById(ID).value

	if(!str.match(patt))
	{	alert("There is mistake, Try Reconsidering it!")
		document.getElementById(ID).value=""
	}

}




function checkTelephone(ID)
{
	 var phoneno = /^\d{10}$/;
	 var str=document.getElementByID(ID).value


	if(!str.match(patt))
	{	alert("There is mistake in Phone . Try Reconsidering it")
		
		document.getElementByID(ID).value=""
	
	}
}	






function validateEvent()
{



	var tempName=document.getElementByID("EName").value
	var tempEmail=document.getElementByID("EEmail").value
	var Telephone=document.getElementByID("ETelephone").value
	var Event=document.getElementByID("ETEvent").value}

	




		
