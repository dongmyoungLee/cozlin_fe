import bookmark_img from '../asset/images/bookmark.png';
import follow_img from '../asset/images/follow.png';
import myHistory from '../asset/images/myhistory.png';
import myProfile from '../asset/images/myprofile.png';
import myAccount from '../asset/images/myaccount.png';
import logout from '../asset/images/logout.png';

const headerMenuList = [
    {
      menuName : '인채 채용',
      menuLink : '/humanResources'
    },
    {
      menuName : '채용 공고',
      menuLink : '/announcement'
    },
];

const mypageMenuList = [
    {
      menuName : '북마크 모아보기',
      imgPath : bookmark_img,
      clickFlag : 'bookmark',
    },
    {
      menuName : '팔로우 모아보기',
      imgPath : follow_img,
      clickFlag : 'follow',
    },
    {
      menuName : '지원 현황',
      imgPath : myHistory,
      clickFlag : 'myHistory',
    },
    {
      menuName : '프로필 관리',
      imgPath : myProfile,
      clickFlag: 'myProfile',
    },
    {
      menuName : '계정 정보',
      imgPath : myAccount,
      clickFlag: 'myAccount',
    },
  {
    menuName : '로그아웃',
    imgPath : logout,
    clickFlag: 'logout',
  },
];


export const headerMenu = headerMenuList;
export const mypageTooltipMenu = mypageMenuList;