
export class Employee {
  personId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  salutationId: number;
  dob: Date;
  genderId: number;
  maritalStatusId: number;
  marriageDate: Date;
  bloodGroupId: number;
  status: string;
  address: EmpAddress;
}

export class EmpAddress {
  addressType: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
}
