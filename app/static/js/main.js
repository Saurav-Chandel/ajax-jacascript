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


window.onload = initAll;   //initialize a function

var saveBookButton;

function initAll(){  //initAll function definition
    saveBookButton = document.getElementById('book');  //get the id of button
    saveBookButton.onclick = saveBook;  //again initialize a function
}

function saveBook(){   //saveBook function definition

  var name = document.getElementById('name').value;  
  var prize = document.getElementById('prize').value; 
  var pages = document.getElementById('pages').value; 
  
  var url = '/save_book?name='+name+'&prize='+prize+'&pages='+pages;   

//   alert(url)

  var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(req.responseText);    //get reponse from the views function.   
      }
    };
    req.open("GET", url , true);   //give server url
    req.send();                 //sends a request to a url you assign.
    // alert('Book Save Successfully')
}

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













