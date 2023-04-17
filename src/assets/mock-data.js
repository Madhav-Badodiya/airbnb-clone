import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';

export const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

export const locations = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/4490013e-b620-4050-8ea5-09e5f7c177df.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/03ebd668-13a0-4f3f-b601-45a29cb0ac09.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/38514e48-0956-411f-97e9-1eb544d7bd7f.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/f612a3ad-cb13-4593-9bbf-24ba343d6e35.jpg?im_w=720',
      },
    ],
    location: 'Gardon Reveira, Italy',
    days: 'Oct 2-9',
    price: '$14,999 CAD night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/3067d8a2-2660-428a-b19e-4bdbf67d01f3.jpeg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/ee978579-d897-40d7-9c33-9ba9dd917ce9.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/ac0e7cee-d0b9-45db-b0f1-f7a500c9bb57.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/300d7356-7251-49da-89f4-61c62c09b0bc.jpeg?im_w=720',
      },
    ],
    location: 'Joshua tree, USA',
    days: 'Sep 2-11',
    price: '$3000 CAD night',
    isNew: false,
    rating: 4.99,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/235d56fe-4241-4267-a24c-c70fdb4f8711.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/75d61330-8064-4563-bf60-bbbc8569618e.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/3672a322-2aca-4ba5-8dab-1eae19946e90.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/beec3be2-ad2b-423b-a9a5-75070f905d0b.jpg?im_w=720',
      },
    ],
    location: 'Uvita rosa, Costa Rica',
    days: 'Nov 19-22',
    price: '$1,129 CAD night',
    isNew: true,
    rating: 4.6,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/0335ee87-74de-484f-8025-92eddcec1d99.jpeg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8d6aff10-5a55-4e94-98a6-846c75e8a608.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ba49496-8d4b-4fbf-aa80-936b781fe7f7.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ddab15f-ec1a-41d3-9799-b97064211e0d.jpeg?im_w=720',
      },
    ],
    location: 'Navidad, Chile',
    days: 'Sep 13-18',
    price: '$208 CAD night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22625863/original/ca6a5c34-ddd5-4d10-a1c2-ddd7a7bab96b.jpeg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22625863/original/d9cf61fe-a1b9-4b5a-9a84-11b8ca1067b2.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22625863/original/1e6b452f-6faf-415f-a98b-643b7e86db26.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22625863/original/60e966d8-4e9b-4328-8887-4b15746147a7.jpeg?im_w=720',
      },
    ],
    location: 'Paraty, Brazil',
    days: 'Aug 1-6',
    price: '$243 CAD night',
    isNew: true,
    rating: 4.1,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/f96a829d-8895-4e9d-983e-4a73b2168064.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/a73018b7-424a-4ee3-a229-054a5b956c3b.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/0f0b4230-0214-434e-b3f3-e64c0f774262.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/3f9fc254-38ae-4166-b90d-86813c171702.jpg?im_w=720',
      },
    ],
    location: 'Raelington, Norway',
    days: 'Oct 9-15',
    price: '$698 CAD night',
    isNew: false,
    rating: 4.6,
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-626503661103872723/original/6c659e6b-2740-4f1d-b895-c67163d54add.jpeg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-626503661103872723/original/204e4399-36e3-4c51-8184-da948c5823a8.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-626503661103872723/original/64523c4b-e445-441a-a191-ff8052c3dd67.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-626503661103872723/original/61761c02-7f5d-4acc-80a1-eaa8af79513a.jpeg?im_w=720',
      },
    ],
    location: 'Terrasini, Italy',
    days: 'June 7-12',
    price: '$467 CAD night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'San Jose, Mexico',
    days: 'Jun 11-16',
    price: '$1,767 CAD night',
    isNew: false,
    rating: 4.8,
  },
  {
    id: 9,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Tulum, Mexico',
    days: 'Jul 1-6',
    price: '$910 CAD night',
    isNew: true,
    rating: 4.3,
  },
  {
    id: 10,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1518593929011-2b5ef6be57c7?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1526137844794-45f1041f397a?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Inglis, Canada',
    days: 'Jun 12-18',
    price: '$629 CAD night',
    isNew: false,
    rating: 4.6,
  },
  {
    id: 11,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1531756716853-09a60d38d820?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Jenner, California',
    days: 'Nov 2-7',
    price: '$2,595 CAD night',
    isNew: false,
    rating: 4.1,
  },
  {
    id: 12,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1526336179256-1347bdb255ee?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Malibu, US',
    days: 'Jun 3-4',
    price: '$4,467 CAD night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 13,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1517639493569-5666a7b2f494?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1605708896118-957f660c1555?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Bolzano, Italy',
    days: 'Sep 22-25',
    price: '$358 CAD night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 14,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1533387520709-752d83de3630?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Hawaii, US',
    days: 'Nov 4-10',
    price: '$777 CAD night',
    isNew: true,
    rating: 4.8,
  },
  {
    id: 15,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1544892504-5a42d285ab6f?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Lagos, Portugal',
    days: 'Sep 25-Oct 2',
    price: '$2,999 CAD night',
    isNew: true,
    rating: 4.88,
  },
  {
    id: 16,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'LunenBurg, Canada',
    days: 'Oct 4-9',
    price: '$500 CAD night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 17,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Santa Rosa, US',
    days: 'Jun 2-9',
    price: '$3,369 CAD night',
    isNew: false,
    rating: 4.1,
  },
  {
    id: 18,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1465147264724-326b45c3c59b?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Carlux, France',
    days: 'Oct 28-Nov 4',
    price: '$2511 CAD night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 19,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Palm desert, US',
    days: 'Jun 11-16',
    price: '$3200 CAD night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 20,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1494280986787-c49b328829dd?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Ressaca, Brazil',
    days: 'Oct 2-9',
    price: '$14,999 CAD night',
    isNew: false,
    rating: 4.5,
  },
];