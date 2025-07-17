const data= [

    {
        title:"fast",
        color:"light brown",
        price:"120$",
        brandname:"calvin",
        category:"purse",
        img:"./images.jfif",
    },

    {
        title:"go",
        color:"grey",
        price:"150$",
        brandname:"lois viton",
        category:"purse",
        img:"./download.jfif",
    },

    {
        title:"runner",
        color:"brown",
        price:"100$",
        brandname:"gucci",
        category:"purse",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jWUzQLAMZsAvMAVxRZOB-i0rNRQ0kbtKig&s",
    },

    {
        title:"slow",
        color:"black",
        price:"50$",
        brandname:"hogo boss",
        category:"wallet",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQck71perHbjBQB0KPcT1qihoqwwurronuhzA&s",

    },

    {
        title:"brilion",
        color:"light red",
        price:"60$",
        brandname:"gucci",
        category:"wallet",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbI6m9r2G93DDcytKotMCGacFOsgZnYfWKfA&s"

     },

     {
        title:"hogo",
        color:"dark brown",
        price:"80$",
        brandname:"lacoste",
        category:"wallet",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXxnDkkmzXWchm_2Kaz52T2kIaSi9MS3CNg&s"
     },]


     let main=document.getElementById('container')
     data.map(function(product){
        main.innerHTML+=`<div class="card my-4" style="width: 18rem;">
        <img src=${product.img} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        ${product.color}
        ${product.price}
         <p class="card-text">${product.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
})

let container=document.getElementById('container')
function purse(){
    container.innerHTML=''
 let filterdata=data.filter(function(e){
return e.category=='purse'
})
filterdata.map(function(product){
container.innerHTML+=`<div class="card my-4" style="width: 18rem;">
  <img src=${product.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    ${product.color}
    <p class="card-text">${product.brandname}</p>
    <a href="#" class="btn btn-primary"> ${product.price}</a>
  </div>
</div>`
      
})
}

let hand=document.getElementById('container')
function wallet(){
    container.innerHTML=''
 let filterdata=data.filter(function(e){
return e.category=='wallet'
})
filterdata.map(function(product){
container.innerHTML+=`<div class="card my-4" style="width: 18rem;">
  <img src=${product.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    ${product.color}
    <p class="card-text">${product.brandname}</p>
    <a href="#" class="btn btn-primary"> ${product.price}</a>
  </div>
</div>`
      
})
}

    
        
     


            
                
        
     