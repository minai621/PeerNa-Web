import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { UtilityKeys } from '@constants/localStorage';
import useGetSearchPeerPart from '@hooks/api/home/search/useGetSearchPeerPart';
import useHistory from '@hooks/common/useHistory';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import useReviewState from '@hooks/store/useReviewState';
import { Spacer, Tab } from '@nextui-org/react';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import Layout from '@pages/mypage/index/organism/Layout';
import { ActivityComponentType } from '@stackflow/react';
import { PartType } from '@type/enums';
import { getAccessToken } from '@utils/token';
import { useEffect, useState } from 'react';
import ReviewButton from '../atom/ReviewButton';
import PeerTypeAvatarList from '../molecule/PeerTypeAvatarList';
import UserProfileList from '../molecule/UserProfileList';

const HomePage: ActivityComponentType = () => {
  const [currentTab, setCurrentTab] = useState('ALL');

  const { data, refetch, isFetchingNextPage, fetchNextPage } =
    useGetSearchPeerPart(currentTab);

  useEffect(() => {
    refetch();
  }, [currentTab]);

  const { push } = useFlow();

  const { openModal: openModalLogin } = useModal('login');
  const { openModal: openModalPush } = useModal('push');
  const { handleClearHistory } = useHistory();
  const { handleClearReviews } = useReviewState();
  useEffect(() => {
    handleClearHistory();
    handleClearReviews();
    // 온보딩을 해본 유저인지 확인
    const hasToken = getAccessToken();
    const isOnboarding = localStorage.getItem(UtilityKeys.IS_ONBOARD);
    const rawIsPushAgree = localStorage.getItem(UtilityKeys.IS_PUSH_AGREE);
    const isPushAgree = rawIsPushAgree === 'true';

    // 온보딩을 안했고, 로그인이 되지 않았다면
    if (!isOnboarding && !hasToken) {
      push('OnboardingPage', { step: '1' });
    }

    // 온보딩을 했고, 로그인이 되어 있는 상태에서 푸시 알림 허용을 안했으면
    if (isOnboarding && hasToken && !isPushAgree) {
      openModalPush();
    }
    // 온보딩을 했고, 로그인이 되어있지 않는다면
    if (isOnboarding && !hasToken) {
      openModalLogin();
    }
  }, []);

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <Content>
        <div className="w-full bg-peer-bg bg-no-repeat bg-cover flex flex-col">
          <Header>
            <Header.Body className="flex pl-5 pt-10 pr-3 pb-4 mb-[163px] relative">
              <Header.Title>PeerNa</Header.Title>
            </Header.Body>
          </Header>
          <Layout>
            <HeaderContainer size="md">
              <Typography variant="header03">
                원하는 유형의 동료를 찾아보세요
              </Typography>
            </HeaderContainer>
            <PeerTypeAvatarList />
            <ReviewButton />
            <UnderlineTabs
              selectedKey={currentTab}
              onSelectionChange={key => setCurrentTab(key as PartType)}
            >
              <Tab key="ALL" title="전체" />,
              <Tab key="PLANNER" title="기획자" />,
              <Tab key="DESIGNER" title="디자이너" />,
              <Tab key="FRONT_END" title="FE 개발자" />,
              <Tab key="BACK_END" title="BE 개발자" />,
            </UnderlineTabs>
            {data && (
              <UserProfileList
                data={data?.pages.flatMap(profile => profile.result)}
              />
            )}
            <IntersectionBox ref={intersectionRef} />
            {isFetchingNextPage && <Spinner />}
          </Layout>
        </div>
        <Spacer y={12} />
      </Content>
      <Footer bottom={0}>
        <BottomNavigation />
      </Footer>
    </AppScreenContainer>
  );
};

export default HomePage;
