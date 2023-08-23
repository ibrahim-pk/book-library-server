const pick = <T extends object, k extends keyof T>(
  obj: T, //page
  keys: k[] //["page","limit","sortBy","sortOrder"]
): Partial<T> => {
  const finalObj: Partial<T> = {
    //page:1
  };
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

export default pick;
