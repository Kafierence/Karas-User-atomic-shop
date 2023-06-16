import React from 'react';
import useTranslation from "next-translate/useTranslation";
import { Box } from '@chakra-ui/react';
import { FiCreditCard, FiGift, FiPhoneCall, FiTruck } from 'react-icons/fi';

const FeatureCard = () => {
  const { t } = useTranslation();
  const featurePromo = [
    {
      id: 1,
      title: 'FeaturePromo1-Title',
      info: 'Feature-Promo1-Info',
      icon: FiTruck,
    },
    {
      id: 2,
      title: 'Feature-Promo2-Title',
      info: 'Feature-Promo2-Info',
      icon: FiPhoneCall,
    },
    {
      id: 3,
      title: 'Feature-Promo3-Title',
      info: 'Feature-Promo3-Info',
      icon: FiCreditCard,
    },
    {
      id: 4,
      title: 'Feature-Promo4-Title',
      info: 'Feature-Promo4-Info',
      icon: FiGift,
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
      {featurePromo.map((promo) => (
        <Box
          key={promo.id}
          display='flex'
          bg='white'
          justifyContent='center'
          alignItems='center'
          className="  py-1 "
          _notLast={{
            borderRight: '1px solid',
            borderColor: 'gray.200'

          }}

        >
          <div className="mr-3">
            <promo.icon
              className="flex-shrink-0 h-4 w-4 text-emerald-600"
              aria-hidden="true"
            />
          </div>
          <div className="">
            <span className="block font-serif text-sm font-medium leading-5">
              {t(`common:${promo.title}`)} {t(`common:${promo.info}`)}
            </span>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default FeatureCard;
