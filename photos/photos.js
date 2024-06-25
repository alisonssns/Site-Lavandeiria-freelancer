let slides = document.querySelector('.slides');
let all = document.querySelectorAll('.slide');
let radiosForm = document.querySelector('.radios')
let inputs = [];

for (let i = 0; i < all.length; i++) {
    var novoInputRadio = document.createElement('div');
    novoInputRadio.className = 'radio';
    inputs.push(novoInputRadio);
    radiosForm.appendChild(novoInputRadio);
}

slides.style.width = `${all.length * 50}%`;
if(all.length%2 == 0){
    let Firstmove = ((100 / all.length) * ((all.length / 2)));
    slides.style.transform = `translateX(-${Firstmove}%)`;
    inputs[all.length/2].checked = true;
    all[all.length/2].style.transform  = `scale(1.1)`
    all[all.length/2].style.opacity  = `1`;
    inputs[(all.length/2)].style.background = "linear-gradient(to right bottom, hsl(27, 65%, 55%), hsl(0, 97%, 62%))"
}else{
    let Firstmove = ((100 / all.length) * ((all.length / 2) - 0.5));
    slides.style.transform = `translateX(-${Firstmove}%)`;
    inputs[(all.length/2)-0.5].checked = true;
    all[(all.length/2)-0.5].style.transform  = `scale(1.1)`;
    all[(all.length/2)-0.5].style.opacity  = `1`;
    inputs[(all.length/2)-0.5].style.background = "linear-gradient(to right bottom, hsl(27, 65%, 55%), hsl(0, 97%, 62%))"
}
slides.style.left = `${((all.length-1) / 2) * 50}%`

function move(position) {
    let move = (position * (100 / all.length));
    slides.style.transform = `translateX(-${move}%)`;
    inputs[position].style.background = "linear-gradient(to right bottom, hsl(27, 65%, 55%), hsl(0, 97%, 62%))"

}

all.forEach(function (slide, index) {
    slide.addEventListener('click', function () {
        move(index);
        all[index].style.transform  = `scale(1.1)`
        all[index].style.opacity  = `1`;
        for(let i = 0; i < all.length; i++){
            if(i != index){
                inputs[i].style.background = "";
                all[i].style.transform  = `scale(0.8)`;
                all[i].style.opacity  = `0.5`;
            }
        }
    });
});

inputs.forEach(function (input, index) {
    input.addEventListener('click', function () {
        move(index);
        all[index].style.transform  = `scale(1.1)`
        all[index].style.opacity  = `1`;
        for(let i = 0; i < all.length; i++){
            if(i != index){
                inputs[i].style.background = "";
                all[i].style.transform  = `scale(0.8)`;
                all[i].style.opacity  = `0.5`;
            }
        }
    });
});