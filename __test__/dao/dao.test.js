const Pacientes = require("../../dao/pacientes/pacientes.model");

describe("Testing Pacientes Model", () => {
  let pacientesModel = undefined;
  beforeAll(() => {
    return (pacientesModel = new Pacientes());
  }); //end beforeAll

  it("pacientesModel esta definido", () => {
    return expect(pacientesModel).toBeDefined();
  }); //end it pacientesModel
}); //end describe
