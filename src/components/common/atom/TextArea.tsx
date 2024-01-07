import { useId, forwardRef, useState, useEffect } from 'react';
import {
  Textarea,
  TextAreaProps as TextAreaPropsWithNextui,
} from '@nextui-org/react';
import { ReactComponent as ClearIcon } from '@assets/icons/clear.svg';

export interface TextAreaProps extends TextAreaPropsWithNextui {
  text: string;
  handleChangeText: (newText: string) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ text, handleChangeText, ...rest }, ref) => {
    const inputId = useId();
    const [inputText, setInputText] = useState<string>('');
    const handleChangeInputText = (newValue: string) => setInputText(newValue);
    const handleClear = () => {
      console.log('hello');
      setInputText('');
    };

    useEffect(() => {
      if (text !== inputText) handleChangeText(inputText);
    }, [inputText, handleChangeInputText]);

    return (
      <Textarea
        ref={ref}
        classNames={{
          inputWrapper: '!h-full',
        }}
        type="text"
        isClearable
        minRows={3}
        maxRows={5}
        id={inputId}
        value={inputText}
        endContent={<ClearIcon className="z-10" onClick={handleClear} />}
        onClear={handleClear}
        onValueChange={handleChangeInputText}
        {...rest}
      />
    );
  },
);

export default TextArea;
