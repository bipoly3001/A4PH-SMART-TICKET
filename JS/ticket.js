// function for section one button
function connect(){
    const sectionThree = document.getElementById('section-three');     
    
}

function getConvert (id){
    const price = document.getElementById(id).innerText;
    const covertvalue = parseInt(price);
    return covertvalue;  
}

const allSeat = document.getElementsByClassName('seat');
for (seatnum of allSeat) {
    seatnum.addEventListener('click', function (event){
        console.log(event.target.parentNode.childrenNodes)
    })
    
    
    }
    