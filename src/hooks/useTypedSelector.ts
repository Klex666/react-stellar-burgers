import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypeRootState } from '../services/redux/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;