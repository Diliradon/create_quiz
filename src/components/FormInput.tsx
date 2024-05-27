import { ChangeEvent } from 'react';

interface Props {
  title?: string;
  errorText?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<Props> = ({
  title = '',
  errorText = '',
  value,
  onChange = () => {},
}) => {
  return (
    <label className="flex w-full flex-col gap-1">
      <div className="w-full">
        {!!value?.length && <small>{title}</small>}

        <input
          className="w-full rounded-sm border border-artichoke p-2"
          placeholder={title}
          value={value}
          onChange={e => onChange(e)}
        />
      </div>

      {errorText && <small>{errorText}</small>}
    </label>
  );
};
