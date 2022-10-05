function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Medical School: ', medicalSchool('Cody Martin'));
console.log('Law School: ', lawSchool('Cody Martin'));
