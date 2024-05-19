function calculateAge(birthDate) {
    const birthYear = parseInt(birthDate.split("-")[0]);
    const birthMonth = parseInt(birthDate.split("-")[1]);
    const birthDay = parseInt(birthDate.split("-")[2]);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 to convert from 0-indexed to 1-indexed month
    const currentDay = currentDate.getDate();

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    // Adjust for negative ageMonths or ageDays
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        ageMonths--;
        const prevMonthLastDay = new Date(currentYear, currentMonth - 1, 0).getDate(); // Get the last day of the previous month
        ageDays += prevMonthLastDay;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
}

// Test the calculateAge function
const birthDate = prompt('Insert birth date: ', '2024-05-07');
const age = calculateAge(birthDate);
alert(`Age: ${age.years} years, ${age.months} months, ${age.days} days`);
