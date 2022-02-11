const Pacientes = require("../../dao/pacientes/pacientes.model");

describe("Testing Pacientes Model", () => {
  let pacientesModel = undefined;
  let lastId = 0;

  beforeAll((done) => {
    pacientesModel = new Pacientes();
    setTimeout(() => {
      done();
    }, 3000);
  });

  it("pacientesModel Esta Definido", () => {
    return expect(pacientesModel).toBeDefined();
  });

  it("getAll Devuelve un array", async () => {
    const arrPacientes = await pacientesModel.getAll();
    return expect(arrPacientes.length).toBeGreaterThanOrEqual(0);
  });

  it("new guardando un dato", async () => {
    const resultado = await pacientesModel.new(
      "Test de prueba",
      "Fulano",
      "00001",
      "1515",
      "user@gmai.com"
    );
    lastId = resultado;
    return expect(resultado).toBeDefined();
  });

  it("obtener un dato", async () => {
    const resultado = await pacientesModel.getById(lastId);
    console.log(resultado);
    return expect(resultado).toBeDefined();
  });


  it("eliminar un dato", async () => {
    const resultado = await pacientesModel.deleteOne(lastId);
    console.log(resultado);
    return expect(resultado).toBeDefined();
  });
}); //end describe
