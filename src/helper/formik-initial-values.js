export const initialDaysAndHoursValues = {
  attributes: {
    tourFrequency: '',
    tourWeek: '',
    tourWeekDays: []
  }
};

export const initialTapRoolFilterValues = {
  attributes: {
    activities: [],
    attractions: [
      {
        attraction: '',
        distance: ''
      }
    ],
    brewOptions: '',
    foodOptions: '',
    patronOption: ''
  }
};

export const initialAgeRestrictionValues = {
  attributes: {
    ageRestriction: ''
  }
};

export const initialBuildTrafficValues = {
  attributes: {
    ...initialAgeRestrictionValues.attributes,
    ...initialDaysAndHoursValues.attributes,
    ...initialTapRoolFilterValues.attributes,
    isTourFree: '',
    isTourAvailable: '',
    tourPriceMin: '',
    tourPriceMax: '',
    tourSunday: false,
    tourMonday: false,
    tourTuesday: false,
    tourWednesday: false,
    tourThursday: false,
    tourFriday: false,
    tourSaturday: false,
    specials: [
      {
        tourSunday: false, happyHourto: null, happyHourfrom: null, happyhourSpecials: null
      },
      {
        tourMonday: false, happyHourto: null, happyHourfrom: null, happyhourSpecials: null
      },
      {
        tourTuesday: false, happyHourto: null, happyHourfrom: null, happyhourSpecials: null
      },
      {
        tourWednesday: false, happyHourto: null, happyHourfrom: null, happyhourSpecials: null
      },
      {
        tourThursday: false, happyHourto: null, happyHourfrom: null, happyhourSpecials: null
      },
      {
        tourFriday: false, happyHourto: null, happyHourfrom: null, happyhourSpecials: null
      },
      {
        tourSaturday: false, happyHourto: null, happyHourfrom: null, happyhourSpecials: null
      }
    ],
    week: ''
  }
};

export const initialEditLocationValues = {
  attributes: {
    ...initialAgeRestrictionValues.attributes,
    ...initialDaysAndHoursValues.attributes,
    ...initialTapRoolFilterValues.attributes
  }
};
