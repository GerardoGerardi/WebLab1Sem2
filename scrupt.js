
    let out = document.getElementById("output");
	out.style.color = 'green';
	out.innerText = "";
	var input= document.getElementById("userId");
	
    
     function TakeQuest228()
    {  out.innerText = "";
    fetch('https://jsonplaceholder.typicode.com/todos/'+ input.value)
            .then(res => res.json())
            .then(json => {
             
                    out.innerText += "userId: " + json.userId + "\n";
                    out.innerText += "id: " + json.id + "\n";
                    out.innerText += "title: " + json.title + "\n";
                    out.innerText += "completed: " + json.completed + "\n";
                    out.innerText += "\n\n\n";   
                });     

     	var tmp=document.getElementById("1");
     	tmp.checked=false;
     	var tmp2=document.getElementById("2");
     	tmp2.checked=true;
     }
      function TakeQuest227()
     {   out.innerText = "";
      fetch('https://jsonplaceholder.typicode.com/users/'+input.value+'/todos')
            .then(res => res.json())
            .then(json => {
                 json.forEach(element => {
                    out.innerText += "userId: " + element.userId + "\n";
                    out.innerText += "id: " + element.id + "\n";
                    out.innerText += "title: " + element.title + "\n";
                    out.innerText += "completed: " + element.completed + "\n";
                    out.innerText += "\n\n\n";   
                });
            })

     	var tmp=document.getElementById("1");
     	tmp.checked=true;
     	var tmp2=document.getElementById("2");
     	tmp2.checked=false;
     }