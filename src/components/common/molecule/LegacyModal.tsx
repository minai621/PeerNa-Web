import {
  ModalContent,
  ModalFooter,
  ModalProps as ModalPropsWithNextui,
  Modal as ModalWithNextui,
} from '@nextui-org/react';

import useModal from '@hooks/store/useModal';
import { ReactNode } from 'react';
import Typography from '../atom/Typography';

interface ModalProps extends Omit<ModalPropsWithNextui, 'children'> {
  modalHeader: string;
  modalBody: string;
  footer: ReactNode;
}

export default function Modal({
  modalHeader,
  modalBody,
  footer,
  ...props
}: ModalProps) {
  const { isOpen, openModal, closeModal } = useModal('login');

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalWithNextui
          {...props}
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={handleOpenChange}
          hideCloseButton={true}
          classNames={{
            backdrop:
              'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
          }}
        >
          <ModalContent className="w-[310px] m-auto">
            <div className="pt-10 pb-4">
              <Typography className="text-center mb-5" variant={'header03'}>
                {modalHeader}
              </Typography>
              <Typography className="text-center" variant={'body04'}>
                {modalBody}
              </Typography>
            </div>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContent>
        </ModalWithNextui>
      )}
    </>
  );
}