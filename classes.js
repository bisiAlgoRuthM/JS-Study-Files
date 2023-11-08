class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
  
      this._remainingVacationDays = 20
    }
    get name() {
      return this._name
    }
    get department(){
      return this._department
    }
    get remainingVacationDays(){
      return this._remainingVacationDays
    }
    takeVacationDays(daysOff){
      return this._remainingVacationDays -= daysOff
    }
  
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

  class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword(){
      return Math.floor(Math.random() * 10000)
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);

class Doctor extends HospitalEmployee{
  constuctor(name){
    this._name = name
  }
}