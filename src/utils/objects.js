
// Takes an object and an object representing valid fields and their types
// returns whether or not the obj fields are the correct types
export function compareObjectTypes(obj, typeObj) {
  // Its not an object
  if (typeof obj !== 'object') return typeof obj === typeObj
  
  // It is an object
  const keys = Object.keys(obj)
  return keys.every(key => {
    // Key doesn't exist on typeObj
    if (!typeObj[key]) return false
    
    // Key does exist
    return compareObjectTypes(obj[key], typeObj[key])
  })
}