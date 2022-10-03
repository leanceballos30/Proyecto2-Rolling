//*creamos una clase
class User{
    constructor(){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}
//*creamos las variables de los inputs del formularios de registros*//
let nombre = document.getElementById(`inputNombre`);
let email = document.getElementById(`inputEmailRegistro`);
let password = document.getElementById(`inputPasswordRegistro`);
let formulario_Registro = document.getElementById(`RegistrarseForm`);
console.log(formulario_Registro);
//* creamos una variable para guardar en localStogare, o mostrar array vacio*//
let datosUsuraios = JSON.parse(localStorage.getItem(`datosUsuraios`))||[];


//*creamos eventos para el boton registar*//
const handleSubmit=(e)=>{
    //*evita actualizar pagina
    e.preventDefault();
 

    //*creamos funciones para validar los campos del registro*//


    //* creamos un nuevo usuario:
    const nuevoUsuario = new User(nombre.value,email.value,password.value);
    //*hago un push con los datos de los usuarios:
    console.log(nuevoUsuario);
    //*console log para ver lo que tenemos 
    datosUsuraios.push(nuevoUsuario)
    //*consulto que hay en el array
   console.log(datosUsuraios);
    //*mando los datos a local storage usando metoso stringify
    localStorage.setItem(`datosUsuarios`,JSON.stringify(datosUsuraios))
    //*utilizo window.location.reload para actualizar la pagina
    window.location.reload()
    //*reseteo formulario para que puedan completar siguiente producto
    RegistrarseForm.reset()
    /*creamos un evento para que el formulario escuche*/
}
/*creamos un evento para que el formulario escuche*/
RegistrarseForm.addEventListener(`submit`,handleSubmit);
