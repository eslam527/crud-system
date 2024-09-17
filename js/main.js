var prodctName = document.getElementById('prodctName')
var prodctprice = document.getElementById('prodctprice')
var prodctctgory = document.getElementById('prodctctgory')
var prodctDsc = document.getElementById('prodctDsc')
var prodcimage = document.getElementById('prodcimage')
var Scersh = document.getElementById('scershterm')
var row= document.getElementById('row')
var updateBtn = document.getElementById('update')
var addBtn = document.getElementById('add')
var upDate = document.getElementById('update')
var tmp;

var proContanier ;
if(localStorage.getItem('pro') != null){
proContanier = JSON.parse(localStorage.getItem('pro'))
display(proContanier)

}else{
  proContanier=[];
}


function  addPro(){

// console.log(prodcimage.files);

  var  proObject={
        name:prodctName.value,
        price:prodctprice.value,
        ctctgrory:prodctctgory.value,
        dec:prodctDsc.value,
        image:`images/pro/${prodcimage.files[0]?.name}`
    }
    proContanier.push(proObject)
    localStorage.setItem('pro',JSON.stringify(proContanier))
    console.log(proContanier);

    clear()
    display(proContanier)
}
function display(list){
    var body = '';
    for(i = 0; i< list.length ; i++){

     body +=`        <div class="col-sm-12 col-md-4 ">
      <div class="card text-center shadow flip-vertical-fwd">
        <div class="image position-relative">
          <img src="${list[i].image}" class="w-100" alt="" />
          <div class="layer"></div>
        </div>
        <div class="info d-flex flex-column p-3">
          <h2>pro name : ${list[i].name} </h2>
          <h2>pro ctgory : ${list[i].ctctgrory}</h2>

          <p class="">price: <span> ${list[i].price}</span></p>
          <p class="">dsc:<span>  ${list[i].dec}</span></p>
          <button class="btn btn-danger w-100 btn-sm" onclick="delet(${i})"> Delete</button>
          <button class="btn btn-warning w-100 btn-sm mt-2" onclick="setFormToUpdate(${i})"> Update</button>



    </div>
      </div>
    </div>`

    }
    row.innerHTML =body
}

function clear(){
        prodctName.value = '';
        prodctDsc.value ='';
        prodctctgory.value = ''; 
        prodctprice.value = '';
        prodcimage.value = '';
    }

function delet(index){
    console.log('a7a');
    proContanier.splice(index , 1);
    localStorage.setItem('pro',JSON.stringify(proContanier))
    console.log(proContanier);

display(proContanier)
}
function scersh(){
    var  scershRuselt =[];
  for(i = 0; i< proContanier.length ; i++){
    if(proContanier[i].name.toLowerCase().includes(Scersh.value.toLowerCase()) == true){
      scershRuselt.push(proContanier[i]);
    }
   }
display(scershRuselt);
}
function setFormToUpdate(updateIndex){
updateBtn.classList.remove('d-none')
addBtn.classList.add('d-none')

prodctName.value = proContanier[updateIndex].name;
prodctDsc.value = proContanier[updateIndex].dec;
prodctctgory.value = proContanier[updateIndex].ctctgrory; 
prodctprice.value = proContanier[updateIndex].price;
// prodcimage.value = proContanier[updateIndex].image;

var tmp =updateIndex;
console.log(tmp);
}
function newData(){
console.log(tmp);
updateBtn.classList.add('d-none')
addBtn.classList.remove('d-none')
clear()
}