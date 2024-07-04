import {useDispatch} from 'react-redux';
import {addMessage} from '../redux/reducers/toolTipReducer';

export const useToolTip = () => {
  const dispatch = useDispatch();

  const showToolTip = message => {
    dispatch(addMessage(message));
  };

  return showToolTip;
};
