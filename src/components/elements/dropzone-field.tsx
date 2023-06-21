import { Button, Flex, Image, Text } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { modals } from '@mantine/modals';
import { X } from '@phosphor-icons/react';
import * as React from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { useFormState } from './form/context';
import { linkRegex } from '../../constant/constant-regex';

interface Props extends Omit<DropzoneProps, 'children' | 'onDrop'> {
  name: string;
  size?: number;
  label?: React.ReactNode;
}

export default function DropzoneField(props: Props) {
  const {
    name,
    accept = IMAGE_MIME_TYPE,
    disabled = false,
    multiple = false,
    size = 64,
    ...rest
  } = props;
  const { editable } = useFormState();
  const { control } = useFormContext();
  const { field, fieldState, formState } = useController({
    control,
    name,
  });
  const _disabled = disabled || !editable || formState.isSubmitting;
  const error = fieldState.error?.message;
  const onClickImage = React.useCallback(
    (imageUrl: string) => () => {
      modals.open({
        children: (
          <Image
            src={imageUrl}
            fit="cover"
            // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
          />
        ),
      });
    },
    [],
  );

  const previews = ((field.value || []) as any[]).map((file, index) => {
    const imageUrl = linkRegex.test(file) ? file : URL.createObjectURL(file);
    return (
      <div
        style={{
          position: 'relative',
          border: error ? '0.125rem dashed #FF0000' : '0.125rem dashed #ced4da',
          aspectRatio: 1 / 1,
          width: size,
          height: size,
          overflow: 'hidden',
          borderRadius: 8,
          paddingBottom: 24,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {!formState.isSubmitting && (
          <Button
            variant="default"
            style={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
            w={16}
            h={16}
            p={0}
            onClick={() => field.onChange([])}
          >
            <X color="#FF0000" weight="bold" />
          </Button>
        )}
        <Image
          key={index}
          src={imageUrl}
          fit="contain"
          imageProps={{ onClick: onClickImage(imageUrl) }}
          style={{ cursor: 'pointer' }}
          // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        />
        {editable && (
          <Dropzone
            {...rest}
            accept={accept}
            onDrop={field.onChange}
            disabled={_disabled}
            // multiple={multiple}
            style={{
              border: 'none',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              color: 'black',
            }}
            w={size}
            h={24}
            p={0}
          >
            <Text align="center" fz={14} p={0}>
              Edit
            </Text>
          </Dropzone>
        )}
      </div>
    );
  });

  return (
    <Flex direction="column">
      {typeof props.label === 'string' ? (
        <Text color={error && 'red'} fz={14}>
          {props.label}
        </Text>
      ) : (
        props.label
      )}
      <div>
        {(field.value || []).length ? (
          previews
        ) : (
          <Dropzone
            {...rest}
            accept={accept}
            onDrop={field.onChange}
            disabled={_disabled}
            w={size}
            h={size}
            p={0}
            style={{
              overflow: 'hidden',
              border: error
                ? '0.125rem dashed #FF0000'
                : '0.125rem dashed #ced4da',
            }}
            multiple={multiple}
          >
            <Image width={size} height={size} withPlaceholder />
          </Dropzone>
        )}
      </div>
    </Flex>
  );
}
