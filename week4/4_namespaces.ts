namespace CollegeSystem {

    const studentIdLength = 8;

    export function validateStudentId(id: string): boolean {
        const idRegex = /^SVEC\d{4}$/;
        return idRegex.test(id);
    }

    export function validateEmail(email: string): boolean {
        return email.endsWith("@svecw.edu.in");
    }

    export namespace Fees {

        export function calculateLibraryFine(daysLate: number): number {
            return daysLate * 10;
        }

        export function calculateSemesterFee(baseFee: number): number {
            return baseFee + (baseFee * 0.05);
        }

    }
}

// -------- Usage --------

const studentId = "SVEC1234";
const studentEmail = "monika@svecw.edu.in";

console.log(`Student ID Valid: ${CollegeSystem.validateStudentId(studentId)}`);
console.log(`College Email Valid: ${CollegeSystem.validateEmail(studentEmail)}`);

const fine = CollegeSystem.Fees.calculateLibraryFine(6);
console.log(`Library Fine: ₹${fine}`);

const semesterFee = CollegeSystem.Fees.calculateSemesterFee(45000);
console.log(`Semester Fee with Processing Fee: ₹${semesterFee}`);