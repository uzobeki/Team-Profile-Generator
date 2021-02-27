 const Employee = require('../lib/Employee');

describe('Employee', () => {
    it("should creat a new employee instance (Judith)", () => {
        const judith = "Judith" ;
        
        const newEm = new Employee(judith);

        expect(newEm.name).toEqual(judith); 
    });

    it("should accept constructor argument (id)", () => {
        const empId = 202;
        const newEm = new Employee("Judith",empId);

        expect(newEm.id).toEqual(empId);
    });

    it("should accept constructor argument (email)", () => {
        const empEmail = "test@abc.com";
        const newEm = new Employee("Judith", 202, empEmail);

        expect(newEm.email).toEqual(empEmail);
    });

    it("getRole() should produce the name of a new employee", () => {
        const role = "Employee";
        const newEm = new Employee("Judith", 202, "test@abc.com");

        expect(newEm.getRole()).toEqual(role);
    })

    it("getName() should produce the name of a new employee", () => {
        const judith = "Judith";
        const newEm = new Employee(judith);

        expect(newEm.getName()).toEqual(judith);
    });

    it("getId() should produce the id of a new employee", () => {
        const empId = 202;
        const newEm = new Employee("Judith", empId);

        expect(newEm.getId()).toEqual(empId);
    });

    it("getEmail() should produce the email of a new employee", () => {
        const empEmail = "test@abc.com";
        const newEm = new Employee("Judith", 202, empEmail);

        expect(newEm.getEmail()).toEqual(empEmail);
    });


});