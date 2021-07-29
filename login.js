const txtEmail = document.querySelector('#emailinput');
const txtPassword = document.querySelector('#passwordinput');
const CreateButton = document.querySelector('#createbtn');


const auth = firebase.auth();
const db = firebase.firestore();

CreateButton.addEventListener('click', e =>{
    const email = txtEmail.value;
    const password = txtPassword.value;

    const promise = auth.signInWithEmailAndPassword(email,password);

   
})
auth.onAuthStateChanged(async user =>{
    if(user){
        
            alert('Loged In Succesfully ')
            window.location.href = './mainhome.html';
          
    }else{
        console.log('NO');
    }
});