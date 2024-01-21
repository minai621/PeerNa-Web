import Typography from '@components/common/atom/Typography';
import Card from '@components/pages/testResult/molecule/Card';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { CardType, Description, Keyword, Value } from '@constants/image';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

interface AnalyzePeerCardProps {
  handleClick: () => void;
}

export default function AnalyzePeerCard({ handleClick }: AnalyzePeerCardProps) {
  const cardTypes = [
    {
      type: 'CardPurple',
      value: Value.CardPurple,
      keyword: Keyword.CardPurple,
      description: Description.CardPurple,
    },
    {
      type: 'CardOrange',
      value: Value.CardOrange,
      keyword: Keyword.CardOrange,
      description: Description.CardOrange,
    },
    {
      type: 'CardPink',
      value: Value.CardPink,
      keyword: Keyword.CardPink,
      description: Description.CardPink,
    },
    {
      type: 'CardYellow',
      value: Value.CardYellow,
      keyword: Keyword.CardYellow,
      description: Description.CardYellow,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // 각 카드의 등장 시간 간격
      },
    }),
  };

  return (
    <Fragment>
      <div className="box-content w-full h-[68px] py-[18px] mt-6 flex items-center justify-between bg-transparent px-5">
        <Typography variant="header01" fontColor="gray07">
          username님의 셀프 테스트 결과를
          <br /> 분석한 피어 카드에요
        </Typography>
      </div>
      <div className="py-6 flex flex-col gap-3">
        {cardTypes.map((card, index) => (
          <motion.div
            key={card.type}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Card
              type={card.type as CardType}
              value={card.value}
              keyword={card.keyword}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          내 피어 유형 확인하기
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
