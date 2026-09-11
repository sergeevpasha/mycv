import { format, parseISO } from 'date-fns';
import { ru, enUS, de } from 'date-fns/locale';

const formatDate = (date: string, pageLocale: string): string => {
    let locale = enUS;
    switch (pageLocale) {
        case 'ru':
            locale = ru;
            break;
        case 'de':
            locale = de;
            break;
        default:
            break;
    }
    // parseISO reads a date-only string as local midnight; new Date() uses UTC, which is the previous
    // day west of Greenwich and made the client render a different date than the server (hydration error)
    return format(parseISO(date), 'PPP', { locale });
};

export default formatDate;
