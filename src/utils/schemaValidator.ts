export const getErrorMessage = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  // console.log(propertyPath);
  const properties = propertyPath.split(".");
  // console.log(properties);
  let value = obj;
  

  for (let prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }
  return value.message;
};
