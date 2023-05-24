import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { changeLang } from 'redux/locale/localeSlice';

const langOpts = [
  { value: 'en', label: 'English' },
  { value: 'uk', label: 'Ukrainian' },
];

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(state => state.locale.lang);
  const defaultOption = langOpts.find(opt => opt.value === currentLang);

  return (
    <Select
      options={langOpts}
      onChange={option => dispatch(changeLang(option.value))}
      defaultValue={defaultOption}
    />
  );
};
