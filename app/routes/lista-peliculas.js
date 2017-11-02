import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return this.store.findAll('pelicula');
    return [
      {
        id: 1,
        nombre: "Coco",
        genero: "animada"
      },
      {
        id: 2,
        nombre: "It",
        genero: "Terror"
      }
    ]
  }
});
