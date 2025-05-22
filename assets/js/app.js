const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Se asignaron correctamente añadiendo los "#" para id
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');
//funcion async para hacer funcionar el await
async function displayUser(username) {
  //creacion del trycatch para manejar errores
  try{
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    //if para verificar que la respuesta fue exitosa
    if(!response.ok) throw new Error("Error!");
    //constante para respuesta en formato json
    const data = await response.json();
    //se imprime en la consola
    console.log(data);
    //cambios en las comillas a backticks
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err){
    //llama el error en dudo caso
  handleError(err);
  }
}
//funcion del error que se mandara en caso de que haya
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`
}
//se usa para llamar la funcion y traer los datos del parametro indicado
displayUser('stolinski');
