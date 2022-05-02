import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useFeedbackModalDispatch = () => useDispatch<AppDispatch>();
export const useFeedbackModalSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCreationModalDispatch = () => useDispatch<AppDispatch>();
export const useCreationModalSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useMapDispatch = () => useDispatch<AppDispatch>();
export const useMapSelector: TypedUseSelectorHook<RootState> = useSelector;
