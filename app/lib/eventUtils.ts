export interface Event {
    title: string;
    slug: string;
    date?: string; // For one-time events (ISO datetime)
    dayOfWeek?: string; // For recurring events
    startTime: string; // Format: HH:MM AM/PM
    endTime: string; // Format: HH:MM AM/PM
    location: string;
    description: string;
    image: string;
    rsvpLink: string;
    badge: string;
}

export const parseEventDate = (event: Event): { date: Date, endDate: Date, isWeekly: boolean, isMonthly: boolean } | null => {
    try {
        const isWeekly = event.badge === 'Weekly';
        const isMonthly = event.badge === 'Monthly' || event.badge === 'Monthy';

        let startDate: Date;
        let endDate: Date;

        if (isWeekly || isMonthly) {
            // For recurring events, use dayOfWeek + startTime/endTime
            if (!event.dayOfWeek) return null;

            // Find the next occurrence of this day
            const now = new Date();
            const dayMap: { [key: string]: number } = {
                'Sunday': 0,
                'Monday': 1,
                'Tuesday': 2,
                'Wednesday': 3,
                'Thursday': 4,
                'Friday': 5,
                'Saturday': 6,
            };

            const targetDay = dayMap[event.dayOfWeek];
            const currentDay = now.getDay();
            let daysUntilEvent = (targetDay - currentDay + 7) % 7;
            if (daysUntilEvent === 0) daysUntilEvent = 0; // Today

            startDate = new Date(now);
            startDate.setDate(startDate.getDate() + daysUntilEvent);
            startDate.setHours(0, 0, 0, 0); // Reset to midnight

            // Parse start time
            const [startHour, startMinuteFull] = event.startTime.split(':');
            const [startMin, startPeriod] = startMinuteFull.split(' ');
            let hour = parseInt(startHour);
            if (startPeriod === 'PM' && hour !== 12) hour += 12;
            if (startPeriod === 'AM' && hour === 12) hour = 0;
            startDate.setHours(hour, parseInt(startMin), 0, 0);

            // Parse end time
            endDate = new Date(startDate);
            const [endHour, endMinuteFull] = event.endTime.split(':');
            const [endMin, endPeriod] = endMinuteFull.split(' ');
            let endHourNum = parseInt(endHour);
            if (endPeriod === 'PM' && endHourNum !== 12) endHourNum += 12;
            if (endPeriod === 'AM' && endHourNum === 12) endHourNum = 0;
            endDate.setHours(endHourNum, parseInt(endMin), 0, 0);
        } else {
            // For one-time events, use the date field (date part only)
            if (!event.date) return null;

            // Extract just the date part from the ISO datetime (YYYY-MM-DD)
            const datePart = event.date.split('T')[0];
            startDate = new Date(datePart + 'T00:00:00');

            // Parse start/end times
            const [startHour, startMinuteFull] = event.startTime.split(':');
            const [startMin, startPeriod] = startMinuteFull.split(' ');
            let hour = parseInt(startHour);
            if (startPeriod === 'PM' && hour !== 12) hour += 12;
            if (startPeriod === 'AM' && hour === 12) hour = 0;
            startDate.setHours(hour, parseInt(startMin), 0, 0);

            endDate = new Date(startDate);
            const [endHour, endMinuteFull] = event.endTime.split(':');
            const [endMin, endPeriod] = endMinuteFull.split(' ');
            let endHourNum = parseInt(endHour);
            if (endPeriod === 'PM' && endHourNum !== 12) endHourNum += 12;
            if (endPeriod === 'AM' && endHourNum === 12) endHourNum = 0;
            endDate.setHours(endHourNum, parseInt(endMin), 0, 0);
        }

        return {
            date: startDate,
            endDate: endDate,
            isWeekly,
            isMonthly
        };
    } catch (e) {
        console.error("Date parse error", e);
        return null;
    }
};

export const getGoogleCalendarUrl = (event: Event) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(event.location || "");
    const text = encodeURIComponent(event.title || "");
    let dates = "";
    let recur = "";

    const parsed = parseEventDate(event);
    if (parsed) {
        // Format as YYYYMMDDTHHmmss using "face value" components (server local time)
        // treating them as floating time, to be pinned to America/Chicago below.
        const formatFloating = (d: Date) => {
            const pad = (n: number) => n.toString().padStart(2, '0');
            return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
        };

        dates = `&dates=${formatFloating(parsed.date)}/${formatFloating(parsed.endDate)}`;

        if (parsed.isWeekly) {
            recur = "&recur=RRULE:FREQ=WEEKLY";
        } else if (parsed.isMonthly) {
            recur = "&recur=RRULE:FREQ=MONTHLY";
        }
    }

    // Force America/Chicago timezone so the "face value" time is interpreted correctly
    return `${baseUrl}&text=${text}&details=${details}&location=${location}${dates}${recur}&ctz=America/Chicago`;
};
