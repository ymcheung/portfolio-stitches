import { styled } from '../stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  width: '$18',
  height: '$24'
});

const Island = styled('path', {
  fill: 'hsl($shade600)'
});

function IconTaiwan() {
  return(
    <Icon viewBox="0 0 18 24" aria-labelledby="iconTaiwan" xmlns="http://www.w3.org/2000/svg">
      <title id="iconTaiwan">Located in Taiwan</title>
      <Island d="M13.9424 0L13.9105 0.00472904L13.8868 0.0290225L13.8749 0.0620831H13.731L13.6858 0.0182254L13.659 0.0344209V0.0755794L13.6323 0.091775L13.5122 0.107971L13.4973 0.07288L13.4825 0.0863763L13.4766 0.124836L13.4432 0.149129L13.3624 0.168024L13.3297 0.190287L13.2904 0.201084L13.2066 0.361701L13.1918 0.3644L13.1043 0.353603L13.0746 0.375197L13.0716 0.413656L13.0479 0.43795L13.0264 0.500702L13.0086 0.525643L13.0027 0.566132L12.9819 0.593794L12.9248 0.631584L12.9011 0.656547L12.8951 0.697036L12.8469 0.781382L12.8017 0.792827L12.775 0.790128L12.7809 0.814421L12.8618 0.882572L12.907 0.885271L12.9908 0.921031L13.0264 0.977716L13.0598 0.999979L13.0835 1.02697L13.1347 1.12281L13.1406 1.28612L13.1198 1.30232L13.1139 1.26723L13.0954 1.23147L13.0894 1.19638L13.042 1.13902L13.039 1.10056L13.0234 1.06277L12.904 0.96694L12.8321 0.93185H12.7869L12.7602 0.953444L12.7453 1.0054L12.6578 1.08163L12.5829 1.10862L12.5532 1.12818L12.5176 1.13628L12.4182 1.19633L12.2958 1.23142L12.2654 1.25032L11.9806 1.25302L11.9235 1.30227L11.8849 1.31577L11.8397 1.31307L11.7804 1.26988L11.7441 1.25909L11.6602 1.27528L11.6365 1.29688H11.5913L11.3932 1.3704L11.3428 1.3731L11.3035 1.39537L11.2167 1.47432L11.1329 1.50941L11.0966 1.53707L10.8088 1.6052H10.7613L10.6924 1.63759L10.659 1.66525L10.6174 1.67605L10.5782 1.69764L10.5485 1.728L10.4884 1.76309L10.4528 1.77389L10.4254 1.79885L10.3868 1.80425L10.2933 1.84204L10.1828 1.92978L10.1257 2.00603L10.099 2.02492L10.0746 2.08767L10.0026 2.1693L9.99967 2.20776L10.0211 2.23475V2.3137L9.9789 2.35486L9.94923 2.37105L9.91883 2.39869L9.90399 2.42839L9.83205 2.51543L9.80238 2.53769L9.66144 2.7253L9.67034 2.76646L9.68815 2.79952L9.55611 2.94934L9.54127 3.02289L9.51754 3.04179L9.50567 3.08025L9.45746 3.1349L9.4456 3.16459L9.41889 3.18619L9.38258 3.19968L9.26241 3.35017L9.23274 3.37447L9.24757 3.43992L9.24164 3.46151L9.25351 3.47296L9.29875 3.47566L9.30468 3.51075L9.28688 3.54381L9.27798 3.62005L9.25944 3.64435L9.25648 3.7287L9.21197 3.78333L9.2001 3.81639L9.23274 3.84068L9.21494 3.86228L9.2001 3.90073L9.14596 3.94729L9.01393 3.99858L8.99316 4.02622L8.96275 4.05051L8.93309 4.11057V4.15172L8.92418 4.18411L8.90342 4.20908L8.89081 4.24417L8.75956 4.3454L8.72322 4.3616L8.69948 4.38589L8.69652 4.42435L8.73805 4.42975L8.75659 4.46484L8.79219 4.479L8.83741 4.4844L8.85521 4.506L8.82483 4.52219L8.77143 4.51139L8.74695 4.4898L8.65425 4.45944H8.59714L8.49259 4.5033L8.36055 4.5087L8.31308 4.56063L8.27377 4.56603L8.20185 4.68076L8.18702 4.75161L8.16329 4.7705L8.19889 4.7948L8.23817 4.81099L8.24114 4.84673L8.21669 4.84133H8.18405L8.12101 4.87642L8.12991 4.92028L8.12101 4.95334L8.09431 4.91758L8.03127 4.86832L7.95636 4.88519L7.92895 4.91218L7.92598 4.92838L7.87258 4.99113L7.64116 5.60993L7.61446 5.64027L7.58479 5.70842L7.46165 5.85554L7.44682 5.88523L7.37488 5.97027L7.28516 6.03842L7.21025 6.06271L7.20432 6.11197L6.98847 6.3846L6.94323 6.48512L6.94916 6.56745L6.9462 6.57825L6.91653 6.61334L6.90392 6.6437L6.83865 6.6707L6.81418 6.70913L6.7037 6.77728L6.70666 6.80698L6.71853 6.83194L6.7215 6.87783L6.70073 6.90009L6.64317 6.88322L6.70963 6.91089L6.7215 6.93788L6.69776 6.96822L6.67626 6.98441L6.62285 6.92168L6.60135 6.93248L6.57465 6.95947L6.52347 6.98441L6.52644 7.0222L6.50864 7.04987L6.44266 7.08496L6.42189 7.11532L6.52051 7.23814L6.51754 7.27324L6.49677 7.3009L6.48787 7.33329L6.46342 7.29213L6.4671 7.25704L6.43079 7.29213L6.39519 7.28943L6.38555 7.24894L6.40705 7.2105L6.40409 7.17271L6.37368 7.19971L6.32028 7.33873L6.35885 7.36639L6.37368 7.39608L6.38852 7.40688L6.39148 7.40148L6.43376 7.42578V7.46693L6.41892 7.49997L6.32621 7.62211L6.29877 7.64167L6.26317 7.72332L6.26614 7.76716L6.2298 7.77526L6.24167 7.80765L6.25724 7.82654L6.2209 7.84341L6.14376 7.93315L6.14305 7.93585L6.08001 8.02829L6.05034 8.04514L5.9183 8.04784L5.92423 8.08023L5.96057 8.10789L5.95761 8.18684L5.93313 8.20573L5.9183 8.23543L5.9094 8.27388L5.88863 8.30088L5.88566 8.38321L5.8827 8.39131L5.85825 8.4237V8.46486L5.87308 8.49186L5.86715 8.53301L5.83452 8.56001L5.76257 8.58497L5.74477 8.62276L5.69063 8.67469L5.6847 8.75094L5.66987 8.7813L5.60682 8.7921L5.57348 8.81639L5.53491 8.82179L5.4778 8.86025L5.44516 8.87105L5.43626 8.90614L5.33983 8.97157L5.32203 9.03702V9.08358L5.30126 9.11664L5.29533 9.15173L5.26494 9.17062L5.25011 9.24145L5.193 9.24482L5.1485 9.23605L5.11513 9.26101L5.09139 9.36696L5.10029 9.39192H5.19004V9.41081L5.07656 9.56603L5.07063 9.56333L5.06099 9.60719L5.04022 9.63148L5.03132 9.66454L5.00758 9.68614L4.9772 9.79007L4.92677 9.84136L4.91416 9.88118L4.86966 9.93583L4.85483 9.96822L4.83332 9.99048L4.82739 10.0377L4.79772 10.0519L4.77102 10.0735L4.73765 10.0897L4.71688 10.1173L4.68353 10.1335V10.1632L4.70501 10.1909L4.68946 10.2017H4.64496L4.62419 10.2287L4.61752 10.3076L4.60862 10.3299H4.51888L4.48921 10.3157L4.45586 10.3103L4.444 10.3434L4.40246 10.3461L4.25855 10.5802L4.25559 10.5944L4.20441 10.5917L4.17403 10.6079L4.12656 10.6599L4.11173 10.6949L4.10579 10.7766L4.08132 10.8015L4.07539 10.8366L4.11469 10.8886L4.10876 10.927L4.06946 10.9783L3.99455 10.981L3.98565 11.0141V11.0546L3.93447 11.0795V11.1315L3.93151 11.1288L3.91964 11.1342L3.91074 11.1693V11.2104L3.92261 11.2401L3.96785 11.2428L4.00048 11.2867L3.94634 11.3467L3.91371 11.4068L3.90481 11.4391L3.85959 11.5073L3.83585 11.5835L3.80545 11.6247L3.74315 11.7853L3.74908 11.9466L3.74018 11.979L3.74315 12.0093L3.78468 12.0282L3.78172 12.064L3.74611 12.0775L3.69494 12.1126L3.70681 12.1591L3.73351 12.1726L3.76985 12.178L3.77281 12.2192L3.74908 12.2462V12.3278L3.77875 12.3474L3.82695 12.4074L3.85959 12.4317L3.82992 12.4479L3.80842 12.4837L3.76688 12.4864L3.75501 12.456L3.73054 12.4371L3.69494 12.456L3.6408 12.5133L3.6052 12.5295L3.5963 12.7259L3.61706 12.759L3.6586 12.7725L3.79361 12.7644L3.82698 12.7779V12.819L3.80844 12.8487L3.79657 12.8872L3.77581 12.9115V12.9553L3.758 12.9877L3.7669 13.0316L3.80547 13.0505H3.84478L3.79361 13.1409L3.79064 13.1787L3.82698 13.1868V13.2225L3.80251 13.2907L3.80547 13.3312L3.82401 13.3642L3.85368 13.3858L3.88703 13.3588L3.90186 13.3777L3.9078 13.454L3.88406 13.4897L3.85368 13.5983L3.7669 13.6314L3.73353 13.6287L3.66233 13.7785L3.65862 13.8879L3.66826 13.9202H3.758L3.79657 13.9337L3.80547 13.9695L3.78174 13.9479L3.61113 13.9202L3.51845 14.0674L3.53328 14.095L3.55701 14.0977L3.54218 14.1382L3.51178 14.1578L3.50584 14.1956L3.57185 14.2313L3.59926 14.2367L3.63783 14.2259L3.58668 14.2941L3.50584 14.3211L3.48507 14.3487L3.49101 14.3865L3.50881 14.4196L3.44947 14.4708L3.43983 14.5066L3.42203 14.5363L3.36493 14.5228L3.35009 14.5504L3.33229 14.624L3.33526 14.7056L3.21805 14.9047L3.20619 14.981L3.17058 15.0356L3.19729 15.0053L3.23362 14.9918L3.26923 14.9891L3.28406 15.1611L3.31148 15.18L3.34708 15.1935L3.32631 15.3083L3.24846 15.338H3.24253L3.15872 15.3629L3.08381 15.4257L3.00593 15.458L3 15.5343L3.00593 15.5451L3.01187 15.6247L3.02967 15.6436H3.07491L3.07194 15.7719L3.08974 15.8238L3.14018 15.8778L3.14685 15.8946L3.19135 15.8805L3.24846 15.8373L3.25439 15.8724L3.24846 15.9108L3.35895 15.9709L3.38045 15.9763L3.42199 16.0114L3.49689 16.0471L3.59036 16.1369L3.62597 16.1531L3.75207 16.2597L3.75504 16.2705L3.83588 16.3414L3.89296 16.4203L3.93153 16.4122L3.98567 16.3663L4.01831 16.3494L3.99457 16.396L3.9738 16.4203V16.4479L4.05168 16.4668L4.01237 16.4972L3.96787 16.4945L3.9434 16.4641L3.92263 16.4533L3.94043 16.4945L3.96787 16.5269L3.97974 16.5626L3.96787 16.7698L3.95527 16.7995L3.96787 16.8353L4.00941 16.8785L4.02721 16.9689L4.09915 17.1052V17.1457H4.11472L4.12065 17.1106L4.13549 17.083L4.1807 17.0803L4.23114 17.1896L4.22521 17.2247L4.1807 17.2301L4.14735 17.2112L4.12955 17.1842L4.12065 17.2031L4.12362 17.2415L4.14142 17.2901L4.14439 17.3286L4.18664 17.4021V17.4318L4.39878 17.8873L4.40248 17.9258L4.43809 17.9993L4.4707 18.0371L4.58493 18.2612L4.69248 18.3813L4.64204 18.4353L4.54933 18.3509L4.60867 18.4818L4.51299 18.5662L4.50706 18.6566L4.49519 18.6917L4.50706 18.7302L4.57307 18.7848L4.59383 18.8145V18.8557L4.6146 18.8773L4.61164 18.9184L4.58493 18.9346L4.60274 18.9589L4.63907 18.9751L4.66874 19.0493L4.73176 19.106L4.74659 19.1364L4.777 19.1742L4.8037 19.191L4.82744 19.2153L4.84301 19.245L4.91421 19.3273L4.93275 19.3651L4.86971 19.3759L4.85784 19.3901V19.4036L4.89641 19.4117L4.97428 19.409L4.98912 19.4117L5.06775 19.4879L5.10039 19.5041L5.15453 19.5588L5.16936 19.5891L5.46012 19.7963L5.50165 19.8125L5.56766 19.8671L5.69673 19.9022L5.70267 19.8887L5.6819 19.575L5.70267 19.5122L5.72343 19.4879L5.76274 19.496V19.5372L5.74494 19.5615L5.74197 19.6431L5.7301 19.6708L5.74791 19.7085L5.75087 19.9049L5.81985 19.9103L5.86732 19.9515L5.86435 19.9899L5.84358 19.9953L5.88583 20.0466L6.00524 20.1263L6.02675 20.1532L6.05938 20.1667L6.07422 20.1694L6.07051 20.1688L6.07422 20.1775L6.14616 20.2052L6.17357 20.2322L6.20917 20.2544L6.27815 20.276L6.30485 20.2976L6.34119 20.3138L6.36492 20.3334L6.40423 20.3496L6.43093 20.3712L6.65864 20.4832L6.68535 20.5129L6.72465 20.5244L6.98204 20.712L7.00354 20.7396L7.05101 20.8564L7.04211 20.8732L7.17118 20.9522L7.30915 21.1101L7.32102 21.1431V21.2464L7.36327 21.3091L7.38107 21.3827L7.3781 21.4211L7.36624 21.4535L7.3692 21.4866L7.46488 21.5601L7.48565 21.5871L7.51605 21.6094L7.53385 21.6364L7.55759 21.7126L7.63546 21.7861L7.61469 21.8246V21.8657L7.62359 21.9035L7.65101 21.9305L7.68958 22.0372L7.69255 22.1573L7.71628 22.2281V22.2693L7.73185 22.2963L7.74372 22.3428L7.77339 22.3671L7.79119 22.3941L7.79786 22.4326L7.83049 22.4623L7.83643 22.5392L7.85423 22.5662L7.85126 22.6074L7.83346 22.6343L7.71032 22.6667L7.71626 22.7025L7.75853 22.7106L7.7704 22.7383L7.76743 22.7518L7.77633 22.7868L7.79116 22.8145L7.77633 22.8415L7.75556 22.8631L7.69549 22.8961L7.68955 22.9312L7.71329 22.9562L7.62357 23.0324V23.1114L7.65989 23.1303V23.1714L7.68955 23.1957L7.68065 23.2288L7.77336 23.3023L7.78226 23.332L7.81267 23.3597L7.83047 23.3867L7.84234 23.4413L7.82157 23.5067L7.82454 23.635L7.79783 23.6923L7.8186 23.7166L7.86014 23.722L7.88164 23.7928L7.90538 23.8286L7.99806 23.8367L8.0344 23.7847L8.0611 23.7659L8.06704 23.7301L8.04924 23.662L8.06407 23.6323L8.09744 23.6188L8.14491 23.5722L8.17532 23.5587H8.21982L8.23169 23.5884L8.33109 23.6512L8.34296 23.6539L8.3971 23.6512L8.43567 23.6593L8.4505 23.6869L8.48684 23.695L8.51948 23.7139L8.56469 23.7274L8.60993 23.7301L8.69967 23.8124L8.70264 23.8502L8.74714 23.8637L8.76865 23.8806L8.78348 23.9076L8.78645 23.9454L8.84946 24H8.89397L8.92437 23.9811L8.91844 23.9454L8.89397 23.9265L8.88507 23.8914L8.88803 23.8529L8.87617 23.8232L8.75975 23.6619V23.504L8.77161 23.4737L8.75678 23.444L8.76865 23.3785L8.79238 23.3704L8.79535 23.3347L8.87617 23.3239L8.91547 23.3104L8.93031 23.2834L8.96591 23.2753L8.99631 23.253L9.00818 23.2206L9.01115 23.1822L9.03192 23.1606L9.07419 23.1579L9.08309 23.0843L9.16984 23.0324L9.17874 23.002L9.13127 22.9481L9.12831 22.7463L9.10089 22.7105V22.6694L9.16391 22.5729L9.18764 22.5499V22.5169L9.15204 22.5034L9.10386 22.4568L9.08902 22.4217L9.08309 22.3178L9.08902 22.3029L9.10979 22.3016L9.12166 22.2881L9.13872 22.2773L9.14615 22.2617L9.12539 22.232L9.12688 22.1531L9.10685 22.1255L9.11278 22.112L9.12536 22.0998L9.13279 22.0863L9.13725 22.0701L9.13279 22.0533V22.0128L9.12536 21.9918L9.11575 21.9797L9.11724 21.9554L9.10241 21.9378L9.09498 21.9196L9.09944 21.8845L9.13281 21.8595L9.14172 21.8461L9.14618 21.8312L9.14767 21.7914L9.14174 21.7738V21.759L9.1462 21.7482L9.12543 21.7259L9.14324 21.6551L9.16697 21.6308L9.17884 21.6011L9.1551 21.5761L9.1284 21.2192L9.09802 21.1834L9.09209 21.0667L9.10692 21.0363V20.9601L9.17587 20.7637L9.23594 20.709L9.24781 20.6004L9.26858 20.5728L9.35315 20.3548L9.37392 20.3305L9.38578 20.3001L9.431 20.2455L9.4399 20.2077L9.46364 20.18L9.46957 20.1038L9.49034 20.0795L9.50294 20.0033L9.53261 19.9675L9.52964 19.9216L9.58081 19.8312V19.7495L9.60158 19.7306V19.6895L9.67053 19.5424V19.4877L9.7002 19.4715V19.4303L9.71577 19.3953L9.71874 19.3568L9.73951 19.3298L9.74544 19.2941L9.76324 19.2671L9.80255 19.2482L9.82332 19.2205L9.90713 19.1524L9.95386 19.0909L9.95535 19.0613L9.97316 19.0295L9.97762 18.9168L9.98208 18.904L9.97911 18.8662L9.99692 18.8331L9.99988 18.7953L10.0214 18.7704L10.0273 18.7353L10.054 18.7077L10.0748 18.6395L10.1141 18.5828L10.1408 18.5606L10.2372 18.5228L10.2639 18.5005L10.3062 18.4978L10.3299 18.4708L10.3388 18.4378L10.4018 18.4108L10.453 18.3723L10.4827 18.3588L10.5034 18.3345L10.5457 18.3318L10.5694 18.3102L10.6147 18.3042L10.6473 18.2907L10.671 18.2718L10.7222 18.2583L10.7704 18.2306L10.8602 18.1328L10.8965 18.1193L10.9232 18.1024L10.941 18.0781L11.0011 18.0343L11.0189 18.0073L11.0463 17.9857L11.1116 17.9608L11.1627 17.9176L11.1931 17.7455L11.2258 17.7158L11.2651 17.7104L11.3155 17.6692L11.3274 17.6335L11.3007 17.5741L11.3096 17.5356L11.2858 17.5113L11.2554 17.4972L11.2406 17.4702L11.2584 17.4432H11.3036L11.2947 17.4155L11.2525 17.3724L11.2376 17.3447L11.2436 17.3096L11.2614 17.2846L11.3993 17.1814L11.4801 17.1706L11.5135 17.1592L11.5884 17.176L11.5914 17.1106L11.6485 17.0559L11.6841 17.0478L11.7115 17.0256L11.7264 16.9574L11.7768 16.8623L11.828 16.8184L11.9088 16.6578L11.9147 16.5897L11.9303 16.5843L11.9511 16.5512L11.9778 16.5296L12.02 16.5269L12.0319 16.4972L12.1098 16.423V16.3825L12.1216 16.3495L12.1394 16.3306L12.1698 16.2212L12.1936 16.1862L12.2173 16.1234L12.2418 16.0991L12.2685 16.0823L12.2744 16.0472L12.3019 16.0114L12.3226 15.8886L12.3464 15.8589L12.3797 15.7523L12.4272 15.6902V15.649L12.4457 15.622V15.5809L12.4783 15.5647L12.4991 15.5397L12.5889 15.537L12.6192 15.5235L12.6704 15.4338L12.7001 15.4115L12.7869 15.4088L12.8076 15.3461L12.7357 15.278L12.7327 15.1612L12.7661 15.1309L12.772 15.0519L12.7631 15.0135L12.7179 14.9318L12.7105 14.7604L12.7809 14.7166L12.778 14.6869L12.7542 14.6646L12.7809 14.6538L12.8017 14.6842L12.8351 14.6896L12.8707 14.6646L12.8892 14.6376L12.8766 14.6073L12.8558 14.583L12.8981 14.4466L12.9011 14.4055L12.9129 14.3731L12.9367 14.3461L12.9456 14.2584L12.973 14.2341L12.976 14.1983L12.9908 14.1686L13.0234 14.141L13.042 14.114L13.0687 14.0458L13.0983 14.0242L13.1347 14.0161H13.1792L13.2155 13.9939L13.2422 13.8738L13.2392 13.7543L13.2815 13.672L13.326 13.3967L13.3594 13.3778V13.3366L13.4461 13.1382L13.455 13.0586L13.4669 13.0262V12.985L13.4855 12.9526L13.4461 12.9304L13.4372 12.9196L13.4795 12.9169L13.5151 12.9034L13.5389 12.8791L13.5514 12.846L13.5544 12.7671L13.5151 12.7124V12.6308L13.5003 12.5951L13.4884 12.587L13.4944 12.5411L13.5151 12.5107L13.5181 12.4318L13.5478 12.3609L13.5514 12.3198L13.59 12.2685L13.5989 12.2327L13.6323 12.2057L13.653 12.1403L13.656 12.0552L13.6768 12.0175L13.6797 11.7421L13.7102 11.7091L13.722 11.6355L13.7576 11.622L13.7821 11.5977L13.7636 11.5728L13.7606 11.5458L13.7821 11.5235L13.8028 11.3737L13.8177 11.3467L13.8236 11.311L13.8444 11.2867L13.8266 11.232L13.8058 11.2185L13.8088 11.1801L13.8236 11.1504V11.1119L13.8629 11.0876L13.9467 10.9702L13.9794 10.8312L13.9675 10.8015V10.5748L13.9979 10.5012L14.0602 10.425L14.0669 10.3872L14.1114 10.3022L14.1173 10.2671L14.1321 10.2367V10.1962L14.1774 10.1031L14.1863 10.0295L14.2011 10.0026L14.2041 9.88243L14.2167 9.84667L14.2315 9.68875L14.2434 9.65906L14.2404 9.53893L14.207 9.47348L14.2315 9.40803L14.2582 9.38373L14.273 9.348L14.2975 9.3291H14.3331L14.3509 9.35339L14.3961 9.3507L14.4139 9.28524H14.3754L14.4021 9.23059L14.4384 9.21979L14.4228 9.1928L14.4317 9.15706L14.4651 9.16516L14.4888 9.09161V9.05112L14.3182 8.88983L14.3064 8.81898L14.2915 8.79199L14.2886 8.53556L14.3242 8.47821L14.4065 8.40466L14.4428 8.3871L14.5192 8.30679L14.5519 8.29664L14.5852 8.244L14.5941 8.2494L14.6001 8.2386L14.6119 8.12657L14.6297 8.11037L14.5726 8.01724V7.89441L14.5971 7.82356L14.6898 7.70954L14.7195 7.69268L14.741 7.66839L14.7766 7.66029L14.8544 7.59754L14.8937 7.59214L14.9234 7.57054L14.9953 7.45311L15.0791 7.44502L15.0851 7.44232L15.1036 7.40116L15.1392 7.38766L15.1659 7.33031L15.1934 7.31141L15.1963 7.19129L15.2594 7.10694L15.3128 7.06308L15.3342 7.03069L15.3699 7.01653L15.3847 6.98953L15.3817 6.8748L15.3639 6.84781L15.3669 6.76886L15.427 6.66493L15.4359 6.63254L15.4722 6.57789L15.4841 6.34305L15.4959 6.30796L15.5167 6.283V6.23711L15.5404 6.16086L15.5827 6.10893L15.5945 6.07047L15.6576 6.03538L15.6813 6.01041L15.7117 5.95373L15.7147 5.91527L15.8222 5.82285L15.9305 5.78169H15.975L15.9877 5.77629L15.9543 5.7601L15.9305 5.73783L15.9127 5.71084V5.66968L15.8527 5.63729L15.8408 5.53066L15.8823 5.50636L15.9031 5.4787L15.981 5.46521L16.047 5.42742L16.0863 5.41932L16.0982 5.38356L16.0952 5.35117L16.0804 5.31273L16.0774 5.27427L16.0596 5.24998L16.0529 5.17373L16.0715 5.14944L16.05 5.11907L16.0655 5.08668H16.11L16.1041 5.05634L16.0804 5.03745L16.0744 5.02665L16.11 5.01249L16.0804 5.01855L16.0381 5.00439L16.0351 4.9774L15.978 4.93084L15.9877 4.89575L16.0292 4.89305L16.0655 4.91194L16.0715 4.9504L16.113 4.9477L16.1493 4.93084L16.0626 4.85189L15.9906 4.8303L15.981 4.8141L15.9691 4.81075L15.9305 4.76217L15.9276 4.73451L15.8408 4.53813L15.8378 4.45648L15.8193 4.43219L15.8282 4.41869V4.37483L15.8164 4.33907L15.8282 4.1184L15.7592 4.05025L15.7385 4.01786V3.98212L15.7058 3.94703L15.691 3.87348L15.694 3.83502L15.6695 3.81343L15.6814 3.51044L15.6969 3.46391V3.42342L15.7266 3.36337L15.7207 3.28442L15.7444 3.21897L15.7474 3.18053L15.8045 3.06919L15.8104 3.03073L15.8408 2.98417L15.8764 2.96798L15.9001 2.90525L15.9216 2.88095L15.9543 2.87016L16.044 2.77432L16.0744 2.76083L16.1493 2.68188L16.1553 2.60565L16.1671 2.57259L16.2331 2.5375L16.2687 2.5294L16.3051 2.48285L16.3331 2.46242L16.3622 2.44979L16.4216 2.37356L16.4282 2.33307L16.4698 2.31081L16.512 2.30541L16.5416 2.2945L16.5684 2.27032L16.6077 2.26492L16.6374 2.24805L16.6826 2.24535L16.7753 2.20756L16.7937 2.1744L16.8354 2.1718L16.8532 2.14751L16.9192 2.11987L16.9376 2.09143L16.9822 2.08748L16.9985 2.05641L17 2.02473L16.9555 1.98087L16.9221 1.98357L16.8954 2.00583L16.868 1.95928L16.8354 1.94848L16.8146 1.92688L16.7797 1.9195L16.7367 1.92082L16.7168 1.93911L16.6767 1.96202L16.581 1.95392L16.4638 1.86687L16.4549 1.83654V1.71371L16.44 1.69751L16.4727 1.67592L16.4667 1.66242L16.3681 1.57199L16.3377 1.50653L16.3741 1.40869L16.4097 1.38643L16.4186 1.35404L16.4037 1.32704L16.38 1.3075L16.3652 1.28861L16.383 1.26161L16.4126 1.24475V1.20426L16.3711 1.20156L16.3318 1.20966L16.3081 1.23125L16.2272 1.25622H16.182L16.0411 1.22855L16.0055 1.24205L15.9721 1.22855L15.8675 1.22585L15.7986 1.20696L15.7659 1.22315L15.7355 1.25015H15.6969L15.6725 1.22315L15.6814 1.18806L15.6999 1.1604L15.7147 1.14691H15.6695L15.6309 1.1604H15.5857L15.5649 1.13611L15.5768 1.06256L15.5345 1.06526L15.4782 1.09765L15.427 1.05446L15.3818 1.05111L15.361 1.03762V0.991731L15.3224 0.982964L15.3039 1.01333L15.2683 1.02142L15.2594 0.989032H15.229L15.2409 1.02142L15.2742 1.06526L15.232 1.11385L15.166 1.1577L15.1363 1.1604L15.1904 1.11385L15.1719 1.08415V1.01611L15.1363 1.01341L15.1037 0.997216L15.0614 0.991817L15.0132 0.94796H14.9205L14.8938 0.931764L14.8997 0.901403L14.8819 0.869012L14.8426 0.860914L14.813 0.838651L14.7766 0.827854L14.738 0.80356L14.7255 0.77592L14.741 0.743529L14.81 0.713167L14.8033 0.696972L14.7766 0.675378L14.8004 0.651084L14.8337 0.634219L14.8634 0.609926L14.8545 0.585633L14.7469 0.669979L14.5971 0.678077L14.4799 0.568746L14.474 0.541753L14.5036 0.514113L14.4888 0.48712H14.4413L14.408 0.473624L14.3598 0.429766L14.3724 0.348119L14.3635 0.30966L14.3479 0.282667L14.3212 0.261073L14.2344 0.149043L14.1595 0.127449L14.1173 0.078193L14.0846 0.0619974H14.0394L14.0068 0.0424332L13.9823 0.0181398L13.9526 0.0019442L13.9424 8.27884e-07V0Z"/>
    </Icon>
  );
}

export default IconTaiwan;
