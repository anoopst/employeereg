
export class Employee {   

    constructor(
        public firstName = '',
        public lastName = '',
        public gender = '',
        public dob?: Date,
        public department = '')
    {}
}