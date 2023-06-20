import {
  // FiUser,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import {
  IoBagCheckOutline,
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const pages = [
  // {
  //   title: 'User',
  //   href: '/user/dashboard',
  //   icon: FiUser,
  // },
  {
    title: 'Offer',
    href: '/offer',
    icon: FiGift,
  },
  {
    title: 'Checkout',
    href: '/checkout',
    icon: IoBagCheckOutline,
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: FiHelpCircle,
  },
  {
    title: 'About-Us',
    href: '/about-us',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Contact-Us',
    href: '/contact-us',
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: 'Privacy-Policy',
    href: '/privacy-policy',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Terms-&-Conditions',
    href: '/terms-and-conditions',
    icon: HiOutlineDocumentText,
  },
  {
    title: 'Not-Found',
    href: '/404',
    icon: FiAlertCircle,
  },
];

const userSidebar = [
  {
    title: 'Dashboard',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'My Orders',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'Update Profile',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'Change Password',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];

const sliderData = [
  {
    id: 1,
    title: 'Slider1-Title',
    info: 'Slider1-Description',
    url: '/search?Category=biscuits--cakes',
    image: '/slider/slider-1.jpg',
  },
  {
    id: 2,
    title: 'Slider2-Title',
    info: 'Slider2-Description',
    url: '/search?Category=fish--meat',
    image: '/slider/slider-2.jpg',
  },
  {
    id: 3,
    title: 'Slider3-Title',
    info: 'Slider3-Description',
    url: '/search?category=fresh-vegetable',
    image: '/slider/slider-3.jpg',
  },
];

const ctaCardData = [
  {
    id: 1,
    title: 'Taste of',
    subTitle: 'Fresh & Natural',
    image: '/cta/cta-bg-1.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    title: 'Taste of',
    subTitle: 'Fish & Meat',
    image: '/cta/cta-bg-2.jpg',
    url: '/search?Category=fish--meat',
  },
  {
    id: 3,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/cta-bg-3.jpg',
    url: '/search?Category=biscuits--cakes',
  },
];

/* const featurePromo = [
  {
    id: 1,
    title: 'featurePromo1-title',
    info: 'featurePromo1-info',
    icon: FiTruck,
  },
  {
    id: 2,
    title: 'featurePromo2-title',
    info: 'featurePromo2-info',
    icon: FiPhoneCall,
  },
  {
    id: 3,
    title: 'featurePromo3-title',
    info: 'featurePromo3-info',
    icon: FiCreditCard,
  },
  {
    id: 4,
    title: 'featurePromo4-title',
    info: 'featurePromo4-info',
    icon: FiGift,
  },
];
 */
const contactData = [
  {
    id: 1,
    title: 'Email-Us',
    info: 'Contact-Page-Box1-Info',
    icon: FiMail,
    contact: 'vannam34760@gmail.com',
    className: 'bg-emerald-100',
  },
  {
    id: 2,
    title: 'Contact-Page-Box2-Title',
    info: 'Contact-Page-Box2-Info',
    icon: FiPhoneCall,
    contact: '0987011701',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Contact-Page-Box3-Title',
    info: 'Contact-Page-Box3-Title-Info',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];

export {
  pages,
  userSidebar,
  sliderData,
  ctaCardData,

  contactData,
};
