import moment from 'moment-jalaali';

moment.loadPersian({ dialect: 'persian-modern' });

interface IConvertApi {
  date: string | undefined | null;
  format?: string;
}

export const convertDateForApi = ({
  date,
  format = 'YYYY-MM-DD',
}: IConvertApi) => {
  if (date) {
    return moment(date).format(format);
  }
};

interface IConvertDateToJalaliForView {
  date: string | undefined | null;
  format?: string;
  defaultEmpty?: string;
}

export const convertDateToJalaliForView = ({
  date,
  format = 'jYYYY/jMM/jDD',
  defaultEmpty = '---',
}: IConvertDateToJalaliForView) => {
  try {
    return date
      ? moment(date).isValid() && moment(date)
        ? moment(date).format(format)
        : defaultEmpty
      : defaultEmpty;
  } catch (e) {
    return 'invalid date';
  }
};

export const convertTimeToJalaliForView = ({
  date,
  format = 'HH:MM',
  defaultEmpty = '---',
}: IConvertDateToJalaliForView) => {
  try {
    return date
      ? moment(date).isValid() && moment(date)
        ? moment(date).format(format)
        : defaultEmpty
      : defaultEmpty;
  } catch (e) {
    return 'invalid date';
  }
};