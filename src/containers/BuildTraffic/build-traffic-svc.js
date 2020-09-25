export const getApiData = (values, userDetails) => {
  const apiData = {};

  apiData.breweryID = userDetails.breweryId;

  apiData.breweryName = userDetails.breweryName;
  apiData.streetAddress = userDetails.addressLine1;
  apiData.extendedAddress = userDetails.addressLine2;
  apiData.country = userDetails.country;
  apiData.city = userDetails.city;
  apiData.stateProvinceRegion = userDetails.stateProvinceRegion;
  apiData.postalCode = userDetails.postalCode;

  apiData.isTourFree = values.isTourFree;
  apiData.isTourAvailable = values.isTourAvailable; //
  apiData.tourCostMin = `${values.tourPriceMin}`;
  apiData.tourCostMax = `${values.tourPriceMax}`;

  apiData.isFacilityOpenSunday = values.tourSunday ? 'yes' : 'no';
  apiData.isFacilityOpenMonday = values.tourMonday ? 'yes' : 'no';
  apiData.isFacilityOpenTuesday = values.tourTuesday ? 'yes' : 'no';
  apiData.isFacilityOpenWednesday = values.tourWednesday ? 'yes' : 'no';
  apiData.isFacilityOpenThursday = values.tourThursday ? 'yes' : 'no';
  apiData.isFacilityOpenFriday = values.tourFriday ? 'yes' : 'no';
  apiData.isFacilityOpenSaturday = values.tourSaturday ? 'yes' : 'no';

  apiData.tourAgeRestrictions = values.ageRestriction;

  apiData.foodOptions = values.foodOptions;
  apiData.brewOptions = values.brewOptions;
  apiData.patronOption = values.patronOption;

  apiData.nearbyAttractions = values.attractions;

  apiData.activities = values.activities;

  apiData.isHappyOpenSunday = values.specials[0].tourSunday ? 'yes' : 'no';
  apiData.isHappyOpenMonday = values.specials[1].tourMonday ? 'yes' : 'no';
  apiData.isHappyOpenTuesday = values.specials[2].tourTuesday ? 'yes' : 'no';
  apiData.isHappyOpenWednesday = values.specials[3].tourWednesday ? 'yes' : 'no';
  apiData.isHappyOpenThursday = values.specials[4].tourThursday ? 'yes' : 'no';
  apiData.isHappyOpenFriday = values.specials[5].tourFriday ? 'yes' : 'no';
  apiData.isHappyOpenSaturday = values.specials[6].tourSaturday ? 'yes' : 'no';

  apiData.happySundayHours = {
    openFrom: values.specials[0].happyHourfrom,
    openTo: values.specials[0].happyHourto,
    specials: values.specials[0].happyhourSpecials
  };
  apiData.happyMondayHours = {
    openFrom: values.specials[1].happyHourfrom,
    openTo: values.specials[1].happyHourto,
    specials: values.specials[1].happyhourSpecials
  };
  apiData.happyTuesdayHours = {
    openFrom: values.specials[2].happyHourfrom,
    openTo: values.specials[2].happyHourto,
    specials: values.specials[2].happyhourSpecials
  };
  apiData.happyWednesdayHours = {
    openFrom: values.specials[3].happyHourfrom,
    openTo: values.specials[3].happyHourto,
    specials: values.specials[3].happyhourSpecials
  };
  apiData.happyThursdayHours = {
    openFrom: values.specials[4].happyHourfrom,
    openTo: values.specials[4].happyHourto,
    specials: values.specials[4].happyhourSpecials
  };
  apiData.happyFridayHours = {
    openFrom: values.specials[5].happyHourfrom,
    openTo: values.specials[5].happyHourto,
    specials: values.specials[5].happyhourSpecials
  };
  apiData.happySaturdayHours = {
    openFrom: values.specials[6].happyHourfrom,
    openTo: values.specials[6].happyHourto,
    specials: values.specials[6].happyhourSpecials
  };
};
