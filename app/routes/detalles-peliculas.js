import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let id = params.id;
    let pelicula = {
      id: null,
      id:null
    };

    if(id == 1){
        pelicula = {
          id: 1,
          nombre: "Coco",
          genero: "animada"
        };
    }else{

        pelicula = {
          id: 2,
          nombre: "It",
          genero: "Terror"
        }
    }

    // console.log(pelicula);
    }
});
