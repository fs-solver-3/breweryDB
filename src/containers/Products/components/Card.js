import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'components/atoms/Checkbox';
import Space from 'components/atoms/Space';
import Headding from 'components/atoms/Headding';
import Slider from 'components/molecules/Card/Slider';
import MCard from 'components/molecules/Card';

import UndoIcon from 'components/molecules/Card/assets/undo.svg';
import UndoFrontIcon from 'components/molecules/Card/assets/undo_front.svg';
import CancelIcon from 'components/molecules/Card/assets/cancel.svg';
import OrganicIcon from 'components/molecules/Card/assets/warnings/organic.svg';
import GlutenIcon from 'components/molecules/Card/assets/warnings/gluten.svg';
import DairyIcon from 'components/molecules/Card/assets/warnings/dairy.svg';
import EggsIcon from 'components/molecules/Card/assets/warnings/eggs.svg';
import NutsIcon from 'components/molecules/Card/assets/warnings/nuts.svg';
import { Link } from 'react-router-dom';

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

const Card = ({ isEven, hideCheckbox, isProductPage, productDetails,  ColorCode , ColorNameValue ,backgroundColorProp}) => {
  const [cardSide, SetCardSide] = useState(1);
  const [readMore, SetReadMore] = useState(false);
  // if(productDetails.SRM){
    const colorObject = ColorMappedToSRM.find((item) => item.value === productDetails.SRM);
    const color = colorObject && colorObject.label;  
  // }
  console.log(productDetails,backgroundColorProp,'productDetails')
  return(
  <MCard isEven={isEven} style={{backgroundColor:backgroundColorProp}}>
    {cardSide === 1 && <>
     {productDetails.isNew === 'yes' ? (
        <img
          src="/images/RedStar.png"
          alt="RedStar.png"
          className="card--red-star"
        />
      ) : (
        ''
      )}
      </>}
    <div className="flex">
      {cardSide === 1 && !hideCheckbox && (
        <div>
          <Checkbox greyDesign />
        </div>
      )}
      <div
        style={{
          paddingLeft: hideCheckbox ? 15 : 0,
        }}>
        {cardSide === 1 && <>
        <Headding bold title={productDetails ? productDetails.productName : 'Sip of Sunshine'} />
        <Space size={3} />
        <Headding title={productDetails ? productDetails.productStyle : 'Lawson’s Finest Liquids'} />
        <Space size={7} />
        <Headding bold as="h5" title={productDetails ? productDetails.brewery : 'Waitsfeild, VT'} />
        {/* <Headding bold as="h5" title="American IPA" /> */}
        <Space size={11} />
        </>}
        {cardSide === 1 && 
        <div className="flex">
        {productDetails.productLabelImagePath ? (
                <img
                  className="productcard__img--label"
                  src={productDetails.productLabelImagePath}
                  alt=" "
                  style={{
                    backgroundColor: 'rgb(233, 241, 248)',
                    border: '2px dashed rgb(121, 173, 213)',
                    height: '99px',
                    width: '79px',
                  }}
                />
              ) : (
                <img
                  className="productcard__img--label"
                  alt=""
                  src='/images/sipOfSunshine.jpg'
                  style={{
                    backgroundColor: 'rgb(233, 241, 248)',
                    border: '2px dashed rgb(121, 173, 213)',
                    height: '114px',
                    width: '111px',
                  }}
                />
              )}
          <div
            style={{
              textAlign: 'center',
              flex: 1,
            }}>
            <Headding as="h5" bold title="Availability" />
            <Headding as="h5" title={
                    productDetails
                      ? `${productDetails.availability}`
                      : '-'
                  } />
            <Space size={8} />
            <span className="middle-row-text-card">
              <span>
                <Headding as="h5" bold title="ABV" />
                <Headding as="h5" title={productDetails?productDetails.ABV:'-'} />
              </span>
              <Space size={8} />
              <span>
                <Headding as="h5" bold title="IBU" />
                <Headding as="h5" title={productDetails?productDetails.IBU:'-'} />
              </span>
            </span>
            <Space size={8} />
            <Headding as="h5" bold title="Color" />
            <Headding as="h5" title={ColorNameValue ? ColorNameValue :color} />
          </div>
        </div>}
        {cardSide === 1 && <>
        <Space size={30} />
        <div className="flex card--favorite-brew">
            {productDetails.isglutenFree === 'yes' ? (
              <div style={{ maxWidth: '50px' }}>
                <img alt="" src={GlutenIcon} />
                <p>Gluten Free</p>
              </div>
            ) : (
              ''
            )}
            {productDetails.isCertifiedOrganic === 'yes' ? (
              <div style={{ maxWidth: '50px' }}>
                <img alt="" src={OrganicIcon} />
                <p>Certified Organic</p>
              </div>
            ) : (
              ''
            )}
            {productDetails.isnonAlcoholic === 'yes' ? (
              <div style={{ maxWidth: '50px' }}>
                <img alt="" src={CancelIcon} />
                <p>Non-Alcoholic</p>
              </div>
            ) : (
              ''
            )}
          </div>
         <div className="flex card--favorite-brew">
          {productDetails.allergyWarnings
            && productDetails.allergyWarnings.map((item, key) => (item.allergyNames === 'None' ? (
              <div style={{ maxWidth: '50px' }} key={key}>
                <img alt="" src={CancelIcon} />
                <p>Allergy</p>
              </div>
            ) : (
              <div style={{ maxWidth: '50px' }} key={key}>
                {item.allergyNames === 'Dairy' && <img alt="" src={DairyIcon} />}
                {item.allergyNames === 'Nuts' && <img alt="" src={NutsIcon} />}
                {item.allergyNames === 'Eggs' && <img alt="" src={EggsIcon} />}
                <p>Allergy</p>
              </div>
            )))}
        </div>
        <Space size={30} />
        <Headding bold title="Tasting Notes" />
        <Space size={5} />
        <Headding
          style={{
            fontWeight: '500',
          }}>
          {productDetails?productDetails.tastingNotes:''}
        </Headding>
        <Space size={14} />
        <Headding bold title="Perceived Bitterness" />
        <Space size={2} />
        <Headding as="h5"  title={productDetails ? productDetails.perceivedBitterness : ''} />
        <Space size={5} perceivedBitterness={productDetails.perceivedBitterness}/>
        <Slider perceivedBitterness={productDetails.perceivedBitterness} />
        <Space size={30} />
        <Headding bold title="Primary Flavor Notes" />
        <Space size={5} />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(productDetails && productDetails.primaryFlavorNotes) ? productDetails.primaryFlavorNotes.map((note, key) => (
            <div
              key={key}
              className="productform__note--container"
              style={{ marginRight: '25px' }}
            >
              <img
                style={{ width: '45px' ,height:'45px' }}
                className="productform__note--img"
                src={`/images/flavor-notes/${note.notes}.png`}
                alt=""
              />
              <span
                className="productform__note--name"
                style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  display: 'block',
                  color: 'var(--BrewLogixBlue)',
                }}
              >
                {note.notes}
              </span>
            </div>
          )):''}
        </div>
        <Space size={14} />
        <Headding bold title="Hints of" />
        <Space size={5} />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(productDetails && productDetails.secondaryFlavorNotes )? productDetails.secondaryFlavorNotes.map((note, key) => (
            <div
              key={key}
              className="productform__note--container"
              style={{ marginRight: '25px' }}
            >
              <img
                style={{ width: '45px' ,height:'45px'}}
                className="productform__note--img"
                src={`/images/flavor-notes/${note.notes}.png`}
                alt=""
              />
              <span
                className="productform__note--name"
                style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  display: 'block',
                  color: 'var(--BrewLogixBlue)',
                }}
              >
                {note.notes}
              </span>
            </div>
          )):''}
        </div>
        <Space size={14} />
        <Headding bold title="Food Pairings" />
        <Space size={5} />
        <Headding
          as="p"
          style={{
            fontWeight: '500',
          }}>
          {(productDetails &&  productDetails.foodPairings)
                  ? productDetails.foodPairings.map(item =>
                    <div>{item.foodPairing}</div>
                  ): ''}
        </Headding>
        <Headding bold as="small">
          READ MORE
        </Headding>
        <Space size={9} />
        <Link
          size="large"
          bold
          additionalClassName="add-product-button">
          <div className="card--share" onClick={() => SetCardSide(2)}>
            <img src={UndoIcon} alt="share" />
          </div>
        </Link>
        </>}
        {/* Back card */}
        {cardSide === 2 && (
            <div style={{paddingLeft:'20px'}}>
              <Space size={30} />
              <Headding bold title="Serving Temperature" />
              <Space size={5} />
              <Headding
                style={{
                  fontWeight: '500',
                }}
              >
                {productDetails
                  ? productDetails.servingTemperature
                  : ''}
              </Headding>
              <Space size={10} />
              <Headding bold title="Recommended Glassware" />
              <Space size={10} />
              <div
                className="productform__note--container"
              >
                {/* svg */}
                {productDetails.glasswares.map(item =>
                  (item.glassware === 'Arome' && <Arome color={ColorCode} />) ||
                  (item.glassware === 'Boot' && <Boot color={ColorCode} />) ||
                  (item.glassware === 'Bottle' && <Bottle color={ColorCode} />)||
                  (item.glassware === 'Can' && <Can color={ColorCode} />) ||
                  (item.glassware === 'Can-Glass' && <CanGlass color={ColorCode} />) ||
                  (item.glassware === 'Chalice' && <Chalice color={ColorCode} />) ||
                  (item.glassware === 'Coffee-Cup' && <CoffeeCup color={ColorCode} />) ||
                  (item.glassware === 'Craftmaster' && <CraftMaster color={ColorCode} />) ||
                  (item.glassware === 'Crowler' && <Crowler color={ColorCode} />) ||
                  (item.glassware === 'Flared-Pint' && <FlaredPint color={ColorCode} />) ||
                  (item.glassware === 'Flute' && <Flute color={ColorCode} />) ||
                  (item.glassware === 'Glencairn-Whiskey' && <GlencairnWhiskey color={ColorCode} />) ||
                  (item.glassware === 'Goblet' && <Goblet color={ColorCode} />) ||
                  (item.glassware === 'Highball' && <Highball color={ColorCode} />) ||
                  (item.glassware === 'Large-Growler' && <LargeGrowler color={ColorCode} />) ||
                  (item.glassware === 'Lowball' && <Lowball color={ColorCode} />) ||
                  (item.glassware === 'Margarita' && <Margarita color={ColorCode} />) ||
                  (item.glassware === 'Martini' && <Martini color={ColorCode} />) ||
                  (item.glassware === 'Mug' && <Mug color={ColorCode} />) ||
                  (item.glassware === 'Nonic-Pint' && <NonicPint color={ColorCode} />) ||
                  (item.glassware === 'Pack' && <Pack color={ColorCode} />) ||
                  (item.glassware === 'Pilsner' && <Pilsner color={ColorCode} />) ||
                  (item.glassware === 'Pitcher' && <Pitcher color={ColorCode} />) ||
                  (item.glassware === 'Sam-Adams-Pint' && <SamAdamsPint color={ColorCode} />) ||
                  (item.glassware === 'Sampler' && <Sampler color={ColorCode} />) ||
                  (item.glassware === 'Shaker-Pint' && <ShakerPint color={ColorCode} />) ||
                  (item.glassware === 'Small-Growler' && <SmallGrowler color={ColorCode} />) ||
                  (item.glassware === 'Snifter' && <Snifter color={ColorCode} />) ||
                  (item.glassware === 'Spiegelau-IPA' && <SpiegelauIPA color={ColorCode} />) ||
                  (item.glassware === 'Spiegelau-Stout' && <SpiegelauStout color={ColorCode} />) ||
                  (item.glassware === 'Spiegelau-Wheat' && <SpiegelauWheat color={ColorCode} />) ||
                  (item.glassware === 'Stange' && <Stange color={ColorCode} />) ||
                  (item.glassware === 'Stemless-Wine' && <StemlessWine color={ColorCode} />) ||
                  (item.glassware === 'Teku' && <Teku color={ColorCode} />) ||
                  (item.glassware === 'Tulip-Pint' && <TulipPint color={ColorCode} />) ||
                  (item.glassware === 'Thistle' && <Thistle color={ColorCode} />) ||
                  (item.glassware === 'Tulip' && <Tulip color={ColorCode} />) ||
                  (item.glassware === 'Tumbler' && <Tumbler color={ColorCode} />) ||
                  (item.glassware === 'Weizen' && <Weizen color={ColorCode} />) ||
                  (item.glassware === 'Willi' && <Willi color={ColorCode} />) ||
                  (item.glassware === 'Wine' && <Wine color={ColorCode} />) ||
                  (item.glassware === 'Yardtube' && <Yardtube color={ColorCode} />) ||
                  item.glassware === 'None' && <None color={ColorCode} />
                )}
                <span
                  className="productform__note--name"
                  style={{
                    textAlign: 'left',
                    fontSize: '12px',
                    display: 'block',
                    color: 'var(--BrewLogixBlue)',
                  }}
                >
                  {productDetails.glassware}
                </span>
              </div>
              <Space size={10} />
              <Headding bold title="Hops" />
              <Space size={5} />
              <Headding
                style={{
                  fontWeight: '500',
                }}
              >
                {productDetails.hops ? productDetails.hops.map(item => <div>{item.hopName}</div>) : ''}
              </Headding>
              <Space size={10} />
              <Headding bold title="Yeasts" />
              <Space size={5} />
              <Headding
                style={{
                  fontWeight: '500',
                }}
              >
                {productDetails.yeast ? productDetails.yeast.map(item => <div>{item.yeastName}</div>) : ''}
              </Headding>
              <Space size={10} />
              <Headding bold title="Malt" />
              <Space size={5} />
              <Headding
                style={{
                  fontWeight: '500',
                }}
              >
                {productDetails.malt ? productDetails.malt.map(item => <div>{item.maltName}</div>) : ''}
              </Headding>
              <Space size={42} />
              <div className="card--share" onClick={() => SetCardSide(1)}>
                <img src={UndoFrontIcon} alt="share" />
              </div>
            </div>
          )}
        </div>
    </div>
  </MCard>
)};

Card.propTypes = {
  isEven: PropTypes.bool,
  hideCheckbox: PropTypes.bool,
  productDetails: PropTypes.object,
};

export default Card;
