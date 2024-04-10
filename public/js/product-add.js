console.log('product-add success!!')

// VISTA PREVIA DE IMÁGENES

const mainImage = document.getElementById('mainImage');
const images = document.getElementById('images');

const boxMainImage = document.getElementById('box-mainImage')
const boxImages = document.getElementById('box-images')

mainImage.addEventListener('change', (e) => {
    boxMainImage.innerHTML = null;
    const img = document.createElement('img')
    img.setAttribute('src', URL.createObjectURL(e.target.files[0]));
    img.classList.add('img-fluid')
    boxMainImage.appendChild(img)

});

images.addEventListener('change', (e) => {
    boxImages.innerHTML = null;
    for (let i = 0; i < e.target.files.length; i++) {
        const img = document.createElement('img')
    img.setAttribute('src', URL.createObjectURL(e.target.files[i]));
    img.style.width = "150px"
    boxImages.appendChild(img)
        
    }
    
   

});




//VALIDACIONES FRONT