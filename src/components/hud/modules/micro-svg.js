export default function MicroSvg ({ active }) {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 17.3335C15.3899 17.3335 17.3334 15.39 17.3334 13.0001V6.50013C17.3334 4.09838 15.3996 2.14404 13.0228 2.14404C12.9465 2.1445 12.8706 2.15359 12.7964 2.17113C11.684 2.22505 10.635 2.70451 9.86635 3.51029C9.09767 4.31607 8.66816 5.38651 8.66669 6.50013V13.0001C8.66669 15.39 10.6102 17.3335 13 17.3335Z'
        fill='white'
        fillOpacity={active ? '1' : '0.5'}
      />
      <path
        d='M10.8844 21.3979C11.4665 21.5445 11.9166 22.0422 11.9166 22.6425V22.75C11.9166 23.3483 12.4017 23.8333 13 23.8333C13.5983 23.8333 14.0833 23.3483 14.0833 22.75V22.6425C14.0833 22.0422 14.5334 21.5445 15.1155 21.3979C18.5338 20.5368 21.1538 17.6445 21.5995 14.081C21.6738 13.4873 21.1816 13 20.5833 13C19.985 13 19.5094 13.4887 19.4105 14.0788C18.8953 17.1517 16.2173 19.5 13 19.5C9.78265 19.5 7.10462 17.1517 6.58944 14.0788C6.49052 13.4887 6.01495 13 5.41665 13C4.81834 13 4.32618 13.4873 4.40047 14.081C4.8463 17.6438 7.4662 20.5367 10.8844 21.3979Z'
        fill='white'
        fillOpacity={active ? '1' : '0.5'}
      />
    </svg>
  )
}
