import SelectListItem from '@components/common/atom/SelectListItem';
import { POSITION_LIST } from '@constants/review';
import useSelfTestInformation from '@hooks/useSelfTestInformation';
import { useEffect } from 'react';

export default function SelectPosition() {
  const { selfTest, handleChangePosition } = useSelfTestInformation();

  useEffect(() => {
    handleChangePosition('');
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {POSITION_LIST.map((position, index) => (
        <SelectListItem
          key={position + index}
          title={position}
          isSelect={selfTest.position === position}
          onClick={() => handleChangePosition(position)}
        />
      ))}
    </div>
  );
}