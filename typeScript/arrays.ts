const student = ["Muskan", "John", "Jane"];
const dates = [new Date(), new Date()];

const cars = [["ford"], ["toyota"], ["honda"]]; //string[][]

// Help with inference when extracting values
const student1 = student[0];

// Prevent incompatible values
student.push(1);

// Help with 'map'
student.map((name: string): string => {
    return name.toUpperCase();
})

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());