import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";
import ListBrand from '@layout/brands/ListBrand';
const FooterTop = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='mx-auto max-w-screen-2xl px-4 sm:px-10'>
        <ListBrand />
      </div>

    </>
  );
};

export default FooterTop;
