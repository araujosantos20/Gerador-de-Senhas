export default function generatorPassword() {
  let password: string = "";
  let characters: string = "ABCDEFGHIJKabcdefghijk1234567890!@#$";
  let passwordLength = 8;

  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}
