'use client';

import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { HeaderProps } from '@/components/header/Header.interface';
import { twMerge } from 'tailwind-merge';
import Logo from '@/components/header/Logo';
import DarkModeButton from '@/components/header/DarkModeButton';
import TextInput from '@/components/common/TextInput';
import { useForm } from 'react-hook-form';

const Header: FC<HeaderProps> = (props) => {
  const form = useForm();
  const { className } = props;

  const classes = twMerge(`
    flex flex-row items-center justify-between
    w-full
    px-4
    py-4
    bg-slate-100
    border-b-2
    ${className}
  `);

  const items = [
    {
      label: 'Home',
      path: '/home',
    },
    {
      label: 'Path 1',
      path: '/2',
    },
    {
      label: 'Path 2',
      path: '/3',
    },
  ];

  return (
    <BaseView className={classes}>
      <BaseView className={'w-1/6 items-start'}>
        <Logo />
      </BaseView>
      <TextInput form={form} name={'search'}/>
      <BaseView className={'w-1/6 items-end'}>
        <DarkModeButton />
      </BaseView>
    </BaseView>
  );
};

export default Header;
