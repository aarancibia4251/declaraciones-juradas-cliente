export class Constants {
  public static TYPES_DOCS = [
    {
      id: 1,
      name: 'Cod. Contri'
    },
    {
      id: 2,
      name: 'Nombre Contri'
    },
    {
      id: 3,
      name: 'Documento'
    },
    {
      id: 4,
      name: 'Codigo DDJJ'
    },
    {
      id: 5,
      name: 'Dirección Predial'
    },
  ];

  public static TIP_PERSON = [
    {
      id: 1,
      name: 'Persona Natural'
    },
    {
      id: 2,
      name: 'Persona Juridica'
    },
    {
      id: 3,
      name: 'Menor de edad'
    },
    {
      id: 4,
      name: 'Sociedad conyugal'
    },
  ];

  public static REGISTER_DJ_STEPS = {
    TAXPAYER_REGISTER: 0,
    MOTIVE_LOCATION_ESTATE: 1,
    TRANSFERENCE: 2,
    CONDITION_ESTATE: 3,
    DOCUMENTS_EXONERATION: 4,
    SELF_ASSESSMENT: 5,
    SUMMARY: 6
  };
}
