function Holiday(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = new Date(date);
}

const HolidayPlanner = {
    holidays: [],

    // Function to add a holiday
    addHoliday: function(holiday) {
        this.holidays.push(holiday);
        console.log(`Holiday "${holiday.title}" scheduled for ${holiday.date.toDateString()}`);
    },

    // Function to remove a holiday
    removeHoliday: function(title) {
        const index = this.holidays.findIndex(holiday => holiday.title === title);
        if (index !== -1) {
            this.holidays.splice(index, 1);
            console.log(`Holiday "${title}" removed.`);
        } else {
            console.log(`Holiday "${title}" not found.`);
        }
    },

    // Function to find holidays
    findHolidays: function() {
        console.log(`Holidays:`);
        this.holidays.forEach(holiday => console.log(`${holiday.title} - ${holiday.description} - ${holiday.date.toDateString()}`));
    },

    // Function to find upcoming holidays
    findUpcomingHolidays: function() {
        const currentDate = new Date();
        const upcomingWeek = new Date(currentDate);
        upcomingWeek.setDate(currentDate.getDate() + 7);
        const upcomingHolidays = this.holidays.filter(holiday => holiday.date <= upcomingWeek);
        console.log("Upcoming Holidays for the Next Week:");
        upcomingHolidays.forEach(holiday => console.log(`${holiday.title} - ${holiday.description} (${holiday.date.toDateString()})`));
    },

    // Function to find previous holidays
    findPreviousHolidays: function() {
        const currentDate = new Date();
        const previousHolidays = this.holidays.filter(holiday => holiday.date < currentDate);
        console.log("Previous Holidays:");
        previousHolidays.forEach(holiday => console.log(`${holiday.title} - ${holiday.description} (${holiday.date.toDateString()})`));
    },

    // Function to find previous holidays
    findNextHolidays: function() {
        const currentDate = new Date();
        const previousHolidays = this.holidays.filter(holiday => holiday.date >= currentDate);
        console.log("Next Holidays:");
        previousHolidays.forEach(holiday => console.log(`${holiday.title} - ${holiday.description} (${holiday.date.toDateString()})`));
    }
};

// Add holidays
HolidayPlanner.addHoliday(new Holiday("Christmas", "Festive celebration", "2024-12-25"));
HolidayPlanner.addHoliday(new Holiday("New Year", "Welcoming the new year", "2025-01-01"));
HolidayPlanner.addHoliday(new Holiday("Independence Day", "National holiday", "2025-07-04"));

// Remove a holiday
HolidayPlanner.removeHoliday("New Year");

// Find holidays by date
HolidayPlanner.findHolidays();

// Find upcoming holidays
HolidayPlanner.findUpcomingHolidays();

// Find previous holidays
HolidayPlanner.findPreviousHolidays();
HolidayPlanner.findNextHolidays();
