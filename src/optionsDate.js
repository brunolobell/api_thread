function getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

export default {
  options: {
    autoClose: false,
    container: null,
    defaultDate: null,
    disableDayFn: null,
    disableWeekends: false,
    events: [],
    firstDay: 0,
    format: 'mmm dd, yyyy',
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      months: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Março',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      nextMonth: '›',
      previousMonth: '‹',
      weekdays: [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-Feira',
        'Sábado'
      ],
      weekdaysAbbrev: [
        'Do',
        'Sg',
        'Te',
        'Qa',
        'Qi',
        'Se',
        'Sa'
      ],
      weekdaysShort: [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab'
      ]
    },
    isRTL: false,
    maxDate: new Date(),
    minDate: null,
    onClose: null,
    onDraw: null,
    onOpen: null,
    onSelect: null,
    parse: null,
    setDefaultDate: false,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 10
}}