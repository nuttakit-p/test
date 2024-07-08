import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import { useTranslation } from 'react-i18next';
import env from '../../configs/env';

const landingDetail = (type: string | null) => {
  const { t } = useTranslation(['common', 'landing']);

  const typeList = [
    {
      type: 'success',
      detail: {
        icon: <CheckCircleIcon color="primary" />,
        title: t('landing:success.title'),
        description: t('landing:success.description'),
        btn_confirm: {
          // your can config button confirm text and path.
          text: t('common:home'),
          path: `${env.URL_BDMS}`,
        },
      },
    },
    {
      type: 'fail',
      detail: {
        icon: <SmsFailedIcon color="primary" />,
        title: t('landing:fail.title'),
        description: t('landing:fail.description'),
      },
    },
    {
      type: 'link_fail',
      detail: {
        icon: <ErrorIcon color="primary" />,
        title: t('landing:link_fail.title'),
        description: t('landing:link_fail.description'),
      },
    },
    {
      type: 'error_404',
      detail: {
        code: 404,
        icon: <ErrorIcon color="primary" />,
        title: t('landing:error_404.title'),
        description: t('landing:error_404.description'),
      },
    },
  ];

  const getDataType = (arr: any[], key: string | number, value: any) => {
    const result = arr.filter((obj) => obj[key] === value || obj[key] === 'error_404').map((obj) => obj.detail);
    return result[0];
  };

  const detail = getDataType(typeList, 'type', type);

  return detail;
};

export default landingDetail;
