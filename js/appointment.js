
const department = ['Accident and emergency (A&E)', 'Breast Screening', 'Burn Center (Burn Unit or Burns Unit)',
'Cardiology', 'Coronary Care Unit (CCU)', 'Critical Care',
'Gastroenterology', 'General Surgery', 'Gynecology',
'Hematology (Blood test)', 'Intensive Care Unit (ICU)', 'Infection Control',
'Maternity', 'Neonatal', 'Neurology', 'Oncology (Tumor treatment)', 'Orthopedics', 'Ear, Nose and Throat (ENT)', 
'Physiotherapy', 'Radiology(X-ray)', 'Renal (Kidney & Dialysis)', 'Pediatrics', 'Psychiatry', 'Dentist', 'Dermatology',
'Urology (Urinary tract)', 'Rehabilitation'];

let depSlot = document.querySelector('.dep1');
let depCrad = document.querySelector('.dep2');

for (let i = 0; i < department.length; i++) {


    if(i > (department.length / 2)){
       let inCrad = `<input type='checkbox' name='department' value='${department[i]}' class='dep'> ${department[i]} <br>`; 
       depCrad.innerHTML += inCrad;

    }else{
        
    let inDep = `<input type='checkbox' name='department' value='${department[i]}' class='dep'> ${department[i]} <br>`;
    depSlot.innerHTML += inDep;
    }
    
}
let dep = [];
const depr = document.querySelectorAll('.dep');
    depr.forEach(depp=>{
        depp.addEventListener('click', ()=>{
            let deprv = depp.value ;
            dep.push(deprv);
        })
    })

const msg = document.querySelector('.alert');
const msgInner = document.getElementById('msg');
const form = document.querySelector('.register');

form.addEventListener('submit', e=>{
    e.preventDefault();
    
  let dat = new FormData(form);
  let fot = Object.fromEntries(dat);
  fot.department = dep;

    // let op =JSON.stringify(fot);
    fetch("https://sha-api.onrender.com/facility", {
    'method': "post",
    'headers': {
      'Accept': "application/json",
      'Content-Type': "application/json"
    },
    'body': JSON.stringify(fot)
  }).then(res => {
    if (res.status === 201) {
        msgInner.innerText = 'Added Successfully!';
        msg.style.display = 'block';
    }
  })["catch"](err => {
        msgInner.innerText = 'Problem Registering Information';
      msg.style.display = 'block';
      console.log(err);
  });
})