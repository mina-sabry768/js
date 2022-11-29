
//Declaration

let product = document.getElementById('product');
let quntity = document.getElementById('quntity');
let price = document.getElementById('price');
let descount = document.getElementById('descount');
let total = document.getElementById('total');


let categoryArray;
let ProductArray;

let btnStatus = "Create"; 
let proID;

localStorage.Category != null ? categoryArray = JSON.parse(localStorage.Category) : categoryArray = [];
localStorage.Product != null ? ProductArray = JSON.parse(localStorage.Product) : ProductArray = [];
/*
// Save Category
SaveCategory = () => {
    
    let objCategory = {
        category: category.value
    };

    categoryArray.push(objCategory); 
     localStorage.setItem('Category', JSON.stringify(categoryArray));
     Restc();
     ShowCategory();
     ShowTableCategory();
     CountCategory();
}
*/
// Rest Category

function Restc() {
    category.value = '';
}

// Show data
function ShowCategory() {
    let item = '';
    item += `<option value="">Select Category......</option>`
    for(let i = 0; i < categoryArray.length; i++){

        item += `<option value="${i}">${categoryArray[i].category}</option>`;

    }
    ddlcategory.innerHTML = item;
}

// Show Table Category
 function ShowTableCategory() {

    let Table = '';

    for(let i = 0; i < categoryArray.length; i++){

            Table += `
            <tr>
            <td>${i}</td>
            <td>${categoryArray[i].category}</td>
            <td>
                <button class="btn btn-danger" onclick="DeleteCategory(${i})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
        `;

        }

        document.getElementById('bodyCate').innerHTML = Table;

 }

// Delete Category

function DeleteCategory(id) {


    if(confirm('Are you Sur Want Delete This ....?') == true){
        categoryArray.splice(id,1);
        localStorage.Category = JSON.stringify(categoryArray);
        ShowTableCategory();
        ShowCategory();
        CountCategory();
    }
    

}

// Count Category
function CountCategory() {

        document.getElementById('countCategory').innerHTML = `Total Category (${categoryArray.length})`;


}

// Validation category

function ValidationCAtegory() {

    let valid = true;

    if(category.value == ''){
        alert('Enter Name Category....');
        valid = false;
    }
    else{
        SaveCategory();
        valid =true;
    }

    return valid;

}

//////////////////////////////////////

// get Total
function GetTotal(){

    if(price.value != 0){
        let Totla = (quntity.value * price.value) - descount.value ;
        total.value = Totla;
        total.className.replace = "form-control bg-danger text-center";
        total.className = "form-control bg-success text-center";
    }else{
        total.value= 0;
        total.className.replace = "form-control bg-success text-center";
        total.className = "form-control bg-danger text-center";
    }
}


// Save Product
function SaveProduct(){
    let = NewProduct = {
        ddlcategory : ddlcategory.options[ddlcategory.selectedIndex].text,
        product : product.value,
        quntity : quntity.value,
        price : price.value ,
        descount : descount.value,
        total : total.value
    };
    if(btnStatus === "Create"){
        ProductArray.push(NewProduct);
    }else{
        ProductArray[proID] = NewProduct;
        document.getElementById('btnSave').className.replace ='btn btn-info w-25' ;
        document.getElementById('btnSave').className = 'btn btn-success w-25';
    }
    localStorage.setItem("Product", JSON.stringify(ProductArray)); 
    Rest();
    ShowTableProduct();
    CountProduct();
    GetTotal();
}

// Rest Data
function Rest(){
    ddlcategory.options[ddlcategory.selectedIndex].text ="Select Category ..........";
    product.value ='';
    quntity.value = 0;
    price.value = 0;
    descount.value = 0;
    total.value = 0;
    document.getElementById('btnSave').className.replace ='btn btn-info w-25' ;
    document.getElementById('btnSave').className = 'btn btn-success w-25';
}

// Show Table 

function ShowTableProduct(){
    let TablePro = '';

    for(let x = 0; x < ProductArray.length; x++){
        TablePro += `
        <tr>
            <td>${x}</td>
            <td>${ProductArray[x].ddlcategory}</td>
            <td>${ProductArray[x].product}</td>
            <td>${ProductArray[x].quntity}</td>
            <td>${ProductArray[x].price}</td>
            <td>${ProductArray[x].descount}</td>
            <td>${ProductArray[x].total}</td>
            <td>
                <button class="btn btn-info" onclick="EditProduct(${x})">
                        <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-danger" onclick="DeleteProduct(${x})">
                        <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }

    document.getElementById('tablePro').innerHTML = TablePro;

}

// Delete Product
function DeleteProduct(id){

    if(confirm('Are You Sur Deleted....') == true) {
    ProductArray.splice(id,1);
    localStorage.Product = JSON.stringify(ProductArray);
    ShowTableProduct();
    CountProduct();
    }
}

// Edit Product 

function EditProduct(id){
    ddlcategory.options[ddlcategory.selectedIndex].text = ProductArray[id].ddlcategory;
    product.value =ProductArray[id].product;
    quntity.value = ProductArray[id].quntity;
    price.value = ProductArray[id].price;
    descount.value = ProductArray[id].descount;
    total.value = ProductArray[id].total;

    btnStatus = "Edit";
    proID = id;

    document.getElementById('btnSave').className.replace = 'btn btn-success w-25';
    document.getElementById('btnSave').className = 'btn btn-info w-25';

}

// Count Product
function CountProduct(){
    document.getElementById('countpro').innerHTML = `-Total Pro(${ProductArray.length})`;
}

// Validation Producat
function ValidationProduct(){
    let lbcate = document.getElementById('lbcate');
    let lbPro = document.getElementById('lbPro');
    let lbquntity = document.getElementById('lbquntity');
    let lbPrice = document.getElementById('lbPrice');

    let valid = true;

    if(ddlcategory.options[ddlcategory.selectedIndex].text == "Select Category......"){

        lbcate.innerHTML = 'Category : * [Required]';
        lbcate.style.color = 'red';
        valid = false;
    }else{
        lbcate.innerHTML = 'Category : *';
        lbcate.style.color = 'white';
        valid = true;
    }



    if(product.value == ''){
        lbPro.innerHTML = 'Product Name : * [Required]';
        lbPro.style.color = 'red';
        valid = false;
    }else{
        lbPro.innerHTML = 'Product Name : *';
        lbPro.style.color = 'white';
        valid = true;
    }


    if(quntity.value == 0){
        lbquntity.innerHTML = 'Quntity : *[Required]';
        lbquntity.style.color = 'red';
        valid = false;
    }else{
        lbquntity.innerHTML = 'Quntity : *';
        lbquntity.style.color = 'white';
        valid = true;
    }

    if(price.value == 0){
        lbPrice.innerHTML = 'Price : * [Required]';
        lbPrice.style.color = 'red';
        valid = false;
    }else{
        lbPrice.innerHTML = 'Price : *';
        lbPrice.style.color = 'white';
        valid = true;
       
    }    

    if(ddlcategory.options[ddlcategory.selectedIndex].text != '' && product.value != '' && quntity.value != 0 && price.value != 0){
        SaveProduct();
    }

    return valid;
}

$(document).ready( function () {
    ShowCategory();
    ShowTableCategory();
    CountCategory();
    ShowTableProduct();
    CountProduct();
    $('#tablePro').DataTable();
} );