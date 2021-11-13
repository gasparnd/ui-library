export const stylesRender = (stylesObject: any) => {
  const properties = Object.keys(stylesObject);
  return properties.map((key) => `${key}: ${stylesObject[key]}`).join(";");
};
