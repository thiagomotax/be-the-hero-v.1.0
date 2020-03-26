
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //chave primaria autoincremento
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //chave estrangeira

        table.foreign('ong_id').references('id').inTable('ongs'); //fazendo a ligação
      });
};

exports.down = function(knex) {
  return knex.schena.dropTable('incidents');
};
