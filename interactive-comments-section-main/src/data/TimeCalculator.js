export const timeSince = (created) => {
    if (typeof(created) === 'string') {
        if (created.includes('month') || created.includes('months')) {
            created = (Date.now() - created.charAt(0) * 1000 * 60 * 60 * 24 * 30);
        } else if (created.includes('week') || created.includes('weeks')) {
            created = (Date.now() - created.charAt(0) * 1000 * 60 * 60 * 24 * 7);
        } else if (created.includes('day') || created.includes('days')) {
            created = (Date.now() - created.charAt(0) * 1000 * 60 * 60 * 24);
        }
    }
    const passedMinutes = Math.floor((Date.now() - created) / 1000 / 60);
    if (passedMinutes < 1) {
        return 'now';
    }
    if (passedMinutes < 60) {
        return (passedMinutes + ' minutes ago');
    }
    
    if (passedMinutes < (60 * 24)) {
        const passedHours = Math.floor(passedMinutes / 60);
        return (passedHours +  ` hour${(passedHours > 1) ? 's' : ''} ago`);
    }
    if (passedMinutes < 60 * 24 * 7) {
        const passedDays = Math.floor(passedMinutes / 60 / 24);
        return ( passedDays +  ` day${(passedDays > 1) ? 's' : ''} ago`);
    }
    if (passedMinutes < 60 * 24 * 7 * 4) {
        const passedWeeks = Math.floor(passedMinutes / 60 / 24 / 7);
        return (passedWeeks + ` week${(passedWeeks > 1) ? 's' : ''} ago`);
    }
    if (passedMinutes < 60 * 24 * 7 * 4 * 12) {
        const passedMonths = Math.floor(passedMinutes / 60 / 24 / 30);
        return (passedMonths + ` month${(passedMonths > 1) ? 's' : ''} ago`)
    }
    if (passedMinutes > 60 * 24 * 7 * 12) {
        const passedYears = Math.floor(passedMinutes / 60 / 24 / 7 / 4 / 12);
        return (passedYears + ` year${(passedYears > 1) ? 's' : ''} ago`)
    }
}