function crearUsuario() {
    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
    // El valor de cada propiedad la recibirá por parámetro.
    // Además, esta clase debe tener un método llamado "saludar".
    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
    // Retornar la clase.
    // Tu código:
    class Usuario{
       constructor(usuario,nombre,email,passsword){
          this.usuario=usuario;
          this.nombre=nombre;
          this.email=email;
          this.passsword=passsword;
       };
       saludar(){
          return "Hola, mi nombre es " + this.nombre;
       };
    };
    var name=new Usuario.nombre[carlos];
    return Usuario;
 }
 