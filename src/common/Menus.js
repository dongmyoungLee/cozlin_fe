import bookmark_img from '../asset/images/bookmark.png';
import follow_img from '../asset/images/follow.png';
import myHistory from '../asset/images/myhistory.png';
import myProfile from '../asset/images/myprofile.png';
import myAccount from '../asset/images/myaccount.png';


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
      path : '/bookmark',
    },
    {
      menuName : '팔로우 모아보기',
      imgPath : follow_img,
      clickFlag : 'follow',
      path : '/follow',
    },
    {
      menuName : '지원 현황',
      imgPath : myHistory,
      clickFlag : 'myHistory',
      path : '/myHistory',
    },
    {
      menuName : '프로필 관리',
      imgPath : myProfile,
      clickFlag: 'myProfile',
      path : '/myProfile',
    },
    {
      menuName : '계정 정보',
      imgPath : myAccount,
      clickFlag: 'myAccount',
      path : '/myAccount',
    },
];


export const headerMenu = headerMenuList;
export const mypageTooltipMenu = mypageMenuList;