import { lazy } from 'react';

export const FullPageLoading = lazy(
  () => import('./full-page-loading/full-page-loading')
);
export const ProtecErrorBoundarytRoute = lazy(
  () => import('./error-boundary/error-boundary')
);
export const FullPageError = lazy(
  () => import('./full-page-error/full-page-error')
);
export const Header = lazy(() => import('./header/header'));
export const ContainerGrid = lazy(
  () => import('./container-grid/container-grid')
);
export const Footer = lazy(() => import('./footer/footer'));
export const SwiperCarousel = lazy(() => import('./carousel/swiper-carousel'));
export const TextInput = lazy(() => import('./text-input/text-input'));

export { default as ProtectRoute } from './protect-route/protect-route';
export * from './icons/index';
export * from './texts';
export * from './buttons/index';
export * from './authorization-header/authorization-header';
export * from './more-option/more-option';
export * from './more-option-menu-item/more-option-menu-item';
export * from './more-option-menu-item/more-option-menu-item';
export { default as InputCep } from './input-cep/input-cep';
export { default as SelectInput } from './select-input/select-input';
export { default as Modal } from './modal/modal';
export { default as CheckBoxInput } from './checkbox-input/checkbox-input';
