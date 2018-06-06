var board1=[[0,1,2],[9,10,11],[18,19,20]];
var board2=[[3,4,5],[12,13,14],[21,22,23]];
var board3=[[6,7,8],[15,16,17],[24,25,26]];
var board4=[[27,28,29],[36,37,38],[45,46,47]];
var board5=[[30,31,32],[39,40,41],[48,49,50]];
var board6=[[33,34,35],[42,43,44],[51,52,53]];
var board7=[[54,55,56],[63,64,65],[72,73,74]];
var board8=[[57,58,59],[66,67,68],[75,76,77]];
var board9=[[60,61,62],[69,70,71],[78,79,80]];

var board=[0,board1,board2,board3,board4,board5,board6,board7,board8,board9];

$(document).ready(function(){


var x=true;var z;

$('td').click(function(){
 var col = $(this).parent().children().index($(this));
 var row = $(this).parent().parent().children().index($(this).parent());



if(!$(this).text()  && canclick(z,row,col)){

if(x){
$(this).text("X");$(this).css("color","red");
}
else{
$(this).text("O");$(this).css("color","green");
}
x=!x;

resetred();


z=whichboard(row,col);


if(checkifnotfull(board[z]) && checkwin(board[z])==false){
red(board[z]);
}

						}
checkallboards();


		});


});

function resetred(){
	$('.top').removeClass('top');
$('.bottom').removeClass('bottom');
$('.right').removeClass('right');
$('.left').removeClass('left');
}


function whichboard(row,col){
if(row%3==0 && col%3==0){return 1;}
if(row%3==0 && col%3==1){return 2;}
if(row%3==0 && col%3==2){return 3;}
if(row%3==1 && col%3==0){return 4;}
if(row%3==1 && col%3==1){return 5;}
if(row%3==1 && col%3==2){return 6;}
if(row%3==2 && col%3==0){return 7;}
if(row%3==2 && col%3==1){return 8;}
if(row%3==2 && col%3==2){return 9;}
}


function red(q){

for (var i = 0; i < 3; i++) {
$("td:eq("+q[0][i]+")").addClass('top');
$("td:eq("+q[2][i]+")").addClass('bottom');
$("td:eq("+q[i][2]+")").addClass('right');
$("td:eq("+q[i][0]+")").addClass('left');
};

}



function canclick(n,row,col){

if(n==undefined){return true;}

if(checkwin(board[n])==false){

	
if(n==1 && row<=2 && row>=0 && col<=2 && col>=0){return true;}
else if(n==2 && row<=2 && row>=0 && col<=5 && col>=3){return true;}
else if(n==3 && row<=2 && row>=0 && col<=8 && col>=6){return true;}

else if(n==4 && row<=5 && row>=3 && col<=2 && col>=0){return true;}
else if(n==5 && row<=5 && row>=3 && col<=5 && col>=3){return true;}
else if(n==6 && row<=5 && row>=3 && col<=8 && col>=6){return true;}

else if(n==7 && row<=8 && row>=6 && col<=2 && col>=0){return true;}
else if(n==8 && row<=8 && row>=6 && col<=5 && col>=3){return true;}
else if(n==9 && row<=8 && row>=6 && col<=8 && col>=6){return true;}

else{return false;}

}
else{

	 if(checkwin(board[1]) && row<=2 && row>=0 && col<=2 && col>=0){return false;}
else if(checkwin(board[2]) && row<=2 && row>=0 && col<=5 && col>=3){return false;}
else if(checkwin(board[3]) && row<=2 && row>=0 && col<=8 && col>=6){return false;}

else if(checkwin(board[4]) && row<=5 && row>=3 && col<=2 && col>=0){return false;}
else if(checkwin(board[5]) && row<=5 && row>=3 && col<=5 && col>=3){return false;}
else if(checkwin(board[6]) && row<=5 && row>=3 && col<=8 && col>=6){return false;}

else if(checkwin(board[7]) && row<=8 && row>=6 && col<=2 && col>=0){return false;}
else if(checkwin(board[8]) && row<=8 && row>=6 && col<=5 && col>=3){return false;}
else if(checkwin(board[9]) && row<=8 && row>=6 && col<=8 && col>=6){return false;}
else{return true;}

}


}

function checktext(s){
var arr=new Array();	
arr[0]=$("td:eq("+s[0][0]+")").text();
arr[1]=$("td:eq("+s[0][1]+")").text();
arr[2]=$("td:eq("+s[0][2]+")").text();
arr[3]=$("td:eq("+s[1][0]+")").text();
arr[4]=$("td:eq("+s[1][1]+")").text();
arr[5]=$("td:eq("+s[1][2]+")").text();
arr[6]=$("td:eq("+s[2][0]+")").text();
arr[7]=$("td:eq("+s[2][1]+")").text();
arr[8]=$("td:eq("+s[2][2]+")").text();

return arr;
}

function checkifnotfull(s){
var arr=checktext(s);


if(arr[0]==false || arr[1]==false || arr[2]==false || arr[3]==false || arr[4]==false || arr[5]==false || arr[6]==false || arr[7]==false || arr[8]==false){return true;}
else{
resetred();

return false;
}

}

function checkwin(s){

var arr=checktext(s);

if(arr[0]==arr[1] && arr[1]==arr[2] && arr[0]!=""){return arr[0];}
else if(arr[3]==arr[4] && arr[4]==arr[5] && arr[3]!=""){return arr[3];}
else if(arr[6]==arr[7] && arr[7]==arr[8] && arr[6]!=""){return arr[6];}

else if(arr[0]==arr[3] && arr[3]==arr[6] && arr[0]!=""){return arr[0];}
else if(arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!=""){return arr[1];}
else if(arr[2]==arr[5] && arr[5]==arr[8] && arr[2]!=""){return arr[2];}

else if(arr[0]==arr[4] && arr[4]==arr[8] && arr[0]!=""){return arr[0];}
else if(arr[2]==arr[4] && arr[4]==arr[6] && arr[2]!=""){return arr[2];}	
else{return false;}
}


function checkallboards(){
var one=checkwin(board1);
var two=checkwin(board2);
var three=checkwin(board3);
var four=checkwin(board4);
var five=checkwin(board5);
var six=checkwin(board6);
var seven=checkwin(board7);
var eight=checkwin(board8);
var nine=checkwin(board9);

var array=[one,two,three,four,five,six,seven,eight,nine];

for (var i = 0; i < array.length; i++) {
	if(array[i]){
		$("td:eq("+(81+i)+")").text(array[i]);
		$("td:eq("+(81+i)+")").css('pointer-events','all');
	}
};


if(one==two && two==three && one!=""){setwinner(one);}
if(four==five && five==six && four!=""){setwinner(four);}
if(seven==eight && eight==nine && seven!=""){setwinner(seven);}

if(one==four && four==seven && one!=""){setwinner(one);}
if(two==five && five==eight && two!=""){setwinner(two);}
if(three==six && six==nine && three!=""){setwinner(three);}

if(one==five && five==nine && one!=""){setwinner(one);}
if(three==five && five==seven && three!=""){setwinner(three);}	

}

function setwinner(winner){
$('#overlay').empty();
$('#overlay').append('<td style="font-size: 262px;">'+winner+'</td>');
$('#overlay').css('pointer-events','all');

resetred();
}



function debug(){for (var i = 0; i < $('td').length; i++) {$("td:eq("+i+")").text(i);}}