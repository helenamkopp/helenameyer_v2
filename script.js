const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.container');




for(let container of cards) {
    console.log('1')
    container.addEventListener("click", 
    function(){
        let food = container.querySelector('.food').innerText;
        console.log('2')
        let author = container.querySelector('.author').innerText;
        console.log('3')
        const imageId = container.getAttribute("id")
        console.log('4')
        
        modalOverlay.classList.add('active')
        console.log('5')
        modalOverlay.querySelector("img").src = `${imageId}`;
        console.log('6')
        modalOverlay.querySelector("p.food").innerText = `${food}`;
        console.log('7')
        modalOverlay.querySelector("p.author").innerText = `${author}`;
    

    })
}

const closeModal = document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")

})