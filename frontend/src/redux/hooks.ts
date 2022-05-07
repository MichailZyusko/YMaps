import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './types';

export const useFeedbackModalDispatch = () => useDispatch<AppDispatch>();
export const useFeedbackModalSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCreationModalDispatch = () => useDispatch<AppDispatch>();
export const useCreationModalSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useMenuModalDispatch = () => useDispatch<AppDispatch>();
export const useMenuModalSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useMapDispatch = () => useDispatch<AppDispatch>();
export const useMapSelector: TypedUseSelectorHook<RootState> = useSelector;
