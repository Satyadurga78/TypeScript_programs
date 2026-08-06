class Library {
    public static readonly libraryName: string = "SVECW Central Library";
    public static totalMembers: number = 0;

    public readonly memberId: string;
    public memberName: string;

    constructor(name: string, id: string) {
        this.memberName = name;
        this.memberId = id;
        Library.totalMembers++;
    }

    public static showLibraryRules(): void {
        console.log(`Welcome to ${this.libraryName}. Please return books on time.`);
    }

    public displayMember(): void {
        console.log(`Member Name: ${this.memberName}`);
        console.log(`Member ID: ${this.memberId}`);
    }
}

console.log(Library.libraryName);
Library.showLibraryRules();

const member1 = new Library("Harini", "LIB101");
const member2 = new Library("Keerthana", "LIB102");

console.log(member1.memberId);
console.log(`Total Members: ${Library.totalMembers}`);