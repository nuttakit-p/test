// import { AlertProps as AlertPropsMUI } from '@mui/material';
// import React, { ComponentType, useRef } from 'react';
// import Alert from '../Common/Alert';

// interface AlertProps {
//   show: boolean;
//   data?: {
//     severity?: AlertPropsMUI['severity'];
//     icon?: string;
//     title?: string;
//     description?: string;
//     text_btn_confirm?: string;
//     center?: boolean;
//     autoClose?: boolean;
//     onConfirm?: () => void;
//     onOK?: () => void;
//     handleAutoClose?: () => void | boolean;
//   };
// }

// interface EnhancedComponentProps {
//   showAlert: (message: string) => void;
// }

// function withAlert<TProps extends EnhancedComponentProps>(WrappedComponent: ComponentType<TProps>) {
//   const EnhancedComponent = React.forwardRef<any, Omit<TProps, keyof EnhancedComponentProps>>((props, ref) => {
//     const [alertProps, setAlertProps] = React.useState<AlertProps>({
//       show: false,
//       data: {},
//     });
//     const previousMessageRef = useRef<string | null>(null);

//     const showAlert = (data: any) => {
//       if (data !== previousMessageRef.current) {
//         setAlertProps({ show: true, data });
//         previousMessageRef.current = data;
//       }
//     };

//     const hideAlert = () => {
//       setAlertProps({ show: false, data: {} });
//     };

//     return (
//       <>
//         <WrappedComponent {...(props as TProps)} showAlert={showAlert} ref={ref} />
//         {alertProps.show && (
//           <Alert
//             open={alertProps.show}
//             severity={alertProps?.data?.severity}
//             icon={alertProps?.data?.icon}
//             title={alertProps?.data?.title}
//             description={alertProps?.data?.description}
//             center={alertProps?.data?.center}
//             handleClose={hideAlert}
//             onConfirm={alertProps?.data?.onConfirm}
//             text_btn_confirm={alertProps?.data?.text_btn_confirm}
//             onOK={alertProps?.data?.onOK}
//             autoClose={alertProps?.data?.autoClose}
//             handleAutoClose={alertProps?.data?.handleAutoClose}
//           />
//         )}
//       </>
//     );
//   });

//   return EnhancedComponent;
// }

// export default withAlert;
