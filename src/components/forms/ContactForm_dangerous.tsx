import { css } from '@emotion/react';
import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Button,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useLocale } from '@/hooks/useLocale';
import { table_websiteInquiry } from '@/utils/formObject';
import AirtableError from 'airtable/lib/airtable_error';

type FormInput = {
  name: string;
  organization: string;
  email: string;
  wallet: string;
  inquiry: string;
  privacy: boolean;
};

const validateEmailClient = (email: string) => {
  const re =
    /^([a-zA-Z0-9_-]+(?:.[a-zA-Z0-9_-]+)*)@((?:[a-zA-Z0-9_-]+.)*[a-zA-Z0-9_][a-zA-Z0-9_-]{0,66})[.]([a-z]{2,6}(?:.[a-z]{2})?)$/;
  return re.test(email);
};

const validateWalletAddressClient = (address: string) => {
  const re = /^0x[a-fA-F0-9]{40}$/;
  const re_ens = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.eth$/;
  return re.test(address) || re_ens.test(address);
};

const ContactFormDangerous: FC = () => {
  const { locale, t } = useLocale();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      name: '',
      organization: '',
      email: '',
      wallet: '',
      inquiry: '',
    },
  });

  const [sendStatus, setSendStatus] = useState<number>(0);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    if (!sendStatus) {
      setSendStatus(1);

      if (!data) {
        setSendStatus(3);
        throw new Error('400, Missing application form.');
      }
      const { name, organization, email, wallet, inquiry } = data;

      if (!(name && organization && email && inquiry)) {
        setSendStatus(3);
        throw new Error('400, Missing required fields.');
      } else if (
        !(typeof name === 'string' && 2 < name.length && name.length < 31)
      ) {
        setSendStatus(3);
        throw new Error('Invalid name. (min 3 char, max 30 char)');
      } else if (
        !(
          typeof organization === 'string' &&
          2 < organization.length &&
          organization.length < 31
        )
      ) {
        setSendStatus(3);
        throw new Error('Invalid organization. (min 3 char, max 30 char)');
      } else if (!validateEmailClient(email)) {
        setSendStatus(3);
        throw new Error('Invalid email address.');
      } else if (!validateWalletAddressClient(wallet)) {
        setSendStatus(3);
        throw new Error('Invalid wallet address.');
      } else if (
        !(
          typeof inquiry === 'string' &&
          29 < inquiry.length &&
          inquiry.length < 2001
        )
      ) {
        setSendStatus(3);
        throw new Error('Invalid inquiry. (min 30 char, max 2000 char)');
      } else {
        console.log('New submission: ', data);
        try {
          const newRecords = await table_websiteInquiry.create({
            ...data,
          });
          setSendStatus(2);
          return JSON.stringify({
            message: 'SUCCESS',
            record: newRecords.fields as FormInput,
          });
        } catch (err) {
          setSendStatus(3);
          throw new Error(
            `Failed${
              err instanceof AirtableError ? `: ${err.message}` : ''
            } 😕`,
          );
        }
      }
    }
  };

  const PopupAlerts = (props: { status: number }) => {
    if (props.status === 1) {
      return <Alert severity='info'>Submitting, hold on...</Alert>;
    } else if (props.status === 2) {
      return (
        <Alert
          severity='success'
          onClose={() => {
            setSendStatus(0);
            router.reload();
          }}
        >
          Your inquiry was successfully submitted.
        </Alert>
      );
    } else if (props.status === 3) {
      return (
        <Alert
          severity='error'
          onClose={() => {
            setSendStatus(0);
            router.reload();
          }}
        >
          Invalid submission.
        </Alert>
      );
    } else {
      return <></>;
    }
  };

  return (
    /* handleSubmit() will validate inputs before invoking onSubmit() */
    <div>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: 'light',
          },
        })}
      >
        <form
          css={css`
          display: flex;
          flex-direction: column;
        `}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant='filled'
                label={t.FORM.NAME}
                disabled={!!sendStatus}
                {...register('name', {
                  required: 'your name is required',
                })}
                error={!!errors.name}
                helperText={errors?.name ? errors.name.message : '\u00a0'}
                {...field}
              />
            )}
          />

          <Controller
            name='organization'
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant='filled'
                label={t.FORM.ORGANIZATION}
                disabled={!!sendStatus}
                {...register('organization', {
                  required: 'Your organization is required',
                })}
                error={!!errors.organization}
                helperText={
                  errors?.organization ? errors.organization.message : '\u00a0'
                }
                {...field}
              />
            )}
          />

          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant='filled'
                label={t.FORM.EMAIL}
                disabled={!!sendStatus}
                {...register('email', {
                  required: 'Your email address is required',
                })}
                error={!!errors.email}
                helperText={errors?.email ? errors.email.message : '\u00a0'}
                {...field}
              />
            )}
          />

          <Controller
            name='wallet'
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant='filled'
                label={t.FORM.WALLET}
                disabled={!!sendStatus}
                {...register('wallet', {
                  required:
                    'Your Ethereum address is required (`0x...` or ENS)',
                })}
                error={!!errors.wallet}
                helperText={errors?.wallet ? errors.wallet.message : '\u00a0'}
                {...field}
              />
            )}
          />

          <Controller
            name='inquiry'
            control={control}
            render={({ field }) => (
              <TextField
                variant='filled'
                label={t.FORM.INQUIRY}
                multiline={true}
                minRows={3}
                disabled={!!sendStatus}
                {...register('inquiry', {
                  required: 'Your inquiry is required',
                  maxLength: {
                    value: 2000,
                    message:
                      'Your inquiry must be 2000 characters or fewer in length.',
                  },
                })}
                error={!!errors.inquiry}
                helperText={errors?.inquiry ? errors.inquiry.message : '\u00a0'}
                {...field}
              />
            )}
          />

          <PopupAlerts status={sendStatus} />
          <div
            css={css`
            margin-left: auto;
            margin-right: auto;
          `}
          >
            <Button
              endIcon={<SendIcon />}
              type='submit'
              variant='outlined'
              color='inherit'
              disabled={!!sendStatus}
            >
              {sendStatus
                ? sendStatus === 2
                  ? 'Submitted'
                  : 'Submitting'
                : 'Send'}
            </Button>
          </div>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default ContactFormDangerous;
