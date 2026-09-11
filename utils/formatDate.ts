// Formats a YYYY-MM-DD date like "December 20, 1990" in the page locale. Both the date and the output
// are pinned to UTC so the server and every visitor's timezone render the same day (no hydration mismatch)
const formatDate = (date: string, pageLocale: string): string =>
    new Intl.DateTimeFormat(pageLocale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export default formatDate;
