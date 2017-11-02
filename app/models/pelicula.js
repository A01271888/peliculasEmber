import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.atrr('string'),
  genero: DS.attr('string'),
  año: DS.atrr('string'),

  proyecciones: DS.hasMany('proyeccion')
});
