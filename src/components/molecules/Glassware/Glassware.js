import React, { useState, useEffect } from 'react';
import {
  Arome,
  Boot,
  Bottle,
  Can,
  CanGlass,
  Chalice,
  CoffeeCup,
  CraftMaster,
  Crowler,
  FlaredPint,
  Flute,
  GlencairnWhiskey,
  Goblet,
  Highball,
  LargeGrowler,
  Lowball,
  Margarita,
  Martini,
  Mug,
  NonicPint,
  Pack,
  Pilsner,
  Pitcher,
  SamAdamsPint,
  Sampler,
  ShakerPint,
  SmallGrowler,
  Snifter,
  SpiegelauIPA,
  SpiegelauStout,
  SpiegelauWheat,
  Stange,
  StemlessWine,
  Teku,
  TulipPint,
  Thistle,
  Tulip,
  Tumbler,
  Weizen,
  Willi,
  Wine,
  Yardtube,
  None,
} from 'components/molecules/Glassware/GetGlassWare';

const glasswareList = [
  {
    url: 'Arome',
    label: 'Arome',
  },
  {
    url: 'Boot',
    label: 'Boot',
  },
  {
    url: 'Bottle',
    label: 'Bottle',
  },
  {
    url: 'Can',
    label: 'Can',
  },
  {
    url: 'Mug',
    label: 'Mug',
  },
  {
    url: 'Pilsner',
    label: 'Pilsner',
  },
  {
    url: 'FlaredPint',
    label: 'FlaredPint',
  },
  {
    url: 'Snifter',
    label: 'Snifter',
  },
  {
    url: 'Flute',
    label: 'Flute',
  },
  {
    url: 'GlencairnWhiskey',
    label: 'Glencairn Whiskey',
  },
  {
    url: 'Goblet',
    label: 'Goblet',
  },
  {
    url: 'Chalice',
    label: 'Chalice',
  },
  {
    url: 'CoffeeCup',
    label: 'CoffeeCup',
  },
  {
    url: 'CraftMaster',
    label: 'Craft Master',
  },
  {
    url: 'Crowler',
    label: 'Crowler',
  },
  {
    url: 'LargeGrowler',
    label: 'Large Growler',
  },
  {
    url: 'Lowball',
    label: 'Lowball',
  },
  {
    url: 'Martini',
    label: 'Martini',
  },
  {
    url: 'NonicPint',
    label: 'Nonic-Pint',
  },
  {
    url: 'Highball',
    label: 'Highball',
  },
  {
    url: 'SamAdamsPint',
    label: 'Sam Adams Pint',
  },
  {
    url: 'Sampler',
    label: 'Sampler',
  },
  {
    url: 'ShakerPint',
    label: 'Shaker-Pint',
  },
  {
    url: 'SmallGrowler',
    label: 'Small Growler',
  },
  {
    url: 'SpiegelauIPA',
    label: 'Spiegelau IPA',
  },
  {
    url: 'SpiegelauStout',
    label: 'Spiegelau Stout',
  },
  {
    url: 'SpiegelauWheat',
    label: 'Spiegelau Wheat',
  },
  {
    url: 'Stange',
    label: 'Stange',
  },
  {
    url: 'StemlessWine',
    label: 'Stemless-Wine',
  },
  {
    url: 'Teku',
    label: 'Teku',
  },
  {
    url: 'TulipPint',
    label: 'Tulip-Pint',
  },
  {
    url: 'Thistle',
    label: 'Thistle',
  },
  {
    url: 'Tulip',
    label: 'Tulip',
  },
  {
    url: 'Pack',
    label: 'Pack',
  }, 
  {
    url: 'Tumbler',
    label: 'Tumbler',
  },
  {
    url: 'Weizen',
    label: 'Weizen',
  },
  {
    url: 'Willi',
    label: 'Willi',
  },
  {
    url: 'Wine',
    label: 'Wine',
  },
  {
    url: 'Yardtube',
    label: 'Yardtube',
  },
  {
    url: 'None',
    label: '',
  },
];

const ColorMappedToSRM = [
  {
    value: 1,
    code: '#F8F4B4',
    label: 'Light Straw',
  },
  {
    value: 2,
    code: '#F9E06C',
    label: 'Straw',
  },
  {
    value: 3,
    code: '#F4CE51',
    label: 'Straw',
  },
  {
    value: 4,
    code: '#F2BE37',
    label: 'Straw',
  },
  {
    value: 5,
    code: '#EDAC1E',
    label: 'Light Gold',
  },
  {
    value: 6,
    code: '#E59C19',
    label: 'Gold',
  },
  {
    value: 7,
    code: '#DF8F16',
    label: 'Gold',
  },
  {
    value: 8,
    code: '#D08019',
    label: 'Gold',
  },
  {
    value: 9,
    code: '#CF731C',
    label: 'Gold',
  },
  {
    value: 10,
    code: '#BD591B',
    label: 'Light Amber',
  },
  {
    value: 11,
    code: '#C3621B',
    label: 'Light Amber',
  },
  {
    value: 12,
    code: '#C86B1B',
    label: 'Amber',
  },
  {
    value: 13,
    code: '#C05727',
    label: 'Amber',
  },
  {
    value: 14,
    code: '#AD4417',
    label: 'Amber',
  },
  {
    value: 15,
    code: '#AE4818',
    label: 'Light Amber',
  },
  {
    value: 16,
    code: '#AB4417',
    label: 'Dark Amber',
  },
  {
    value: 17,
    code: '#A73D15',
    label: 'Dark Amber',
  },
  {
    value: 18,
    code: '#A23A15',
    label: 'Dark Amber',
  },
  {
    value: 19,
    code: '#9D3414',
    label: 'Light Brown',
  },
  {
    value: 20,
    code: '#983015',
    label: 'Light Brown',
  },
  {
    value: 21,
    code: '#932A14',
    label: 'Light Brown',
  },
  {
    value: 22,
    code: '#8D2615',
    label: 'Brown',
  },
  {
    value: 23,
    code: '#892515',
    label: 'Brown',
  },
  {
    value: 24,
    code: '#832212',
    label: 'Brown',
  },
  {
    value: 25,
    code: '#7D200F',
    label: 'Brown',
  },
  {
    value: 26,
    code: '#771E0E',
    label: 'Brown',
  },
  {
    value: 27,
    code: '#731C0B',
    label: 'Brown',
  },
  {
    value: 28,
    code: '#70180C',
    label: 'Brown',
  },
  {
    value: 29,
    code: '#6A160C',
    label: 'Brown',
  },
  {
    value: 30,
    code: '#67120B',
    label: 'Dark Brown',
  },
  {
    value: 31,
    code: '#63100A',
    label: 'Dark Brown',
  },
  {
    value: 32,
    code: '#8D2615',
    label: 'Dark Brown',
  },
  {
    value: 33,
    code: '#5B0B0A',
    label: 'Dark Brown',
  },
  {
    value: 34,
    code: '#58080B',
    label: 'Dark Brown',
  },
  {
    value: 35,
    code: '#53080C',
    label: 'Dark Brown',
  },
  {
    value: 36,
    code: '#4B090B',
    label: 'Dark Brown',
  },
  {
    value: 37,
    code: '#470D0C',
    label: 'Dark Brown',
  },
  {
    value: 38,
    code: '#400C0E',
    label: 'Black',
  },
  {
    value: 39,
    code: '#3c0b0e',
    label: 'Black',
  },
  {
    value: 40,
    code: '#240A0B',
    label: 'Black',
  },
];

const CustomComponent = ({url}) => {
  const TagCapital = url.charAt(0).toUpperCase() + url.slice(1);
  return  <React.Fragment>{TagCapital}</React.Fragment>
}

const Glassware = ({SRM, getColorName, getColorCode, getGlassware, handleChangeMultiple,onChange}) => {
  const [selectedGlassIndex, updateSelections] = useState([]);
  const [color, setColor] = useState('#F8F4B4');

  useEffect(() => {
    const SRMValue = SRM;
    const colorObject = ColorMappedToSRM.find((item) => item.value === SRM);
    let colorCode = '';
    let colorName = '';
    if (colorObject) {
      setColor(colorObject.code)
      colorName = colorObject.label;
      colorCode = colorObject.code;
      getColorName(colorName);
      getColorCode(colorCode);
    }
  }, [SRM]);
  return (
    <div className="bdb-glassware">
      {glasswareList.map((glass, i) => (
        <div
          onClick={() => {
            const selections = [...selectedGlassIndex];
            if (selectedGlassIndex.includes(i)) {
              selections.splice(selections.indexOf(i), 1);
            } else {
              selections.push(i);
            }
            const tempData = [];
            selections.length > 0 && selections.map((item, i) => {
              console.log(item)
                const temp = {
                  ['label']: glasswareList[item].label,
                  ['value']: glasswareList[item].url,
                };
                tempData.push(temp);
              });
            onChange(tempData);
            updateSelections(selections);
          }}
          key={i}
          className={`glassware-item ${selectedGlassIndex.includes(i) && 'active'}`}
        >
          {glass.url === 'Arome' && (
            <Arome color={color} />
          )}
           {glass.url === 'Boot' && (
            <Boot color={color} />
          )}
          {glass.url === 'Bottle' && (
            <Bottle color={color} />
          )}
          {glass.url === 'Can' && (
            <Can color={color} />
          )}
          {glass.url === 'CanGlass' && (
            <CanGlass color={color} />
          )}
          {glass.url === 'Chalice' && (
            <Chalice color={color} />
          )}
          {glass.url === 'CoffeeCup' && (
            <CoffeeCup color={color} />
          )}
          {glass.url === 'CraftMaster' && (
            <CraftMaster color={color} />
          )}
          {glass.url === 'Crowler' && (
            <Crowler color={color} />
          )}
          {glass.url === 'FlaredPint' && (
            <FlaredPint color={color} />
          )}
          {glass.url === 'Flute' && (
            <Flute color={color} />
          )}
          {glass.url === 'GlencairnWhiskey' && (
            <GlencairnWhiskey color={color} />
          )}
          {glass.url === 'Goblet' && (
            <Goblet color={color} />
          )}
          {glass.url === 'Highball' && (
            <Highball color={color} />
          )}
          {glass.url === 'LargeGrowler' && (
            <LargeGrowler color={color} />
          )}
          {glass.url === 'Lowball' && (
            <Lowball color={color} />
          )}
          {glass.url === 'Margarita' && (
            <Margarita color={color} />
          )}
          {glass.url === 'Martini' && (
            <Martini color={color} />
          )}
          {glass.url === 'Mug' && (
            <Mug color={color} />
          )}
          {glass.url === 'NonicPint' && (
            <NonicPint color={color} />
          )}
          {glass.url === 'Pack' && (
            <Pack color={color} />
          )}
          {glass.url === 'Pilsner' && (
            <Pilsner color={color} />
          )}
          {glass.url === 'Pitcher' && (
            <Pitcher color={color} />
          )}
          {glass.url === 'SamAdamsPint' && (
            <SamAdamsPint color={color} />
          )}
          {glass.url === 'Sampler' && (
            <Sampler color={color} />
          )}
          {glass.url === 'ShakerPint' && (
            <ShakerPint color={color} />
          )}
          {glass.url === 'SmallGrowler' && (
            <SmallGrowler color={color} />
          )}
          {glass.url === 'Snifter' && (
            <Snifter color={color} />
          )}
          {glass.url === 'SpiegelauIPA' && (
            <SpiegelauIPA color={color} />
          )}
          {glass.url === 'SpiegelauStout' && (
            <SpiegelauStout color={color} />
          )}
          {glass.url === 'SpiegelauWheat' && (
            <SpiegelauWheat color={color} />
          )}
          {glass.url === 'Stange' && (
            <Stange color={color} />
          )}
          {glass.url === 'StemlessWine' && (
            <StemlessWine color={color} />
          )}
          {glass.url === 'Teku' && (
            <Teku color={color} />
          )}
          {glass.url === 'TulipPint' && (
            <TulipPint color={color} />
          )}
          {glass.url === 'Thistle' && (
            <Thistle color={color} />
          )}
          {glass.url === 'Tulip' && (
            <Tulip color={color} />
          )}
          {glass.url === 'Tumbler' && (
            <Tumbler color={color} />
          )}
          {glass.url === 'Weizen' && (
            <Weizen color={color} />
          )}
          {glass.url === 'Willi' && (
            <Willi color={color} />
          )}
          {glass.url === 'Wine' && (
            <Wine color={color} />
          )}
          {glass.url === 'Yardtube' && (
            <Yardtube color={color} />
          )}
          {glass.url === 'None' && (
            <None color={color} />
          )}
          <p>{glass.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Glassware;
