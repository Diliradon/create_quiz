import { ChangeEvent } from 'react';

interface Props {
  description?: string;
  errorText?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextarea: React.FC<Props> = ({
  description = '',
  errorText = '',
  value,
  onChange = () => {},
}) => {
  return (
    <label className="flex w-full flex-col gap-1">
      <div className="w-full">
        {!!value?.length && <small>{description}</small>}

        <textarea
          className="w-full rounded-sm border border-artichoke p-2"
          value={value}
          onChange={e => onChange(e)}
        />
      </div>

      {errorText && <small>{errorText}</small>}
    </label>
  );
};
