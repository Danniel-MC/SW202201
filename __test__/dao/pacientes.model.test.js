const Pacientes = require("../../dao/pacientes/pacientes.model");

describe("Testing Pacientes Model", () => {
  let pacientesModel = undefined;
  beforeAll(() => {
    return (pacientesModel = new Pacientes());
  });

  it("pacientesModel Esta Definido", () => {
    return expect(pacientesModel).toBeDefined();
  });
}); //end describe
