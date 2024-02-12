function reveal() {
  const wedgeHead = document.querySelectorAll('.wedge-h1');
  const speed = 300;

  wedgeHead.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-target');
        const data = +counter.innerText;
      
        const time = value / speed;
      if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 70);
          }else{
            counter.innerText = value;
          }
    }
  for (var i = 0; i < wedgeHead.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = wedgeHead[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        animate();
      } else {
        
      }
    }
  });
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

const department = ['Accident and emergency (A&E)', 'Breast Screening', 'Burn Center (Burn Unit or Burns Unit)',
'Cardiology', 'Coronary Care Unit (CCU)', 'Critical Care',
'Gastroenterology', 'General Surgery', 'Gynecology',
'Hematology (Blood test)', 'Intensive Care Unit (ICU)', 'Infection Control',
'Maternity', 'Neonatal', 'Neurology', 'Oncology (Tumor treatment)', 'Orthopedics', 'Ear, Nose and Throat (ENT)', 
'Physiotherapy', 'Radiology(X-ray)', 'Renal (Kidney & Dialysis)', 'Pediatrics', 'Psychiatry', 'Dentist', 'Dermatology',
'Urology (Urinary tract)', 'Rehabilitation'];

const opt = document.querySelector('.options');

department.forEach(dep=>{
  let deprt = `<option value = '${dep}'> ${dep} </option>`;
  opt.innerHTML += deprt;
})
// let filteredUsers = [];


const sForm = document.querySelector('.search-button');
const sOpt = document.querySelector('.search-result');
const modalB = document.querySelector('.modal-body');

sForm.addEventListener('click', ()=>{
  let optv = opt.value;
  sOpt.style.display = 'block';

  fetch("https://sha-api.onrender.com/facility")
    .then(response => response.json()) 
    .then(data => {
      let filteredUsers = data.filter((dat) => {
        for (let i = 0; i < dat.department.length; i++) {
          if(dat.department[i] === optv)
            return dat.department;
        }
  });
    filteredUsers.forEach((fusers, index) =>{
      let fuser = `
          <div class="search-opt" key="${index}">
            <h2>${fusers.organization}</h2>
            <h4>${fusers.city}, ${fusers.state}, ${fusers.country}.</h4>
            <button>Book</button>
          </div>
      `;
      modalB.innerHTML += fuser;
    })
    })
})

function closeUp(){
  sOpt.style.display = 'none';

}