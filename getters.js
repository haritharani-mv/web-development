var person = {
  firstName: "John",
  lastName : "Doe",
  language : "en",
  get lang() {
    return this.language;
  }
};
document.getElementById("demo").innerHTML = person.lang;