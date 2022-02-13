const getDb = require("../mongodb");
let db = null;
class Pacientes {
  collection = null;
  constructor() {
    getDb()
      .then((database) => {
        db = database;
        collection = db.collection("Pacientes");
        if (process.env.MIGRATE === "true") {
          //por si se ocupa algo
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  async new(nombres, apellidos, identidad, telefono, correo) {

      const newPaciente = {
        nombres,
        apellidos,
        identidad,
        telefono,
        correo,
      };
      const rslt = await this.collection.insertOne(newPaciente);
      return rslt;
    
  } //end new

  async getAll() {
    return new Promise((accept, reject) => {});
  } //end getAll

  async getById(id) {
    return new Promise((accept, reject) => {});
  } //end getById

  async updateOne(id, nombres, apellidos, identidad, telefono, correo) {
    return new Promise((accept, reject) => {}); //end Promise
  } //end update

  async deleteOne(id) {
    return new Promise((accept, reject) => {}); //end Promise
  } //end DELETE
} //end class pacientes

module.exports = Pacientes;
