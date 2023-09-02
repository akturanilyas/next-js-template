'use client';

import BaseView from '@/components/common/base-view/BaseView';
import { FC, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { StoreItemProps } from '@/components/common/store-item/StoreItem.interface';
import BaseText from '@/components/common/base-text/BaseText';
import { getFormattedAmount } from '@/utils/amountUtil';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import BaseButton from '@/components/common/base-button/BaseButton';
import { usePathname, useRouter } from 'next/navigation';
import { CarouselItem } from '@/components/carousel-item/CarouselItem';
import { MAIN_PATH } from '@/constants/mainPath.constant';

export const StoreItem: FC<StoreItemProps> = (props) => {
  const { className, imageClassName, item } = props;
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const classes = twMerge(`
     border-2 border-slate-200 
     rounded-2xl hover:scale-110 bg-slate-100
     h-80
     group
     justify-between
     ${className} 
  `);

  const stars = (
    <BaseView className={'flex flex-row'}>
      {Array.from({ length: 5 }, (_, index) => (
        <CustomIconProvider
          key={index}
          icon={CUSTOM_ICON.STAR_FULL}
          iconClassName={`h-full ${index + 0.5 > item.rating ? '' : 'text-yellow-300 '} `}
          customSize={18}
        />
      ))}
    </BaseView>
  );

  return (
    <BaseView
      className={classes}
      ref={ref}
      onClick={() => router.push(`${MAIN_PATH.PRODUCTS}/${item.id.toString()}`)}
    >
      <BaseView>
        <CarouselItem images={item.images} imageContainerClassName={'h-40'} imageClassName={'max-h-40'} />
        <BaseText text={item.title} className={'px-1 max-h line-clamp-3'} />
        <BaseText
          text={getFormattedAmount({ amount: item.price, currency: 'USD' })}
          className={'px-1 pb-4 font-bold'}
        />
        <BaseView className={'flex flex-row items-center gap-2'}>
          <BaseView className={'flex flex-row items-center gap-2'}>{stars}</BaseView>

          <BaseText text={item.rating.toString()} className={'text-sm'} />
        </BaseView>
      </BaseView>
      <BaseView className={'p-4'}>
        <BaseButton label={'Add to Basket'} className={'invisible group-hover:visible bg-green-450 p-2'} />
      </BaseView>
    </BaseView>
  );
};
