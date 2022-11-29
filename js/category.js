//Declaration
let ddlcategory = document.getElementById('ddlcategory');
let category = document.getElementById('category');
let saveCategory = document.getElementById('saveCategory');


let Url = 'https://localhost:7255/api/Categories';
// Save Category
function SaveCategory() {
    
    let objCategory = {
        name: category.value
    };

    let data = Jason.stringify(objCategory);

$.ajax({
    url:`${Url}/Save`,
    method:'post',
    contentType:'application/json',
    data:data,
    cache:false,
    success:function(data){
     alert('success');
    }
});
    /*
     Restc();
     ShowCategory();
     ShowTableCategory();
     CountCategory();
     */
}















saveCategory.addEventListener('click',SaveCategory);