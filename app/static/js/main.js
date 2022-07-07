// $(document).ready(function(){

//     var csrf=$("input[name=csrfmiddlewaretoken").val()

//         $(".btn").click(function(){
//             $.ajax({
//                 url: '',
//                 type: 'get',
//                 data: {
//                     button_text: $(this).text()
                    
//                 },
//                 success: function(response){
//                     $(".btn").text(response.seconds)
//                     $("#seconds").append('<li>' + response.seconds + '</li>')
//                 }
//             });
//          });
//         $("#seconds").on('click','li',function(){
//            $.ajax({
//              url:'',
//              type:'post',
//              data:{
//                 text:$(this).text(),
//                 csrfmiddlewaretoken:csrf
//              },
//              success:function(response){
//                 $('#right').append('<li>'+ response.data +'</li>')
//              }   
//         });
//       });
//     });

// window.onload = function(){
//     document.getElementById("book").onclick=function(){
//         alert("Hello WOrld");
//     }
// }


// window.onload = initAll;   //initialize a function

// var saveBookButton;

// function initAll(){  //initAll function definition
//     saveBookButton = document.getElementById('book');  //get the id of button
//     saveBookButton.onclick = saveBook;  //again initialize a function
// }

// function saveBook(){   //saveBook function definition

//   var name = document.getElementById('name').value;  
//   var prize = document.getElementById('prize').value; 
//   var pages = document.getElementById('pages').value; 

//   var url = '/save_book?name='+name+'&prize='+prize+'&pages='+pages;   
// //   alert(url)

//   var req = new XMLHttpRequest();
//     req.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         alert(req.responseText);    //get reponse from the views function.   
//       }
//     };
//     req.open("POST", url , true);   //give server url
//     req.send();                 //sends a request to a url you assign.
//     // alert('Book Save Successfully')
// }

function showAllBooks(){

    var req = new XMLHttpRequest();
    var url= '/getAllBooks'
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // alert(req.responseText);   //get reponse from the views function. 
        var data = eval(req.responseText);
        var div = document.getElementById('nav-profile');
        div.innerHTML='';
        
        var table=document.createElement('TABLE');   //create table
        
        // table head
        var row = table.insertRow(0);
        var name = row.insertCell(0);
        var price = row.insertCell(1);
        var pages = row.insertCell(2);

        name.innerHTML = "Book Price"
        price.innerHTML = "Number of Pages"
        pages.innerHTML = "Book Name"

        for (var i = 0;i < data.length; i++){   
            var row = table.insertRow(i+1);

            var name = row.insertCell(0);
            var price = row.insertCell(1);
            var pages = row.insertCell(2);

            name.innerHTML = data[i].name;
            price.innerHTML = data[i].prize;
            pages.innerHTML = data[i].pages;
        }
    table.className='table text-center table-striped'    
    div.appendChild(table);
      }
    };
    req.open("GET", url , true);   //give server url
    req.send();                 //sends a request to a url you assign.
    
}

// function clickfunction(){
//   document.getElementById("btn").innerHTML = "Hello World!";
// }



let humanizeFutureToNow = fDate => {
  let result = [], now = new Date()
  console.log(result)
  let parts = ['year', 'month', 'day', 'hour', 'minute']

  parts.forEach((p, i) => {
    let uP = p.charAt(0).toUpperCase() + p.slice(1)
    let t = dateFns[`differenceIn${uP}s`](fDate, now);
    console.log(t)
    console.log(p)
    if (t) {
      result.push(`${i===parts.length-1 ? 'and ' : ''}${t} ${uP}${t===1 ? '' : 's'}`);
      if (i < parts.length)
        fDate = dateFns[`sub${uP}s`](fDate, t);
    }
  })
  return result.join(' ');
}

console.log(humanizeFutureToNow(new Date('2022-11-11')))



const countdown =()=>{
  const currentdate=new Date('2023-07-08');
  console.log(currentdate);
  const now = new Date();
  console.log(now);
  const gap=currentdate-now;
  console.log(gap);

  const second=1000; //miliseconds
  const minute=second *60;
  console.log(minute);

  const hour=minute *60;
  console.log(hour);

  const day=hour *24;

  const weak=day * 7;
  console.log(weak);

  const month=weak * 4.2;
  console.log(month);

  const year=month * 12;
  console.log(year);

  
  console.log("-----------------");
  console.log(day);
  console.log("-----------------");



  //calculate the day

  const textYear=Math.floor(gap/year);
  console.log(textYear);
  document.getElementById('year').innerHTML=textYear;

  const textMonth=Math.floor(gap/month);
  console.log(textMonth);
  document.getElementById('month').innerHTML=textMonth;


  const textWeak=Math.floor(gap/weak);
  console.log(textWeak);
  document.getElementById('week').innerHTML=textWeak;


  const textDay=Math.floor(gap/day);
  console.log(textDay);
  document.getElementById('days').innerHTML=textDay;


  const textHour=Math.floor((gap % day)/hour);
  console.log(textHour);
  document.getElementById('hour').innerHTML=textHour;


  const textMinute=Math.floor((gap % hour)/minute);
  console.log(textMinute);
  document.getElementById('minutes').innerHTML=textMinute;


  const textSecond=Math.floor((gap % minute)/second);
  console.log(textSecond);
  document.getElementById('second').innerHTML=textSecond;

}
countdown();
