import countriesData from './countries.json';

export const marks = [
  {
    value: 0,
    label: 'Low-to-no',
  },
  {
    value: 25,
    label: 'Mild',
  },
  {
    value: 50,
    label: 'Noticeable',
  },
  {
    value: 75,
    label: 'Decisive',
  },
  {
    value: 100,
    label: 'Powerful',
  },
];

export const activityData = [
  {
    activity: 'Archery',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-78.svg',
  },
  {
    activity: 'Bowling',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-181.svg',
  },
  {
    activity: 'Can Jam',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-72.svg',
  },
  {
    activity: 'Dance Night',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-328.svg',
  },
  {
    activity: 'Dodgeball',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-330.svg',
  },
  {
    activity: 'Escape Room',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-76.svg',
  },
  {
    activity: 'Fitness',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-175.svg',
  },
  {
    activity: 'Fowling',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-210.svg',
  },
  {
    activity: 'Goat Yoga',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-170.svg',
  },
  {
    activity: 'Gun Range',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-68.svg',
  },
  {
    activity: 'Hatchet Throwing',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-151.svg',
  },
  {
    activity: 'Hiking ',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-301.svg',
  },
  {
    activity: 'LARP',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-166.svg',
  },
  {
    activity: 'Line Dancing',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-178.svg',
  },
  {
    activity: 'Mechanical Bull Riding',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-81.svg',
  },
  {
    activity: 'Olympics',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-118.svg',
  },
  {
    activity: 'Paint Ball',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-68.svg',
  },
  {
    activity: 'Ping Pong',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-129.svg',
  },
  {
    activity: 'Pokemon GO',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-154.svg',
  },
  {
    activity: 'Rec Leagues',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-237.svg',
  },
  {
    activity: 'Running Club',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-120.svg',
  },
  {
    activity: 'Softball',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-330.svg',
  },
  {
    activity: 'Spikeball',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-330.svg',
  },
  {
    activity: 'Square Dancing',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-183.svg',
  },
  {
    activity: 'Swing Dancing',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-183.svg',
  },
  {
    activity: 'Volleyball',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-237.svg',
  },
  {
    activity: 'Yoga',
    category: 'physicalActivity',
    source: './images/BDB Icons/group-329.svg',
  },
  {
    activity: 'Arcade Games',
    category: 'games',
    source: './images/BDB Icons/group-210.svg',
  },
  {
    activity: 'Beer Pong',
    category: 'games',
    source: './images/BDB Icons/group-219.svg',
  },
  {
    activity: 'Bingo',
    category: 'games',
    source: './images/BDB Icons/group-188.svg',
  },
  {
    activity: 'Board Games',
    category: 'games',
    source: './images/BDB Icons/group-187.svg',
  },
  {
    activity: 'Card Games',
    category: 'games',
    source: './images/BDB Icons/group-177.svg',
  },
  {
    activity: 'Dart League',
    category: 'games',
    source: './images/BDB Icons/group-182.svg',
  },
  {
    activity: 'Fantasy League',
    category: 'games',
    source: './images/BDB Icons/group-192.svg',
  },
  {
    activity: 'Hang Man',
    category: 'games',
    source: './images/BDB Icons/group-172.svg',
  },
  {
    activity: 'League of Legends',
    category: 'games',
    source: './images/BDB Icons/group-181.svg',
  },
  {
    activity: 'Mafia',
    category: 'games',
    source: './images/BDB Icons/group-181.svg',
  },
  {
    activity: 'Poker',
    category: 'games',
    source: './images/BDB Icons/group-66.svg',
  },
  {
    activity: 'Pool/ Billiard',
    category: 'games',
    source: './images/BDB Icons/group-220.svg',
  },
  {
    activity: 'Trivia',
    category: 'games',
    source: './images/BDB Icons/group-72.svg',
  },
  {
    activity: 'Yard Games',
    category: 'games',
    source: './images/BDB Icons/group-210.svg',
  },
  {
    activity: 'Beer School',
    category: 'educational',
    source: './images/BDB Icons/group-74.svg',
  },
  {
    activity: 'Book Club',
    category: 'educational',
    source: './images/BDB Icons/group-327.svg',
  },
  {
    activity: 'Candle Making',
    category: 'educational',
    source: './images/BDB Icons/group-184.svg',
  },
  {
    activity: 'Cooking Lessons',
    category: 'educational',
    source: './images/BDB Icons/group-191.svg',
  },
  {
    activity: 'Paint/Art',
    category: 'educational',
    source: './images/BDB Icons/group-160.svg',
  },
  {
    activity: 'Plant Night',
    category: 'educational',
    source: './images/BDB Icons/group-190.svg',
  },
  {
    activity: 'Town Hall Meeting',
    category: 'educational',
    source: './images/BDB Icons/group-192.svg',
  },
  {
    activity: 'WoodWorking',
    category: 'educational',
    source: './images/BDB Icons/group-63.svg',
  },
  {
    activity: 'Art Gallery',
    category: 'entertainment',
    source: './images/BDB Icons/group-195.svg',
  },
  {
    activity: 'Bartending Show',
    category: 'entertainment',
    source: './images/BDB Icons/group-190.svg',
  },
  {
    activity: 'Car Club',
    category: 'entertainment',
    source: './images/BDB Icons/group-186.svg',
  },
  {
    activity: 'Comedy Night ',
    category: 'entertainment',
    source: './images/BDB Icons/group-162.svg',
  },
  {
    activity: 'Drag Show',
    category: 'entertainment',
    source: './images/BDB Icons/group-123.svg',
  },
  {
    activity: 'Fashion Show',
    category: 'entertainment',
    source: './images/BDB Icons/group-328.svg',
  },
  {
    activity: 'Karaoke, music-and-multimedia',
    category: 'entertainment',
    source: './images/BDB Icons/group-192.svg',
  },
  {
    activity: 'Live Music',
    category: 'entertainment',
    source: './images/BDB Icons/group-162.svg',
  },
  {
    activity: 'Magic Night',
    category: 'entertainment',
    source: './images/BDB Icons/group-164.svg',
  },
  {
    activity: 'Open Mic Night',
    category: 'entertainment',
    source: './images/BDB Icons/group-162.svg',
  },
  {
    activity: 'Poetry',
    category: 'entertainment',
    source: './images/BDB Icons/group-157.svg',
  },
  {
    activity: 'Radio Night',
    category: 'entertainment',
    source: './images/BDB Icons/group-127.svg',
  },
  {
    activity: 'Charity Night',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-192.svg',
  },
  {
    activity: 'Cigar Night',
    category: 'miscellaneous',
    source: './images/BDB Icons/group-190.svg',
  },
  {
    activity: 'Eating Contest',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-191.svg',
  },
  {
    activity: 'Family Night',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-180.svg',
  },
  {
    activity: 'Farmers Market',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-179.svg',
  },
  {
    activity: 'Fish Fry',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-185.svg',
  },
  {
    activity: 'Food Truck',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-125.svg',
  },
  {
    activity: 'Military Night',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-63.svg',
  },
  {
    activity: 'MugClub',
    category: 'miscellaneous',
    source: './images/BDB Icons/group-190.svg',
  },
  {
    activity: 'Tap Takeover',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-189.svg',
  },
  {
    activity: 'Theme Night',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-199.svg',
  },
  {
    activity: 'Viewing Party',
    category: 'miscellaneous ',
    source: './images/BDB Icons/group-180.svg',
  },
];

export const teamMembersFilterOptions = [
  {
    label: 'Admin Champions',
    value: 'Admin Champions',
  },
  {
    label: 'Brand Champions',
    value: 'Brand Champions',
  },
  {
    label: 'Brew Champions',
    value: 'Brew Champions',
  },
  {
    label: 'Location Champions',
    value: 'Location Champions',
  },
];

export const teamMembersSortOptions = [
  {
    label: 'A - Z',
    value: 'A - Z',
  },
  {
    label: 'Z - A',
    value: 'Z - A',
  },
  {
    label: 'Location',
    value: 'Location',
  },
];

export const subscriptions = [
  {
    label: 'Clientadmin',
    value: 'clientadmin',
  },
  {
    label: 'Performance',
    value: 'performance',
  },
  {
    label: 'Brewe xperience',
    value: 'brewexperience',
  },
  {
    label: 'Brew menu',
    value: 'brewmenu',
  },
  {
    label: 'Brew knowledge',
    value: 'brewknowledge',
  },
  {
    label: 'Brew ondeck',
    value: 'brewondeck',
  },
];

export const roles = [
  {
    label: 'Brewery Admin',
    value: 'breweryadmin',
  },
  {
    label: 'Brand',
    value: 'brand',
  },
  {
    label: 'Brew',
    value: 'brew',
  },
  {
    label: 'Location',
    value: 'location',
  },
];

export const championRoles = [
  {
    label: 'Admin Champion',
    value: 'adminChampion',
  },
  {
    label: 'Brand Champion',
    value: 'brandChampion',
  },
  {
    label: 'Brew Champion',
    value: 'brewChampion',
  },
  {
    label: 'Location Champion',
    value: 'locationChampion',
  },
];

export const newRoles = [
  { label: 'Owner', value: 'Owner' },
  { label: 'Senior Exec (CEO, COO, CMO)', value: 'Senior Exec (CEO, COO, CMO)' },
  { label: 'General Manager', value: 'General Manager' },
  { label: 'Operations Manager', value: 'Operations Manager' },
  { label: 'Sales Manager', value: 'Sales Manager' },
  { label: 'Brand/Marketing Manager', value: 'Brand/Marketing Manager' },
  { label: 'Taproom Manager', value: 'Taproom Manager' },
];

export const comPreferences = [
  {
    label: 'Email',
    value: 'email',
  },
  {
    label: 'Phone',
    value: 'phone',
  },
];

export const bools = [
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
];

export const distances = [
  {
    label: 'Short Walk',
    value: 'short_walk',
  },
  {
    label: 'Short Bike Ride',
    value: 'short_bike_ride',
  },
  {
    label: 'Short Car Ride',
    value: 'short_car_ride',
  },
];

export const weeks = [
  { value: '1st', label: '1st' },
  { value: '2nd', label: '2nd' },
  { value: '3rd', label: '3rd' },
  { value: '4th', label: '4th' },
];

export const categories = [
  {
    label: 'Physical Activity',
    value: 'physicalActivity',
  },
  {
    label: 'Games',
    value: 'games',
  },
  {
    label: 'Educational',
    value: 'educational',
  },
  {
    label: 'Entertainment',
    value: 'entertainment',
  },
];
export const dayOfWeeeks = [
  {
    label: 'Every Day',
    value: 'every_day',
  },
  {
    label: 'Every Week Day',
    value: 'every_week_day',
  },
  {
    label: 'Every Monday',
    value: 'every_monday',
  },
  {
    label: 'Every Tuesday',
    value: 'every_tuesday',
  },
  {
    label: 'Every Wednesday',
    value: 'every_wednesday',
  },
  {
    label: 'Every Thursday',
    value: 'every_thursday',
  },
  {
    label: 'Every Friday',
    value: 'every_friday',
  },
  {
    label: 'Every Saturday',
    value: 'every_saturday',
  },
];

export const countries = countriesData.map(data => ({
  label: data.name,
  value: data.alpha2Code,
}));

export const USStates = [
  'Alabama - AL',
  'Alaska - AK',
  'Arizona - AZ',
  'Arkansas - AR',
  'California - CA',
  'Colorado - CO',
  'Connecticut - CT',
  'Delaware - DE',
  'Florida - FL',
  'Georgia - GA',
  'Hawaii - HI',
  'Idaho - ID',
  'Illinois - IL',
  'Indiana - IN',
  'Iowa - IA',
  'Kansas - KS',
  'Kentucky - KY',
  'Louisiana - LA',
  'Maine - ME',
  'Maryland - MD',
  'Massachusetts - MA',
  'Michigan - MI',
  'Minnesota - MN',
  'Mississippi - MS',
  'Missouri - MO',
  'Montana - MT',
  'Nebraska - NE',
  'Nevada - NV',
  'New Hampshire - NH',
  'New Jersey - NJ',
  'New Mexico - NM',
  'New York - NY',
  'North Carolina - NC',
  'North Dakota - ND',
  'Ohio - OH',
  'Oklahoma - OK',
  'Oregon - OR',
  'Pennsylvania - PA',
  'Rhode Island - RI',
  'South Carolina - SC',
  'South Dakota - SD',
  'Tennessee - TN',
  'Texas - TX',
  'Utah - UT',
  'Vermont - VT',
  'Virginia - VA',
  'Washington - WA',
  'West Virginia - WV',
  'Wisconsin - WI',
  'Wyoming - WY',
  'American Samoa - AS',
  'District of Columbia - DC',
  'Federated States of Micronesia - FM',
  'Guam - GU',
  'Marshall Islands - MH',
  'Northern Mariana Islands - MP',
  'Palau - PW',
  'Puerto Rico - PR',
  'Virgin Islands - VI',
];

export const CanadianProvinces = [
  'Alberta - AB',
  'British Columbia - BC',
  'Manitoba - MB',
  'New Brunswick - NB',
  'Newfoundland and Labrador - NL',
  'Northwest Territories - NT',
  'Nova Scotia - NS',
  'Nunavut - NU',
  'Ontario - ON',
  'Prince Edward Island - PE',
  'Quebec - QC',
  'Saskatchewan - SK',
  'Yukon - YT',
];
