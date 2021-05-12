import React from 'react'

export default function ContextIcon ({ icon }) {
  switch (icon) {
    case 'Информация':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.88991 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.29791 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.44991 2.9313 7.44991 3.16749C7.44991 3.4047 7.36 3.60686 7.1807 3.77346Z"
            fill="white"
          />
        </svg>
      )

    case 'Ранг':
    case 'Настройки':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M9.12923 8.49176L8.93786 8.58392L8.38087 9.28235C8.32832 9.34858 8.26146 9.40204 8.18529 9.43872C8.10912 9.4754 8.02563 9.49435 7.94109 9.49414H7.04774L6.54297 9.73723L8.11654 11.8062C8.14277 11.8407 8.17662 11.8687 8.21545 11.8879C8.25428 11.9072 8.29703 11.9172 8.34037 11.9172C8.34939 11.9172 8.35848 11.9168 8.36755 11.9159C8.41527 11.9113 8.46102 11.8945 8.50044 11.8672C8.53987 11.84 8.57166 11.803 8.59281 11.76L9.0857 10.7575L10.1835 10.5503C10.2306 10.5414 10.2746 10.5206 10.3115 10.4899C10.3483 10.4592 10.3766 10.4195 10.3938 10.3748C10.411 10.33 10.4165 10.2816 10.4097 10.2342C10.403 10.1867 10.3842 10.1418 10.3551 10.1036L9.12923 8.49176Z"
            fill="white"
          />
          <path
            d="M4.0574 9.49417C3.97287 9.49438 3.88939 9.47543 3.81323 9.43876C3.73706 9.40208 3.6702 9.34863 3.61765 9.28241L3.06063 8.58398L2.86926 8.49182L1.64334 10.1036C1.61432 10.1418 1.59553 10.1867 1.58876 10.2342C1.58199 10.2817 1.58746 10.3301 1.60466 10.3748C1.62186 10.4196 1.65022 10.4592 1.68704 10.4899C1.72385 10.5206 1.76791 10.5414 1.81502 10.5503L2.91281 10.7575L3.40568 11.7601C3.42683 11.8031 3.45863 11.84 3.49805 11.8673C3.53747 11.8945 3.58322 11.9113 3.63094 11.9159C3.64003 11.9168 3.64909 11.9172 3.65812 11.9172C3.70146 11.9172 3.74421 11.9072 3.78304 11.888C3.82187 11.8687 3.85572 11.8407 3.88195 11.8062L5.45552 9.73727L4.95077 9.49417H4.0574Z"
            fill="white"
          />
          <path
            d="M10.4245 4.89844L10.6376 3.96488C10.647 3.92368 10.647 3.8809 10.6376 3.83971C10.6282 3.79852 10.6097 3.75997 10.5833 3.72694L9.98629 2.9783L9.77322 2.04476C9.76382 2.00357 9.74526 1.96503 9.71891 1.93199C9.69257 1.89896 9.65913 1.87229 9.62106 1.85395L8.75835 1.43848L8.1613 0.689836C8.13496 0.656802 8.10151 0.630129 8.06344 0.611797C8.02538 0.593465 7.98367 0.583945 7.94141 0.583946H6.98387L6.12114 0.168469C6.08307 0.150142 6.04136 0.140625 5.9991 0.140625C5.95685 0.140625 5.91513 0.150142 5.87706 0.168469L5.01433 0.583946H4.05679C4.01454 0.583949 3.97284 0.59347 3.93477 0.611802C3.89671 0.630134 3.86326 0.656806 3.83692 0.689836L3.23987 1.43848L2.37716 1.85391C2.33909 1.87224 2.30564 1.89891 2.2793 1.93194C2.25295 1.96497 2.23439 2.00352 2.22498 2.04471L2.01191 2.9783L1.41489 3.72694C1.38854 3.75997 1.36998 3.79851 1.36057 3.83971C1.35117 3.8809 1.35116 3.92368 1.36056 3.96488L1.57366 4.89844L1.36056 5.832C1.35116 5.87319 1.35117 5.91598 1.36057 5.95717C1.36998 5.99836 1.38854 6.03691 1.41489 6.06994L2.01191 6.81858L2.22498 7.75212C2.23439 7.79331 2.25295 7.83185 2.2793 7.86489C2.30564 7.89792 2.33909 7.92459 2.37716 7.94292L3.23987 8.3584L3.83692 9.10704C3.86326 9.14007 3.89671 9.16674 3.93477 9.18507C3.97284 9.20341 4.01454 9.21293 4.05679 9.21293H5.01433L5.87706 9.62841C5.91513 9.64673 5.95685 9.65625 5.9991 9.65625C6.04136 9.65625 6.08307 9.64673 6.12114 9.62841L6.98387 9.21293H7.94141C7.98367 9.21293 8.02538 9.20341 8.06344 9.18508C8.10151 9.16675 8.13496 9.14007 8.1613 9.10704L8.75835 8.3584L9.62106 7.94297C9.65913 7.92464 9.69257 7.89796 9.71891 7.86493C9.74526 7.8319 9.76382 7.79335 9.77322 7.75216L9.98629 6.81863L10.5833 6.06998C10.6097 6.03695 10.6282 5.99841 10.6376 5.95721C10.647 5.91602 10.647 5.87324 10.6376 5.83205L10.4245 4.89844ZM5.9991 8.34375C4.11238 8.34375 2.57723 6.80871 2.57723 4.92188C2.57723 3.03504 4.11238 1.5 5.9991 1.5C7.88582 1.5 9.42098 3.03516 9.42098 4.92188C9.42098 6.80859 7.88594 8.34375 5.9991 8.34375Z"
            fill="white"
          />
          <path
            d="M6 1.78125C4.26825 1.78125 2.85938 3.19012 2.85938 4.92188C2.85938 6.65363 4.26825 8.0625 6 8.0625C7.73175 8.0625 9.14062 6.65363 9.14062 4.92188C9.14062 3.19012 7.73175 1.78125 6 1.78125ZM6 3.19514C6.05563 3.19514 6.11 3.21164 6.15625 3.24254C6.20251 3.27344 6.23855 3.31737 6.25984 3.36876C6.28113 3.42015 6.2867 3.4767 6.27585 3.53126C6.26499 3.58582 6.23821 3.63593 6.19887 3.67526C6.15954 3.7146 6.10943 3.74138 6.05487 3.75224C6.00031 3.76309 5.94376 3.75752 5.89237 3.73623C5.84098 3.71494 5.79705 3.6789 5.76615 3.63264C5.73525 3.58639 5.71875 3.53202 5.71875 3.47639C5.71875 3.4018 5.74838 3.33026 5.80113 3.27752C5.85387 3.22477 5.92541 3.19514 6 3.19514ZM4.03125 4.5C3.97562 4.5 3.92125 4.4835 3.875 4.4526C3.82874 4.4217 3.7927 4.37777 3.77141 4.32638C3.75012 4.27499 3.74455 4.21844 3.7554 4.16388C3.76626 4.10932 3.79304 4.05921 3.83238 4.01988C3.87171 3.98054 3.92182 3.95376 3.97638 3.9429C4.03094 3.93205 4.08749 3.93762 4.13888 3.95891C4.19027 3.9802 4.2342 4.01624 4.2651 4.0625C4.296 4.10875 4.3125 4.16312 4.3125 4.21875C4.3125 4.29334 4.28287 4.36488 4.23012 4.41762C4.17738 4.47037 4.10584 4.5 4.03125 4.5ZM7.74935 4.81552L7.48172 6.42124C7.47077 6.48691 7.43688 6.54657 7.38608 6.5896C7.33528 6.63264 7.27087 6.65625 7.20429 6.65625H4.79571C4.72913 6.65625 4.66472 6.63264 4.61392 6.5896C4.56312 6.54657 4.52923 6.48691 4.51828 6.42124L4.25065 4.81552C4.24166 4.76163 4.24856 4.70628 4.27051 4.65625C4.29246 4.60622 4.32851 4.56367 4.37425 4.53379C4.41999 4.50391 4.47344 4.488 4.52808 4.488C4.58271 4.488 4.63616 4.50391 4.6819 4.5338L5.25846 4.91037L5.75979 4.08771C5.78489 4.04652 5.82017 4.01248 5.86223 3.98885C5.90429 3.96523 5.95171 3.95283 5.99995 3.95283C6.04819 3.95283 6.09562 3.96523 6.13768 3.98885C6.17974 4.01248 6.21501 4.04652 6.24012 4.08771L6.74147 4.91037L7.31803 4.5338C7.36377 4.50391 7.41722 4.488 7.47185 4.488C7.52649 4.488 7.57994 4.50391 7.62568 4.53379C7.67142 4.56367 7.70747 4.60622 7.72942 4.65625C7.75137 4.70628 7.75827 4.76163 7.74928 4.81552H7.74935ZM7.96875 4.5C7.91312 4.5 7.85875 4.4835 7.8125 4.4526C7.76624 4.4217 7.7302 4.37777 7.70891 4.32638C7.68762 4.27499 7.68205 4.21844 7.6929 4.16388C7.70376 4.10932 7.73054 4.05921 7.76988 4.01988C7.80921 3.98054 7.85932 3.95376 7.91388 3.9429C7.96844 3.93205 8.02499 3.93762 8.07638 3.95891C8.12777 3.9802 8.1717 4.01624 8.2026 4.0625C8.2335 4.10875 8.25 4.16312 8.25 4.21875C8.25 4.29334 8.22037 4.36488 8.16762 4.41762C8.11488 4.47037 8.04334 4.5 7.96875 4.5Z"
            fill="white"
          />
        </svg>
      )

    case 'Отдел':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M3.77238 8.65948L3.62099 8.94062V9.22166C3.62099 9.30813 3.68581 9.3947 3.77238 9.43788L4.46421 9.63245L4.33446 7.94601C4.26964 7.18925 3.62099 6.62706 2.86423 6.69199C2.19394 6.73517 1.6534 7.27571 1.61022 7.94601L1.48047 9.63245L2.1723 9.43788C2.25887 9.41623 2.32369 9.32977 2.32369 9.22166V8.94062L2.1723 8.63794C2.12912 8.55137 2.10747 8.44326 2.10747 8.35679V7.94601C2.10747 7.47029 2.49662 7.08114 2.97234 7.08114C3.44806 7.08114 3.8372 7.47029 3.8372 7.94601V8.35679C3.8372 8.4649 3.81556 8.55137 3.77238 8.65948Z"
            fill="white"
          />
          <path
            d="M4.55178 10.0865L3.66538 9.82706C3.64374 9.82706 3.60045 9.80542 3.57881 9.80542L2.54102 10.8432V11.773L2.86534 11.9676C2.93016 12.0108 3.01673 12.0108 3.08156 11.9676L4.70318 11.0378V10.3027C4.70318 10.2162 4.63836 10.1297 4.55178 10.0865ZM4.27075 10.7567H3.6221V10.3243H4.27075V10.7567Z"
            fill="white"
          />
          <path
            d="M3.38423 8.46482C3.40587 8.44318 3.40587 8.4 3.40587 8.37835V7.94592C3.40587 7.70806 3.2113 7.51349 2.97344 7.51349C2.73559 7.51349 2.54102 7.70806 2.54102 7.94592V8.35671C2.54102 8.4 2.54102 8.42164 2.56266 8.44318L2.75723 8.83243V9.19993C2.75723 9.30804 2.73559 9.39461 2.69241 9.50272L2.97344 9.78376L3.25448 9.50272C3.2113 9.41615 3.18966 9.30804 3.18966 9.19993V8.83243L3.38423 8.46482Z"
            fill="white"
          />
          <path
            d="M5.76177 2.15141L5.99963 2.28105L6.23749 2.15141C6.43206 2.0433 6.66992 2.02166 6.8645 2.10812V1.67569C6.8645 1.54594 6.77803 1.45947 6.64828 1.45947H5.35098C5.22123 1.45947 5.13477 1.54594 5.13477 1.67569V2.10812C5.35098 2.02166 5.58884 2.0433 5.76177 2.15141Z"
            fill="white"
          />
          <path
            d="M2.36851 9.80542C2.34686 9.82706 2.30358 9.82706 2.28194 9.82706L1.39553 10.0865C1.30896 10.1081 1.24414 10.1946 1.24414 10.3027V11.0378L2.10901 11.5351V10.6703L2.67119 10.1081L2.36851 9.80542Z"
            fill="white"
          />
          <path
            d="M6.41084 6.38917L7.7298 5.63241V4.59461C7.7298 4.50815 7.66497 4.42168 7.5784 4.40004L6.71353 4.1189L6.30273 4.48651L6.60542 4.78919C6.77846 4.96222 6.84328 5.24326 6.75681 5.48112L6.41084 6.38917ZM7.08114 4.70272H7.51358V5.13515H7.08114V4.70272Z"
            fill="white"
          />
          <path
            d="M3.8381 4.5739C3.8381 4.29286 4.01103 4.055 4.29218 3.96854L4.96247 3.75232L4.89754 3.68739C4.76779 3.55775 4.70296 3.40636 4.70296 3.23342V1.67663C4.70296 1.30902 4.984 1.02798 5.35161 1.02798H6.64891C7.01652 1.02798 7.29756 1.30902 7.29756 1.67663V3.23342C7.29756 3.40636 7.23273 3.57929 7.10298 3.68739L7.03805 3.75232L7.70834 3.96854C7.96785 4.055 8.16242 4.31451 8.16242 4.5739V5.37394L8.81107 5.00633V1.71991C8.81107 1.63334 8.76778 1.56852 8.70296 1.52523L6.10837 0.0333615C6.04355 -0.00981842 5.95697 -0.00981842 5.89215 0.0333615L3.29756 1.52523C3.23274 1.56852 3.18945 1.63334 3.18945 1.71991V5.02798L3.8381 5.39559V4.5739Z"
            fill="white"
          />
          <path
            d="M5.69658 4.48647L5.28579 4.07568L4.42092 4.35672C4.33435 4.40001 4.26953 4.48647 4.26953 4.57294V5.61084L5.58847 6.3676L5.2425 5.45945C5.15604 5.22159 5.22086 4.96219 5.3939 4.76751L5.69658 4.48647Z"
            fill="white"
          />
          <path
            d="M5.99963 4.18381L6.77803 3.40541C6.82121 3.36213 6.84285 3.31895 6.84285 3.25402V2.75677C6.84285 2.60537 6.7131 2.47573 6.56181 2.47573C6.51853 2.47573 6.45371 2.49727 6.41042 2.51891L5.99963 2.80005L5.54556 2.51891C5.4158 2.43244 5.24287 2.47573 5.17805 2.60537C5.15641 2.64866 5.13477 2.71348 5.13477 2.75677V3.23248C5.13477 3.29731 5.15641 3.34059 5.19959 3.38377L5.50238 3.68645L5.74013 3.92431L5.99963 4.18381Z"
            fill="white"
          />
          <path
            d="M11.7303 6.9297L9.02761 5.39465L6.3249 6.9297C6.28162 6.95135 6.26008 6.95135 6.2168 6.97299V10.4108L6.86545 10.7784V9.97837C6.86545 9.69733 7.03838 9.45948 7.31952 9.37301L8.05463 9.13515L7.86006 8.83247C7.7736 8.72436 7.73031 8.59461 7.73031 8.46486V7.0811C7.73031 6.71349 8.01135 6.43245 8.37896 6.43245H10.3249V8.46486C10.3249 8.59461 10.2816 8.72436 10.2168 8.83247L10.0222 9.13515L10.7573 9.37301C11.0168 9.45948 11.2114 9.71898 11.2114 9.97837V10.7784L11.752 10.4757C11.8168 10.4324 11.8601 10.3676 11.8601 10.2811V7.12438C11.8384 7.03781 11.7951 6.97299 11.7303 6.9297Z"
            fill="white"
          />
          <path
            d="M10.6049 9.78379L9.74008 9.50275C9.35093 9.89189 8.70228 9.89189 8.31313 9.50275L7.44827 9.78379C7.3617 9.80543 7.29688 9.89189 7.29688 9.97836V11.0163L8.9185 11.9459C8.98332 11.9892 9.06989 11.9892 9.13471 11.9459L10.7563 11.0163V9.97836C10.7563 9.89189 10.6915 9.80543 10.6049 9.78379ZM9.24282 11.4054H8.81039V10.973H9.24282V11.4054ZM9.24282 10.5405H8.81039V10.1081H9.24282V10.5405ZM10.3239 10.5405H9.67525V10.1081H10.3239V10.5405Z"
            fill="white"
          />
          <path
            d="M8.16211 7.94595V8.46485C8.16211 8.50814 8.18375 8.55132 8.20539 8.5946L8.55126 9.13514C8.74594 9.39464 9.11344 9.45947 9.37294 9.24325C9.41612 9.19996 9.45941 9.17843 9.48105 9.13514L9.82702 8.5946C9.84855 8.55132 9.8702 8.50814 9.8702 8.46485V7.90267L9.02697 7.72974L8.16211 7.90267V7.94595Z"
            fill="white"
          />
          <path
            d="M9.89184 7.47023V6.86487H8.37833C8.24857 6.86487 8.16211 6.95133 8.16211 7.08108V7.47023L9.02697 7.2973L9.89184 7.47023Z"
            fill="white"
          />
          <path
            d="M6.30198 5.09186L5.9993 4.78918L5.69662 5.09186C5.63169 5.15679 5.61015 5.24326 5.65333 5.32972L5.9993 6.2595L6.34527 5.32972C6.36691 5.24326 6.36691 5.15679 6.30198 5.09186Z"
            fill="white"
          />
          <path
            d="M2.97292 5.39465L0.270217 6.9297C0.205395 6.97299 0.162109 7.03781 0.162109 7.12438V10.3027C0.162109 10.3892 0.205395 10.4541 0.270217 10.4973L0.810758 10.7784V10.3027C0.810758 10.1081 0.897223 9.93519 1.02697 9.82709L1.17837 7.90268C1.26483 6.90817 2.1297 6.17295 3.10267 6.23788C3.98918 6.3027 4.68101 7.01627 4.76747 7.90268L4.91887 9.82709C5.04862 9.95673 5.13508 10.1298 5.13508 10.3027V10.7784L5.78373 10.4108V6.97299C5.74045 6.95135 5.71891 6.95135 5.67562 6.9297L2.97292 5.39465Z"
            fill="white"
          />
        </svg>
      )

    case 'Снять выговор':
    case 'Выдать выговор':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M11.7601 8.74337L7.55601 1.46153C6.86932 0.258592 5.13284 0.258592 4.44863 1.46153L0.242052 8.74337C-0.444635 9.94631 0.410018 11.4407 1.79574 11.4407H10.1916C11.5773 11.4407 12.4468 9.93149 11.7601 8.74337ZM5.99985 9.82527C5.63427 9.82527 5.33045 9.52145 5.33045 9.15588C5.33045 8.7903 5.63427 8.48648 5.99985 8.48648C6.36542 8.48648 6.66924 8.7903 6.65442 9.17317C6.67171 9.52145 6.3506 9.82527 5.99985 9.82527ZM6.60996 5.49767C6.58032 6.01639 6.54821 6.53264 6.51857 7.05136C6.50375 7.21932 6.50375 7.37247 6.50375 7.53797C6.48893 7.81215 6.27403 8.02457 5.99985 8.02457C5.72567 8.02457 5.51324 7.82697 5.49595 7.55279C5.45148 6.74506 5.40455 5.95216 5.36009 5.14444C5.34527 4.93201 5.33045 4.71712 5.31316 4.50469C5.31316 4.15393 5.51077 3.86493 5.83188 3.77354C6.15299 3.69697 6.47163 3.85011 6.60996 4.15393C6.65689 4.26015 6.67171 4.36636 6.67171 4.48987C6.65689 4.82827 6.62478 5.1642 6.60996 5.49767Z"
            fill="white"
          />
        </svg>
      )

    case 'Выдать премию':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M6.4482 9.5558H8.68752L8.14154 9.00983H6.4482C6.37624 9.01049 6.30745 9.03955 6.2568 9.09067C6.20615 9.14179 6.17773 9.21085 6.17773 9.28281C6.17773 9.35478 6.20615 9.42384 6.2568 9.47496C6.30745 9.52608 6.37624 9.55514 6.4482 9.5558Z"
            fill="white"
          />
          <path
            d="M6.44687 10.338H9.13429C9.17748 10.3381 9.22009 10.328 9.25858 10.3084C9.29706 10.2887 9.33033 10.2603 9.35561 10.2252L8.92239 9.79199H6.44687C6.37446 9.79199 6.30501 9.82076 6.2538 9.87197C6.2026 9.92317 6.17383 9.99262 6.17383 10.065C6.17383 10.1375 6.2026 10.2069 6.2538 10.2581C6.30501 10.3093 6.37446 10.3381 6.44687 10.3381V10.338Z"
            fill="white"
          />
          <path
            d="M6.44685 8.7737H7.90403L7.59548 8.46514C7.57523 8.44514 7.56304 8.41841 7.56121 8.39001C7.55937 8.36161 7.56803 8.33352 7.58554 8.31109L7.58538 8.31095L7.64922 8.22772H6.44687C6.37446 8.22772 6.30501 8.25649 6.2538 8.3077C6.2026 8.3589 6.17383 8.42835 6.17383 8.50077C6.17383 8.57319 6.2026 8.64264 6.2538 8.69384C6.30501 8.74505 6.37446 8.77382 6.44687 8.77382L6.44685 8.7737Z"
            fill="white"
          />
          <path
            d="M7.96289 8.49945L9.36841 9.905L8.73087 8.49945H7.96289Z"
            fill="white"
          />
          <path
            d="M8.50868 7.49268L7.91602 8.26508H8.66208L8.50868 7.49268Z"
            fill="white"
          />
          <path
            d="M9.15564 6.66522H6.42924C6.36203 6.66531 6.2976 6.69205 6.25008 6.73959C6.20256 6.78712 6.17584 6.85156 6.17578 6.91877V6.95779C6.17586 7.02499 6.20259 7.08941 6.2501 7.13693C6.29762 7.18445 6.36204 7.21118 6.42924 7.21127H8.43109L8.48206 7.14482C8.49301 7.13056 8.50709 7.11901 8.52321 7.11106C8.53933 7.10311 8.55707 7.09898 8.57504 7.09898H9.36611C9.39423 7.05727 9.40922 7.0081 9.40914 6.95779V6.91877C9.40908 6.85155 9.38235 6.7871 9.33483 6.73957C9.2873 6.69203 9.22286 6.6653 9.15564 6.66522Z"
            fill="white"
          />
          <path
            d="M10.7008 7.65254C10.6284 7.51855 10.5167 7.40996 10.3807 7.34143L10.3643 7.33325H9.98438L10.6094 8.11271L10.7008 7.65254Z"
            fill="white"
          />
          <path
            d="M6.17578 7.71853C6.17586 7.79091 6.20464 7.86029 6.25581 7.91147C6.30698 7.96265 6.37636 7.99145 6.44873 7.99153H7.83232L8.25124 7.44556H6.44873C6.37637 7.44564 6.30699 7.47443 6.25582 7.52561C6.20465 7.57678 6.17586 7.64616 6.17578 7.71853Z"
            fill="white"
          />
          <path
            d="M2.86949 7.72919C2.85771 7.84655 2.87047 7.96509 2.90696 8.07725C2.94344 8.18942 3.00286 8.29278 3.08143 8.38075L3.3342 8.66322L3.64791 8.34951C3.46669 8.29586 3.30765 8.18511 3.19446 8.03375C3.08128 7.8824 3.02002 7.69853 3.01979 7.50953V7.32672C2.93605 7.44579 2.8843 7.58438 2.86949 7.72919Z"
            fill="white"
          />
          <path
            d="M10.9381 6.68007L10.9302 6.66437L10.9224 6.68009C10.8277 6.86849 10.6748 7.02136 10.4864 7.11603L10.4707 7.12391L10.4864 7.13178C10.6748 7.22645 10.8277 7.37932 10.9224 7.56772L10.9302 7.58342L10.9381 7.5677C11.0328 7.3793 11.1856 7.22643 11.374 7.13176L11.3897 7.12391L11.374 7.11603C11.1856 7.02135 11.0328 6.86847 10.9381 6.68007Z"
            fill="white"
          />
          <path
            d="M11.1324 7.70197L11.0345 7.89788C11.0209 7.92512 10.9972 7.94599 10.9685 7.95606C10.9398 7.96612 10.9083 7.96459 10.8807 7.95179L10.8184 8.26507H11.5644L11.1324 7.70197Z"
            fill="white"
          />
          <path
            d="M9.05078 8.26508H10.4327L9.74172 7.40338L9.05078 8.26508Z"
            fill="white"
          />
          <path
            d="M8.8716 8.11271L9.49663 7.33325H8.7168L8.8716 8.11271Z"
            fill="white"
          />
          <path
            d="M6.30223 4.28944C6.30218 4.24995 6.29165 4.21118 6.27169 4.1771C6.25174 4.14302 6.22309 4.11486 6.18867 4.0955C6.17157 4.09842 6.15403 4.0974 6.13738 4.09253C6.12073 4.08765 6.10541 4.07905 6.09258 4.06737C6.08824 4.06711 6.08393 4.06669 6.07952 4.06669H5.98885C5.95777 4.06669 5.92796 4.05434 5.90598 4.03237C5.884 4.01039 5.87166 3.98058 5.87166 3.9495V3.34088C5.87194 3.12375 5.81848 2.90992 5.71605 2.71847C5.61361 2.52702 5.46539 2.3639 5.2846 2.24365C5.10497 2.63138 4.62912 2.8999 4.08929 2.8999C3.59349 2.8999 3.15266 2.67851 2.94365 2.33679C2.7982 2.4606 2.68138 2.61451 2.60125 2.78789C2.52113 2.96128 2.47962 3.14999 2.47958 3.341V3.94946C2.47958 3.98054 2.46724 4.01034 2.44526 4.03232C2.42328 4.0543 2.39348 4.06664 2.3624 4.06664H2.27162C2.24237 4.06664 2.21339 4.07241 2.18636 4.0836C2.15933 4.0948 2.13477 4.11121 2.11408 4.1319C2.0934 4.15259 2.07698 4.17715 2.06579 4.20418C2.05459 4.23121 2.04883 4.26018 2.04883 4.28944C2.04883 4.3187 2.05459 4.34767 2.06579 4.3747C2.07698 4.40173 2.0934 4.42629 2.11408 4.44698C2.13477 4.46767 2.15933 4.48408 2.18636 4.49528C2.21339 4.50648 2.24237 4.51224 2.27162 4.51224H2.36228C2.39336 4.51224 2.42317 4.52458 2.44514 4.54656C2.46712 4.56854 2.47947 4.59835 2.47947 4.62943V4.92378C2.47864 5.14704 2.52189 5.36827 2.60676 5.57477C2.69162 5.78128 2.81642 5.969 2.974 6.12716C3.13157 6.28532 3.31883 6.41082 3.52501 6.49645C3.7312 6.58208 3.95227 6.62616 4.17553 6.62616C4.39879 6.62616 4.61985 6.58208 4.82604 6.49645C5.03223 6.41082 5.21948 6.28532 5.37706 6.12716C5.53464 5.969 5.65943 5.78128 5.7443 5.57477C5.82916 5.36827 5.87242 5.14704 5.87159 4.92378V4.62943C5.87159 4.59835 5.88393 4.56854 5.90591 4.54656C5.92789 4.52458 5.9577 4.51224 5.98878 4.51224H6.07945C6.13852 4.51216 6.19514 4.48867 6.23691 4.4469C6.27867 4.40513 6.30216 4.34851 6.30223 4.28944Z"
            fill="white"
          />
          <path
            d="M6.17578 10.8724C6.17583 10.9376 6.20175 11.0001 6.24786 11.0462C6.29397 11.0923 6.35648 11.1183 6.42169 11.1183H9.16322C9.22842 11.1183 9.29094 11.0923 9.33705 11.0462C9.38315 11.0001 9.40907 10.9376 9.40912 10.8724V10.8182C9.40907 10.753 9.38315 10.6905 9.33705 10.6444C9.29094 10.5983 9.22842 10.5724 9.16322 10.5723H6.42169C6.35648 10.5724 6.29397 10.5983 6.24786 10.6444C6.20175 10.6905 6.17583 10.753 6.17578 10.8182V10.8724Z"
            fill="white"
          />
          <path
            d="M6.12545 8.10961C6.02725 8.02862 5.96311 7.91365 5.94578 7.78754H5.71994C5.72674 8.0633 5.62831 8.33131 5.44464 8.53711L5.10927 8.91188C5.09865 8.92376 5.08572 8.93335 5.07126 8.94006C5.05681 8.94677 5.04113 8.95046 5.0252 8.9509H5.02195C4.99087 8.9509 4.96107 8.93856 4.93909 8.91659L4.40765 8.38515H4.29297V11.1183H6.00944C5.96468 11.0441 5.94101 10.9591 5.94095 10.8724V10.8183C5.94094 10.7474 5.95661 10.6775 5.98686 10.6134C6.01711 10.5494 6.06118 10.4928 6.11589 10.4478C6.06018 10.3996 6.01567 10.3398 5.98546 10.2725C5.95525 10.2053 5.94008 10.1323 5.94099 10.0586C5.9419 9.98496 5.95887 9.91236 5.99073 9.84592C6.02259 9.77947 6.06857 9.72077 6.12545 9.67393C6.06776 9.62639 6.0213 9.56667 5.9894 9.49905C5.9575 9.43144 5.94096 9.35761 5.94096 9.28285C5.94096 9.20809 5.9575 9.13426 5.9894 9.06664C6.0213 8.99903 6.06776 8.93931 6.12545 8.89177C6.06776 8.84423 6.0213 8.78451 5.9894 8.7169C5.9575 8.64929 5.94096 8.57545 5.94096 8.50069C5.94096 8.42593 5.9575 8.3521 5.9894 8.28449C6.0213 8.21687 6.06776 8.15716 6.12545 8.10961ZM4.75879 10.51C4.72191 10.51 4.68587 10.4991 4.65521 10.4786C4.62454 10.4581 4.60065 10.429 4.58654 10.3949C4.57242 10.3609 4.56873 10.3234 4.57593 10.2872C4.58312 10.2511 4.60088 10.2178 4.62695 10.1918C4.65303 10.1657 4.68625 10.1479 4.72242 10.1407C4.75858 10.1335 4.79607 10.1372 4.83014 10.1513C4.86421 10.1654 4.89333 10.1893 4.91381 10.22C4.9343 10.2507 4.94523 10.2867 4.94523 10.3236C4.94518 10.373 4.92552 10.4204 4.89056 10.4554C4.85561 10.4903 4.80822 10.51 4.75879 10.51ZM4.75879 9.81748C4.72191 9.81748 4.68587 9.80655 4.65521 9.78606C4.62454 9.76557 4.60065 9.73645 4.58654 9.70239C4.57242 9.66832 4.56873 9.63083 4.57593 9.59466C4.58312 9.5585 4.60088 9.52528 4.62695 9.4992C4.65303 9.47313 4.68625 9.45537 4.72242 9.44817C4.75858 9.44098 4.79607 9.44467 4.83014 9.45878C4.86421 9.47289 4.89333 9.49679 4.91381 9.52745C4.9343 9.55811 4.94523 9.59416 4.94523 9.63104C4.94518 9.68047 4.92552 9.72786 4.89056 9.76281C4.85561 9.79777 4.80822 9.81743 4.75879 9.81748Z"
            fill="white"
          />
          <path
            d="M10.7508 8.49945L10.1133 9.905L11.5188 8.49945H10.7508Z"
            fill="white"
          />
          <path
            d="M8.98828 8.49945L9.74156 10.1601L10.4948 8.49945H8.98828Z"
            fill="white"
          />
          <path
            d="M4.45585 8.15078C4.62584 8.15058 4.78881 8.08296 4.90901 7.96276C5.02922 7.84256 5.09683 7.67959 5.09703 7.5096V6.61963C4.81426 6.77357 4.49743 6.85422 4.17547 6.85422C3.85351 6.85422 3.53668 6.77357 3.25391 6.61963V7.5096C3.2541 7.67959 3.32172 7.84256 3.44192 7.96276C3.56212 8.08296 3.7251 8.15058 3.89509 8.15078H4.45585Z"
            fill="white"
          />
          <path
            d="M4.56112 1.63184H5.41085C5.58074 1.63165 5.74361 1.56409 5.86374 1.44396C5.98387 1.32384 6.05144 1.16097 6.05163 0.99108V0.922361C5.28072 1.11556 3.65163 0.927283 3.31162 0.88472C3.2754 0.879493 3.23855 0.880699 3.20275 0.888283C3.13 0.905157 3.06514 0.946239 3.0188 1.0048C2.97246 1.06336 2.94738 1.13592 2.94768 1.2106C2.94751 1.3605 2.88789 1.50422 2.78189 1.61022C2.67589 1.71623 2.53218 1.77585 2.38227 1.77603C2.33123 1.77585 2.28133 1.79108 2.23909 1.81973C2.19686 1.84838 2.16425 1.88911 2.14555 1.9366L2.12832 1.97991C1.91295 2.51882 1.91295 3.1199 2.12832 3.65881L2.19953 3.83776C2.21412 3.83548 2.22896 3.83392 2.24406 3.83307V3.34088C2.24413 3.089 2.30543 2.84091 2.42268 2.61799C2.53993 2.39506 2.70961 2.20397 2.91712 2.06119C2.93166 2.05118 2.94827 2.04459 2.96572 2.0419C2.98316 2.03921 3.00099 2.0405 3.01787 2.04567C3.03475 2.05083 3.05024 2.05975 3.06319 2.07174C3.07614 2.08374 3.08622 2.0985 3.09266 2.11493L3.09468 2.12007C3.22593 2.44116 3.63447 2.66537 4.08827 2.66537C4.58564 2.66537 5.01333 2.40462 5.10696 2.04486C5.1082 2.03932 5.10984 2.03388 5.11188 2.02859C5.11782 2.01306 5.127 1.99897 5.1388 1.98726C5.1506 1.97555 5.16476 1.96649 5.18034 1.96067C5.19591 1.95486 5.21255 1.95242 5.22913 1.95353C5.24572 1.95463 5.26189 1.95926 5.27655 1.96709C5.52679 2.09874 5.73626 2.29633 5.88227 2.53847C6.02829 2.78061 6.10529 3.05808 6.10495 3.34084V3.81596C6.34614 3.12913 6.3302 2.37815 6.06007 1.70218L6.02492 1.61396C5.86148 1.7757 5.64079 1.86636 5.41085 1.86622H4.56112C4.53004 1.86622 4.50023 1.85387 4.47826 1.83189C4.45628 1.80991 4.44393 1.78011 4.44393 1.74903C4.44393 1.71795 4.45628 1.68814 4.47826 1.66616C4.50023 1.64419 4.53004 1.63184 4.56112 1.63184ZM4.09338 1.86622H3.85666C3.82558 1.86622 3.79577 1.85387 3.77379 1.83189C3.75182 1.80991 3.73947 1.78011 3.73947 1.74903C3.73947 1.71795 3.75182 1.68814 3.77379 1.66616C3.79577 1.64419 3.82558 1.63184 3.85666 1.63184H4.09338C4.12446 1.63184 4.15426 1.64419 4.17624 1.66616C4.19822 1.68814 4.21057 1.71795 4.21057 1.74903C4.21057 1.78011 4.19822 1.80991 4.17624 1.83189C4.15426 1.85387 4.12446 1.86622 4.09338 1.86622Z"
            fill="white"
          />
          <path
            d="M4.05844 8.38515H3.94377L3.41232 8.91659C3.39034 8.93856 3.36054 8.9509 3.32947 8.9509H3.32612C3.31019 8.95046 3.29451 8.94677 3.28006 8.94006C3.2656 8.93335 3.25267 8.92376 3.24205 8.91188L2.90666 8.53711C2.723 8.3313 2.62458 8.06329 2.63138 7.78754H1.64159C1.32184 7.7879 1.01529 7.91508 0.789187 8.14118C0.563087 8.36728 0.435907 8.67383 0.435547 8.99358V11.1183H4.05844V8.38515Z"
            fill="white"
          />
          <path
            d="M4.70312 8.34956L5.01684 8.66327L5.26961 8.3808C5.39752 8.23794 5.47325 8.05596 5.48446 7.86453C5.49566 7.67311 5.44169 7.48353 5.33133 7.32672V7.50953C5.33111 7.69855 5.26983 7.88243 5.15664 8.0338C5.04344 8.18517 4.88437 8.29592 4.70312 8.34956Z"
            fill="white"
          />
        </svg>
      )

    case 'Удалить':
    case 'Уволить':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M11.6123 9.74125L7.87114 6.00051L11.6123 2.25977C12.1277 1.74373 12.1277 0.906132 11.6136 0.388695C11.0969 -0.13001 10.2604 -0.128676 9.74375 0.38736L5.99999 4.13077L2.25623 0.38736C1.73954 -0.128676 0.903043 -0.13001 0.386353 0.388695C-0.129006 0.906065 -0.129006 1.74366 0.387684 2.25977L4.12884 6.00051L0.387684 9.74125C-0.129006 10.2573 -0.129006 11.0949 0.386353 11.6123C0.644065 11.8716 0.983662 12 1.32199 12C1.66032 12 1.99859 11.8703 2.2563 11.6136L6.00006 7.87018L9.74382 11.6136C10.0015 11.8716 10.3398 12 10.6781 12C11.0165 12 11.3561 11.8703 11.6138 11.6123C12.129 11.0949 12.129 10.2573 11.6123 9.74125Z"
            fill="white"
          />
        </svg>
      )

    case 'Допуск':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M8.16838 7.9844C8.74645 7.18086 9.10183 6.25752 9.21277 5.28291L6.00093 4.36963L2.78906 5.28291C2.89997 6.25749 3.25536 7.18086 3.83345 7.9844C4.3963 8.76673 5.14326 9.39612 6.00093 9.81244C6.85857 9.39612 7.60556 8.76673 8.16838 7.9844V7.9844Z"
            fill="white"
          />
          <path
            d="M5.99945 3.6247L9.2489 4.54871V3.05829L5.99945 2.13428L2.75 3.05829V4.54871L5.99945 3.6247Z"
            fill="white"
          />
          <path
            d="M6.35742 0V1.49042L9.96527 2.51636V4.61943C9.96527 5.98792 9.54449 7.29621 8.74837 8.40286C8.12601 9.26791 7.30282 9.96659 6.35742 10.4348V12C7.78501 11.4437 9.01022 10.4937 9.91208 9.24005C10.8847 7.88804 11.3988 6.29024 11.3988 4.61943V1.43358L6.35742 0Z"
            fill="white"
          />
          <path
            d="M5.64103 10.4348C4.69564 9.96656 3.87243 9.26788 3.25011 8.40284C2.45399 7.29621 2.03319 5.98792 2.03319 4.6194V2.51634L5.64103 1.4904V0L0.599609 1.43358V4.6194C0.599609 6.29022 1.11374 7.88801 2.08638 9.24002C2.98826 10.4937 4.21347 11.4437 5.64103 12V10.4348Z"
            fill="white"
          />
        </svg>
      )

    case 'Зареспавнить':
    case 'Зареспавнить все Т/С':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M1.36344 5.01548C1.74923 5.01548 2.09771 4.78384 2.24693 4.42798C2.86308 2.95999 4.31188 1.92542 6.00089 1.92542C6.93179 1.92542 7.78524 2.24449 8.46946 2.7737L7.93316 2.85672C7.74997 2.88512 7.60747 3.03045 7.58264 3.21414C7.55776 3.39772 7.65672 3.57584 7.82565 3.65175L10.7749 4.97856C10.9042 5.03661 11.0539 5.02545 11.1731 4.94888C11.292 4.87219 11.3643 4.74057 11.3651 4.59895L11.3804 1.34933C11.3814 1.16446 11.2609 1.00097 11.0842 0.947085C10.9073 0.893196 10.7161 0.961591 10.6137 1.11547L10.2072 1.7264C9.12343 0.659516 7.63835 0 6.00089 0C3.51806 0 1.38339 1.51621 0.472954 3.6712C0.346508 3.9699 0.378378 4.31193 0.557407 4.58216C0.736435 4.85249 1.03905 5.01548 1.36344 5.01548Z"
            fill="white"
          />
          <path
            d="M11.4441 7.41794C11.2651 7.14759 10.9624 6.98462 10.6381 6.98462C10.2523 6.98462 9.9038 7.21626 9.75458 7.57212C9.13841 9.04011 7.68961 10.0747 6.00062 10.0747C5.06969 10.0747 4.21625 9.75561 3.532 9.2264L4.06833 9.14343C4.25149 9.11503 4.394 8.96967 4.41887 8.78596C4.44372 8.6024 4.34479 8.42426 4.17586 8.34835L1.22663 7.02154C1.09733 6.96351 0.947583 6.97462 0.828403 7.05122C0.709469 7.12791 0.637183 7.25953 0.63642 7.40112L0.6211 10.6507C0.620066 10.8356 0.740551 10.9991 0.91724 11.053C1.0942 11.1069 1.28539 11.0385 1.38775 10.8846L1.79425 10.2736C2.87803 11.3406 4.36314 12.0001 6.0006 12.0001C8.48347 12.0001 10.6181 10.4839 11.5285 8.3289C11.655 8.03019 11.6231 7.6882 11.4441 7.41794Z"
            fill="white"
          />
        </svg>
      )

    default:
      return null
  }
}
