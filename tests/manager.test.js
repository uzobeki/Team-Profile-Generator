const Manager = require('../lib/Manager')

describe('Manager', () => {
    it("should accept a constructor argument (officeNumber)", () => {
        const number = 5551110000;
        const newEm = new Manager("Uzo", 678, "test@abc.com", number);

        expect(newEm.officeNumber).toEqual(number);
    });

    it("getRole() should overwite role as Manager", () => {
        const role = "Manager";
        const newEm = new Manager("Uzo", 678, "test@abc.com", 5551110000);

        expect(newEm.getRole()).toEqual(role);
    });

    it("getNumber() should produce an office number for the Manager", () => {
        const number = 5551110000;
        const newEm = new Manager("Uzo", 678, "test@abc.com", number);

        expect(newEm.getNumber()).toEqual(number);
    });
})