import Typography from '@components/common/atom/Typography';
import HeaderContainer from './HeaderContainer';
import ProgressTrack from '@components/pages/mypage/atom/ProgressTrack';
import Tooltip from '@components/common/atom/Tooltip';
import { Button } from '@nextui-org/react';

export default function OverallScore({ totalScore }: { totalScore: number }) {
  return (
    <div className="bg-gray01 mt-[36px]">
      <HeaderContainer size="md">
        <Typography variant="header02" fontColor="gray08" className="mb-2">
          종합점수
        </Typography>
        <Typography variant="body03" fontColor="gray04">
          {
            '종합 점수는 동료들이 피어 테스트에서 응답한\n 평가와 활동 횟수를 종합하여 만든 지표예요.'
          }
        </Typography>
        <div className="pt-[63px] pb-[66px] flex justify-center">
          <Tooltip content={`${totalScore}점`}>
            <Button className="bg-transparent w-[488px]">
              <ProgressTrack totalScore={totalScore} />
            </Button>
          </Tooltip>
        </div>
      </HeaderContainer>
    </div>
  );
}