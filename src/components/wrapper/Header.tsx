import IconButton from '@components/common/atom/IconButton';
import Typography, {
  TypographyProps,
} from '@components/common/atom/Typography';
import { PropsWithChildren } from 'react';

function Header({ children }: PropsWithChildren) {
  return (
    <div className="w-full box-border flex flex-col bg-transparent px-4">
      {children}
    </div>
  );
}

function TopBar({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex items-center justify-between h-[68px] px-2 py-[18px]">
      {children}
    </div>
  );
}

interface BackIconProps {
  handleClick: () => void;
}

function BackIcon({ handleClick }: BackIconProps) {
  return (
    <IconButton
      iconProps={{ id: 'ArrowLeft', color: 'black' }}
      onClick={handleClick}
    />
  );
}

interface TitleProps extends Omit<TypographyProps, 'variant' | 'fontColor'> {
  children: string;
}

function Title({ children, ...typographyProps }: TitleProps) {
  return (
    <Typography {...typographyProps} variant="header02" fontColor="gray08">
      {children}
    </Typography>
  );
}

interface RightButtonProps {
  text: string;
  handleClick: () => void;
}

function RightButton({ text, handleClick }: RightButtonProps) {
  return (
    <button onClick={handleClick} className="ml-auto">
      <Typography variant="body03" fontColor="gray07">
        {text}
      </Typography>
    </button>
  );
}

interface BodyProps {
  className?: string;
  textAlign?: 'left' | 'center';
}

function Body({
  children,
  className,
  textAlign = 'left',
}: PropsWithChildren<BodyProps>) {
  return (
    <div
      className={`w-full flex flex-col ${className} ${textAlign === 'center' ? 'text-center' : 'text-left'}`}
    >
      {children}
    </div>
  );
}

interface AddPersonButtonProps {
  onClick: () => void;
}

function AddPersonButton({ onClick }: AddPersonButtonProps) {
  return (
    <IconButton
      iconProps={{ id: 'AddPerson', width: 25, height: 25, color: 'gray07' }}
      onClick={onClick}
    />
  );
}

interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <IconButton
      iconProps={{ id: 'Search', width: 23, height: 23, color: 'gray07' }}
      onClick={onClick}
    />
  );
}

Header.TopBar = TopBar;
Header.BackIcon = BackIcon;
Header.Title = Title;
Header.RightButton = RightButton;
Header.Body = Body;
Header.AddPersonButton = AddPersonButton;
Header.SearchButton = SearchButton;

export default Header;
