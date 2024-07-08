import { useEffect } from 'react';

import { AlertProps } from '@mui/material/Alert';
import { Button, Dialog, Grid } from '@mui/material';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'html-react-parser';

const Wrapper = styled(Grid)`
  padding: 10px;
  min-width: 300px;
  max-width: 500px;
  /* .MuiGrid-container{
    border-radius: 10px;
  } */
  .btn-ok {
    max-width: 250px;
  }
`;

interface Props {
  message?: string;
  title?: string;
  description?: string;
  text_btn_confirm?: string;
  text_btn_cancel?: string;
  severity: AlertProps['severity'];
  open: boolean;
  icon?: string | undefined;
  center?: boolean;
  autoClose?: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
  handleAutoClose?: () => void;
  onConfirm?: () => void;
  onOK?: () => void;
}

const Alert = ({
  open,
  handleClose,
  onConfirm,
  autoClose,
  handleAutoClose,
  onOK,
  severity,
  icon,
  title,
  center,
  description,
  text_btn_confirm,
  text_btn_cancel,
}: Props) => {
  const { t } = useTranslation('common');
  const Icon = () => {
    switch (icon) {
      case 'CheckCircleIcon':
        return (
          <CheckCircleIcon
            style={{
              fontSize: '100px',
            }}
            color="success"
          />
        );
      case 'ErrorIcon':
        return (
          <ErrorIcon
            style={{
              fontSize: '100px',
            }}
            color="error"
          />
        );
      case 'InfoIcon':
        return (
          <InfoIcon
            style={{
              fontSize: '100px',
            }}
            color="primary"
          />
        );
    }
  };

  const onClickConfirm = () => {
    handleClose && handleClose();
    onConfirm && onConfirm();
  };

  const onClickClose = () => {
    handleClose && handleClose();
    onOK && onOK();
  };

  useEffect(() => {
    if (autoClose === true) {
      setTimeout(() => {
        handleClose && handleClose();
      }, 1000);
      setTimeout(() => {
        handleAutoClose && handleAutoClose();
      }, 1200);
    }
  }, [autoClose]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Wrapper container>
        <Grid item xs={12} container justifyContent="center">
          {icon && <Icon />}
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <h3>
            {severity === 'error' && ((title && ReactHtmlParser(title)) || t('fail'))}
            {severity === 'success' && ((title && ReactHtmlParser(title)) || t('success'))}
            {severity === 'info' && title && ReactHtmlParser(title)}
          </h3>
        </Grid>
        {/* {title &&
          <Grid item xs={12} container justifyContent="center" textAlign={center ? 'center' : 'unset'}>
            {ReactHtmlParser(title)}
          </Grid>
        } */}
        {description && (
          <Grid item xs={12} container justifyContent="center" textAlign={center ? 'center' : 'unset'}>
            {ReactHtmlParser(description)}
          </Grid>
        )}
        {!autoClose && (
          <Grid item container xs={12} mt={4} rowSpacing={1} columnSpacing={1} justifyContent="center">
            {onConfirm === undefined ? (
              <Button className="btn-ok" onClick={onClickClose} autoFocus fullWidth variant="contained">
                {text_btn_confirm || t('btn_confirm')}
              </Button>
            ) : (
              <>
                <Grid item xs={6}>
                  <Button className="btn-ok" onClick={handleClose} autoFocus fullWidth variant="outlined">
                    {text_btn_cancel || t('btn_cancel')}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button className="btn-ok" onClick={onClickConfirm} autoFocus fullWidth variant="contained">
                    {text_btn_confirm || t('btn_confirm')}
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        )}
      </Wrapper>
    </Dialog>
  );
};

export default Alert;
