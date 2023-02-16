import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../model/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;