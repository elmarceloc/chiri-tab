// https://stackoverflow.com/questions/12251325/javascript-date-to-calculate-age-work-by-the-day-months-years
class DateInterval {
    constructor(start, end) { // two Date instances
        if (start > end) [start, end] = [end, start]; // swap
        this.days = end.getDate() - start.getDate();
        this.months = end.getMonth() - start.getMonth();
        this.years = end.getFullYear() - start.getFullYear();
        if (this.days < 0) {
            // Add the number of days that are left in the month of the start date
            this.days += (new Date(start.getFullYear(), start.getMonth() + 1, 0)).getDate();
            this.months--;
        }
        if (this.months < 0) {
            this.months += 12;
            this.years--;
        }
    }
    toString() { // spanish adaptation
        const arr = ["months","days","years"].map(p => 
            this[p] && (this[p] + " " + p.slice(0, this[p] > 1 ? undefined : -1))
        ).filter(Boolean);
        if (!arr.length) return "0 dias";    
        const last = arr.pop();
        var englishData = arr.length ? [arr.join(", "), last].join(" y ") : last;
        return englishData
            .replace('day','día')
            .replace('month','mes')
            .replace('year','año')
            .replace('days','días')
            .replace('months','meses')
            .replace('years','años')
            .replace('years','años') 
    }
}

function getAge(dateString) {
    let today = new Date();
    today.setHours(0,0,0,0);
    let dob = new Date(dateString);
    dob.setHours(0,0,0,0);
    return new DateInterval(dob, today) + "";
}
