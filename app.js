import { fetchData } from "./utils/httpReq.js"
const products=document.querySelector(".products")

async function render(){
    const productData=await fetchData()
    productData.map(item=>{
        const product=new Product(item.name,item.image,item.price,item.alt)
        const data=document.createElement("div")
        data.classList="product"
        data.innerHTML=`
          <img class="product-image" src="${product.image}" alt="${product.alt}">
            <div class="products-data">
                <h4 class="product-name">${product.name}</h4>
                <span class="price">$ ${product.price}</span>
                <span class="add">+</span>
            `
            products.append(data)
    })
}

class Product{
    constructor(name,image,price,alt){
        this.name=name;
        this.image=image;
        this.price=price;
        this.alt=alt
    }
}

document.addEventListener("DOMContentLoaded",render)