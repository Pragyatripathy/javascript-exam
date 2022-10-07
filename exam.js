const input = document.querySelector('#input');
const form = document.querySelector('form')
const buttonElement = document.querySelector('#btn');
const ullistElement = document.querySelector('#ullist');
//const formElement = document.querySelector('#form');
const par = document.querySelector('#par');
const img = document.querySelector('#photo');

//const showSearch = true;

//if (showSearch == true ) {  

form.addEventListener('submit',function(event){
  event.preventDefault();

fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)

.then((response)=>{
  console.log(response);
  return response.json();
})
.then((tv)=> {
  console.log(tv);
  ullistElement.innerHTML = '';
  
  tv.forEach(tvShow => {
    const  listItem = document.createElement('li');
    ullistElement.appendChild(listItem);
    listItem.textContent = tvShow.show.name;
    //listItem.style.padding = 20;

    listItem.addEventListener('click',function() {
      par.textContent = tvShow.show.summary;
      img.src = tvShow.show.image.medium;
     });
  });
  //console.log(tv);
});

});


//} else {
 // console.log ('no result')
    
  //}
