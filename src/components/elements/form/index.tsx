import useTranslation from 'next-translate/useTranslation';
import * as React from 'react';
import {
  FormProvider,
  FormProviderProps,
  SubmitHandler,
} from 'react-hook-form';

import { FormContext, FormStateProps } from './context';

export * from './context';

enum RequestMethod {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
}

interface FormProps {
  methods: Omit<FormProviderProps<any>, 'children'>;
  children: React.ReactNode;
  method?: RequestMethod;
  action?: string;
  style?: any;
  defaultEditable?: boolean;
  onSubmit: SubmitHandler<any>;
}

// interface FormFooterProps {
//   showCancel?: boolean;
//   showDelete?: boolean;
//   showSubmit?: boolean;
//   onDelete?: () => void;
//   onCancel?: () => void;
//   isLoading?: boolean;
//   renderRight?: React.ReactNode;
// }

// export function FormFooter(props: FormFooterProps) {
//   const { t } = useTranslation();
//   const {
//     showCancel = false,
//     showDelete = false,
//     showSubmit = true,
//     onDelete,
//     isLoading,
//     renderRight,
//     onCancel,
//   } = props;
//   return (
//     <div className={formStyles.buttonContainer}>
//       <div className={formStyles.buttonLeftContent}>
//         {showDelete && (
//           <>
//             <Button
//               variant="secondary"
//               type="button"
//               onClick={onDelete}
//               loading={isLoading}
//               error
//             >
//               {t('common:delete')}
//             </Button>
//             <div
//               style={{
//                 marginLeft: 24,
//               }}
//             />
//           </>
//         )}
//       </div>
//       <div className={formStyles.buttonRightContent}>
//         {showCancel && (
//           <>
//             <Button variant="secondary" onClick={onCancel}>
//               {t('common:cancel')}
//             </Button>
//             <div
//               style={{
//                 marginLeft: 16,
//               }}
//             />
//           </>
//         )}
//         {showSubmit && <Input type="submit" loading={isLoading} />}
//         {renderRight}
//       </div>
//     </div>
//   );
// }

export default function Form(props: FormProps) {
  const [isEditable, setIsEditable] = React.useState(
    props.defaultEditable !== undefined ? props.defaultEditable : true,
  );
  const { methods, style, children, action, method = 'POST', onSubmit } = props;

  const value = React.useMemo<FormStateProps>(
    () => ({
      editable: isEditable && !methods.formState.isSubmitting,
      setIsEditable,
    }),
    [isEditable, methods.formState.isSubmitting],
  );

  return (
    <FormContext.Provider value={value}>
      <FormProvider {...methods}>
        <form
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            ...style,
          }}
          method={method}
          action={action}
          onSubmit={(e) => {
            if (!action) {
              e.preventDefault();
              methods.handleSubmit(onSubmit)();
            }
          }}
        >
          {children}
        </form>
      </FormProvider>
    </FormContext.Provider>
  );
}
