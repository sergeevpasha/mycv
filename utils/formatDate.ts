import { format } from 'date-fns';
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
    return format(new Date(date), 'PPP', { locale });
};

export default formatDate;
