importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "6b0e453869784a1e09074b86160d9689"
  },
  {
    "url": "app/app-4c4dcbeece.js",
    "revision": "69690dc6816e1479429949ddd7429e99"
  },
  {
    "url": "app/vendor-7897dec923.js",
    "revision": "7897dec9232f34c8755469d45c949f41"
  },
  {
    "url": "content/css/main-2fae775cb5.css",
    "revision": "2fae775cb55675ab8618a10c43ef92d7"
  },
  {
    "url": "content/css/vendor-aed7287c65.css",
    "revision": "57e48ffaaea5731741e6dd6f6a582fd8"
  },
  {
    "url": "content/fonts/fontawesome-webfont-dc89f84240.svg",
    "revision": "dc89f84240347782f3a88e9f4d2d62e7"
  },
  {
    "url": "content/images/apple-touch-icon-114x114-a96d42eea9.png",
    "revision": "a96d42eea9b891e0b3964175409c0da0"
  },
  {
    "url": "content/images/apple-touch-icon-120x120-447b0dd467.png",
    "revision": "447b0dd46742537fc9871ba9bccac980"
  },
  {
    "url": "content/images/apple-touch-icon-144x144-6fa099ee6b.png",
    "revision": "6fa099ee6bf9536be24e69a31dc6d44d"
  },
  {
    "url": "content/images/apple-touch-icon-152x152-25ee944c8c.png",
    "revision": "25ee944c8cce424f8d382cc29dfbdf2a"
  },
  {
    "url": "content/images/apple-touch-icon-57x57-9d152bdf1e.png",
    "revision": "9d152bdf1e4170e1648d38c4e3bf424e"
  },
  {
    "url": "content/images/apple-touch-icon-72x72-bf6cdeaf73.png",
    "revision": "bf6cdeaf73b4d374f6a6844a7b156c1f"
  },
  {
    "url": "content/images/apple-touch-icon-76x76-553de35e1a.png",
    "revision": "553de35e1a7a24ecbab27fe4a9ce5fc0"
  },
  {
    "url": "content/images/apple-touch-icon-9d152bdf1e.png",
    "revision": "9d152bdf1e4170e1648d38c4e3bf424e"
  },
  {
    "url": "content/images/banner-74b0d1012f.jpg",
    "revision": "74b0d1012f6e804f914930d4024b61a6"
  },
  {
    "url": "content/images/banner2-fc01bbd15e.jpg",
    "revision": "fc01bbd15e64db37eaad5af09582cfcd"
  },
  {
    "url": "content/images/basketsquare-040b54a526.jpg",
    "revision": "040b54a526660fa6c2233339af312c87"
  },
  {
    "url": "content/images/blog-16b008c8d8.jpg",
    "revision": "16b008c8d814814b2794c28bad0c13ec"
  },
  {
    "url": "content/images/blog-avatar-651dff4897.jpg",
    "revision": "651dff48971b40e0b581c1f2c253ff73"
  },
  {
    "url": "content/images/blog-avatar2-deb3f76b39.jpg",
    "revision": "deb3f76b39c91955af9dfdb659a90143"
  },
  {
    "url": "content/images/blog-medium-ca017bf8bc.jpg",
    "revision": "ca017bf8bceaa237eacd5a8ac57882ad"
  },
  {
    "url": "content/images/blog-recent-2-d44adda47f.jpg",
    "revision": "d44adda47f796fa915fbf616c43b7a84"
  },
  {
    "url": "content/images/blog-recent-3-cf8713da6f.jpg",
    "revision": "cf8713da6faee617bc4a458d011a2512"
  },
  {
    "url": "content/images/blog-recent-714e12c54f.jpg",
    "revision": "714e12c54f9f0e679d0f950390f0fbb7"
  },
  {
    "url": "content/images/blog2-f212acc485.jpg",
    "revision": "f212acc485b5201d5de8f90aaa0b5f53"
  },
  {
    "url": "content/images/customer-1-6a90721674.png",
    "revision": "6a907216745c243c29e0d811c2d893df"
  },
  {
    "url": "content/images/customer-2-7ae65c9cf3.png",
    "revision": "7ae65c9cf36b73def05924572201539f"
  },
  {
    "url": "content/images/customer-3-a02069f66b.png",
    "revision": "a02069f66b827c867131e4e938a6b6c7"
  },
  {
    "url": "content/images/customer-4-39fac1efd7.png",
    "revision": "39fac1efd7ba50f35942d809a985582f"
  },
  {
    "url": "content/images/customer-5-2a94886a49.png",
    "revision": "2a94886a4925aab1b1ce3412af6aaa22"
  },
  {
    "url": "content/images/customer-6-d905265d7e.png",
    "revision": "d905265d7e10dadb563191826b6ca4de"
  },
  {
    "url": "content/images/detailbig1-6b7e4ddcc7.jpg",
    "revision": "6b7e4ddcc79ce88df3ae3ddc647465ab"
  },
  {
    "url": "content/images/detailbig2-bd09b661e1.jpg",
    "revision": "bd09b661e12311c944e2f38d0ff78f24"
  },
  {
    "url": "content/images/detailbig3-cf29b3dd82.jpg",
    "revision": "cf29b3dd82aaaa6798d45cb4c8e5b52a"
  },
  {
    "url": "content/images/detailsquare-3f6508671b.jpg",
    "revision": "3f6508671ba29f39cf1c83f3d91c6fba"
  },
  {
    "url": "content/images/detailsquare2-38029be18a.jpg",
    "revision": "38029be18a3adc1f1aff918902434f41"
  },
  {
    "url": "content/images/detailsquare3-59b52cc819.jpg",
    "revision": "59b52cc8196473b774b62943f66cd59e"
  },
  {
    "url": "content/images/fixed-background-1-a2cdadfd52.jpg",
    "revision": "a2cdadfd5208292a42ade2fd740b047e"
  },
  {
    "url": "content/images/fixed-background-2-a935c3718f.jpg",
    "revision": "a935c3718f31715cdfbae5ef39e1f089"
  },
  {
    "url": "content/images/home-ce06a1a4a9.jpg",
    "revision": "ce06a1a4a91ff379f3b9db190e4790ee"
  },
  {
    "url": "content/images/home-try-10cc2dc031.jpg",
    "revision": "10cc2dc031c3f0ba4da28a5312c4f444"
  },
  {
    "url": "content/images/homepage-slider-4a2bc4079a.jpg",
    "revision": "4a2bc4079a4913b794fbbb426220b7e6"
  },
  {
    "url": "content/images/logo-e76b4b3f8e.png",
    "revision": "e76b4b3f8e11454858e477a7ae127794"
  },
  {
    "url": "content/images/logo-small-467d4a2bff.png",
    "revision": "467d4a2bffbe9d8b0713d22245e5f0be"
  },
  {
    "url": "content/images/logo-statnlp-150x266-cf99d0e671.png",
    "revision": "cf99d0e671f9cb73da52cc220ee688b1"
  },
  {
    "url": "content/images/logo-statnlp-200x354-65df37362a.png",
    "revision": "65df37362a0da179a49b1058a66683f6"
  },
  {
    "url": "content/images/magency-1-d0ad4ceb6a.png",
    "revision": "d0ad4ceb6aea6303f897dc331253e0b3"
  },
  {
    "url": "content/images/magency-2-4cbd6da93a.png",
    "revision": "4cbd6da93a2079d24a7de4ed6ca63f0a"
  },
  {
    "url": "content/images/magency-3-66ab89d7e9.png",
    "revision": "66ab89d7e934d442f384fdd566fe5b3d"
  },
  {
    "url": "content/images/magency-4-8cde93310d.png",
    "revision": "8cde93310da894db2d7c98dd67f4af01"
  },
  {
    "url": "content/images/magency-5-9d6e760c7f.png",
    "revision": "9d6e760c7fb2601bcdcf3ee3d89c7a07"
  },
  {
    "url": "content/images/magency-6-13e676acb8.png",
    "revision": "13e676acb892a3668d021eba24a01545"
  },
  {
    "url": "content/images/main-slider1-e35c92caef.jpg",
    "revision": "e35c92caeffc94f5b0feaac2c29acc6c"
  },
  {
    "url": "content/images/main-slider2-e61e584a22.jpg",
    "revision": "e61e584a223f130fdf7fc59b5cca099f"
  },
  {
    "url": "content/images/main-slider3-751824ea7d.jpg",
    "revision": "751824ea7d77cff645e800925617f997"
  },
  {
    "url": "content/images/main-slider4-11d3783c8c.jpg",
    "revision": "11d3783c8c43f074c03980061c751728"
  },
  {
    "url": "content/images/marker-d51d0347f2.png",
    "revision": "d51d0347f271ecc25006d32bfe3d349c"
  },
  {
    "url": "content/images/men-d1a358fbe6.jpg",
    "revision": "d1a358fbe6801fa33c9150db04ae80db"
  },
  {
    "url": "content/images/mhome-slide-1-90df03b7b0.png",
    "revision": "90df03b7b0cdfe6c03fa182d164484be"
  },
  {
    "url": "content/images/mhome-slide-2-f7756cfa46.png",
    "revision": "f7756cfa466c9f7d0ce26dc0dbd9a937"
  },
  {
    "url": "content/images/mpost-1-8e9887c49b.jpg",
    "revision": "8e9887c49b62595c382e41240726087e"
  },
  {
    "url": "content/images/mpost-2-4d9a19b5f4.jpg",
    "revision": "4d9a19b5f475d69f573b0f8503701499"
  },
  {
    "url": "content/images/mpost-3-64ec41cffd.jpg",
    "revision": "64ec41cffdc29c6b5e0baf694e493d19"
  },
  {
    "url": "content/images/mpost-4-93c9f72aae.jpg",
    "revision": "93c9f72aaefec5835a54d1e204b71721"
  },
  {
    "url": "content/images/mseminar-1-f831db5a92.jpg",
    "revision": "f831db5a92688f7fd7a3e04818677fe3"
  },
  {
    "url": "content/images/mseminar-2-84a6610e48.jpg",
    "revision": "84a6610e480233bc5f8f6dfe03bd4632"
  },
  {
    "url": "content/images/mseminar-3-b796aacc85.jpg",
    "revision": "b796aacc85398df4b649d07b96aac249"
  },
  {
    "url": "content/images/mseminar-4-a50e77920b.jpg",
    "revision": "a50e77920bee0c32cf31ca1b04c6e32f"
  },
  {
    "url": "content/images/mseminar-5-59e194ac5d.jpg",
    "revision": "59e194ac5d6ed15e07ba851b19ec1e94"
  },
  {
    "url": "content/images/mseminar-6-500ebc45a1.jpg",
    "revision": "500ebc45a1a50d57f17e25525fb3c861"
  },
  {
    "url": "content/images/mseminar-7-84fcbd1a3e.png",
    "revision": "84fcbd1a3e32ac0be293a80c7aba3067"
  },
  {
    "url": "content/images/mseminar-8-7a721e228a.jpg",
    "revision": "7a721e228a3cc3d9d59ab2b9c488f4d5"
  },
  {
    "url": "content/images/msutd-logo-19f57991f4.png",
    "revision": "19f57991f48ad7d3477de0c970c93870"
  },
  {
    "url": "content/images/mteam-aldrian-cd0a98e087.png",
    "revision": "cd0a98e087c17c5b53891147dbb751f7"
  },
  {
    "url": "content/images/mteam-amilasilva-a67549142a.png",
    "revision": "a67549142a61a474538133eea82644e6"
  },
  {
    "url": "content/images/mteam-guozhijiang-4bd11f0e95.png",
    "revision": "4bd11f0e9588d4c814b3e0cfb8429614"
  },
  {
    "url": "content/images/mteam-jiezhanming-da6f257ddc.png",
    "revision": "da6f257ddc2c8afbc578751dd962c8a9"
  },
  {
    "url": "content/images/mteam-lihao-3035af1fec.png",
    "revision": "3035af1fec8aa61b93c2c7a00d6eb367"
  },
  {
    "url": "content/images/mteam-limsweekiat-412097da1a.png",
    "revision": "412097da1a6a97df9df62625913a225f"
  },
  {
    "url": "content/images/mteam-linyuchen-9010241d01.png",
    "revision": "9010241d01c3faa7078676ffd3894407"
  },
  {
    "url": "content/images/mteam-luwei-ad9c7b60e5.png",
    "revision": "ad9c7b60e5b8663015a3d27c4826c9d9"
  },
  {
    "url": "content/images/mteam-peter-fc6c89ee2b.png",
    "revision": "fc6c89ee2b9238c95dcb4327b6d4f0be"
  },
  {
    "url": "content/images/mteam-raymond-ac6f8a9401.png",
    "revision": "ac6f8a940168a6e78bfbcbca9b7e85c8"
  },
  {
    "url": "content/images/mteam-srajit-d66ffe714d.png",
    "revision": "d66ffe714d424fddea8b0c27b92dd6e5"
  },
  {
    "url": "content/images/mteam-supunabeysinghe-56d65eb4e6.png",
    "revision": "56d65eb4e6193a0917c992bfed2a6728"
  },
  {
    "url": "content/images/mteam-thilini-a808428f12.jpg",
    "revision": "a808428f1265fbe4a6a607b139af2e07"
  },
  {
    "url": "content/images/mteam-wangbailin-8cd96522cd.png",
    "revision": "8cd96522cd4bbbacfae83a608822a484"
  },
  {
    "url": "content/images/mteam-wangyiran-e1088d58d2.png",
    "revision": "e1088d58d21a43d99a69c941f1145da1"
  },
  {
    "url": "content/images/mteam-wubiao-090fcfd3e5.png",
    "revision": "090fcfd3e567652598753598039cc013"
  },
  {
    "url": "content/images/mteam-zhangyan-385175d59a.png",
    "revision": "385175d59a848fb5740d983917da4e69"
  },
  {
    "url": "content/images/mteam-zouyanyan-af754bd3e2.png",
    "revision": "af754bd3e2c16dea0c58bab3f1c2c91c"
  },
  {
    "url": "content/images/page-1-c5fc8ed376.jpg",
    "revision": "c5fc8ed376b8c22f7a8b18923fc717c5"
  },
  {
    "url": "content/images/page-2-ffae2a2202.jpg",
    "revision": "ffae2a2202f41933bbcd195dc427cc3f"
  },
  {
    "url": "content/images/page-3-4451512495.jpg",
    "revision": "4451512495e482d2f110ec07c745a43c"
  },
  {
    "url": "content/images/payment-98ce4a62d1.png",
    "revision": "98ce4a62d161626aca19c854920af75f"
  },
  {
    "url": "content/images/person-1-7c30913ea5.jpg",
    "revision": "7c30913ea5f0601697aebe7888c6c17e"
  },
  {
    "url": "content/images/person-2-1609195b3c.jpg",
    "revision": "1609195b3c004eb7de9b3f14ef0905f1"
  },
  {
    "url": "content/images/person-3-aa01a37f82.png",
    "revision": "aa01a37f828b27435721f3f24d33f4ee"
  },
  {
    "url": "content/images/person-4-f9c4937ba5.jpg",
    "revision": "f9c4937ba553aa97000aa65af9b8fdb5"
  },
  {
    "url": "content/images/photogrid-0466182fd4.jpg",
    "revision": "0466182fd46319db2c628eb611da818a"
  },
  {
    "url": "content/images/portfolio-1-1a7f2d8dd0.jpg",
    "revision": "1a7f2d8dd00417e21973568bfe26cbe2"
  },
  {
    "url": "content/images/portfolio-2-7288456979.jpg",
    "revision": "7288456979c657d2e55f046bb4e22358"
  },
  {
    "url": "content/images/portfolio-3-cf95744992.jpg",
    "revision": "cf95744992d5e893b82626272cc12afb"
  },
  {
    "url": "content/images/portfolio-5-6f805383c4.jpg",
    "revision": "6f805383c49e2a9b9dd2db5c9f87b075"
  },
  {
    "url": "content/images/portfolio-6-1eec424ad1.jpg",
    "revision": "1eec424ad19117aac34bf89a826f3afe"
  },
  {
    "url": "content/images/portfolio-7-e14bac588c.jpg",
    "revision": "e14bac588cb7f3569e387b56c57582f3"
  },
  {
    "url": "content/images/portfolio-8-2c0d775120.jpg",
    "revision": "2c0d7751202d5814eaddd62b286976ae"
  },
  {
    "url": "content/images/portfolio-9-9fb21cdf3a.jpg",
    "revision": "9fb21cdf3a357a526da9c040d006093c"
  },
  {
    "url": "content/images/product1-cd0dbb768d.jpg",
    "revision": "cd0dbb768dfd9e129e3d5b924fdbc9e5"
  },
  {
    "url": "content/images/product2-b18f935f70.jpg",
    "revision": "b18f935f70d483c0c93f769dbc2620bf"
  },
  {
    "url": "content/images/product3-256ee31ca4.jpg",
    "revision": "256ee31ca45e369951d8753f53ad0a86"
  },
  {
    "url": "content/images/product4-87b1992659.jpg",
    "revision": "87b19926595a46c7e5444469726ab112"
  },
  {
    "url": "content/images/slide1-25371e3146.jpg",
    "revision": "25371e3146e0feb409c80e2a63dbc789"
  },
  {
    "url": "content/images/slide2-9341641ff3.jpg",
    "revision": "9341641ff3000394c50be92501289965"
  },
  {
    "url": "content/images/slide3-5a6669d0a3.jpg",
    "revision": "5a6669d0a39ac12e72a3a4fa9415c682"
  },
  {
    "url": "content/images/slide4-499f6ad7ba.jpg",
    "revision": "499f6ad7ba7e34275e4d26c308ddda1e"
  },
  {
    "url": "content/images/slide5-bf1498c920.jpg",
    "revision": "bf1498c92021d84f11b07f93d58b8002"
  },
  {
    "url": "content/images/slide6-36a8eef28e.jpg",
    "revision": "36a8eef28ec71a451b5f7b2d04d533e3"
  },
  {
    "url": "content/images/template-easy-customize-170310aaaa.png",
    "revision": "170310aaaaf6074d1309dddf10c6c626"
  },
  {
    "url": "content/images/template-easy-customize-less-215b3542e9.png",
    "revision": "215b3542e966866ca203345e9afdb835"
  },
  {
    "url": "content/images/template-tablets-2-6800e8b4a8.png",
    "revision": "6800e8b4a86c09e89fa8a6985e916782"
  },
  {
    "url": "content/images/template-tablets-6971cfc81c.png",
    "revision": "6971cfc81c7c0e2b7eda6d7ef5e3f52c"
  },
  {
    "url": "content/images/texture-bw-054ae2323e.png",
    "revision": "054ae2323e629c64366aad406d53e2e9"
  },
  {
    "url": "content/images/texture-turquoise-69002a4ff2.png",
    "revision": "69002a4ff20ecb626dba8f4e8c14e7e1"
  },
  {
    "url": "content/images/texture-violet-65410011ef.png",
    "revision": "65410011ef5bcbe43f46544fa0026a60"
  },
  {
    "url": "content/images/women-a7bd3f46c0.jpg",
    "revision": "a7bd3f46c0c71ffecc802295bdb67a58"
  },
  {
    "url": "content/js/bootstrap-hover-dropdown.js",
    "revision": "340ad526571d9abb92b36202eff65282"
  },
  {
    "url": "content/js/bootstrap.min.js",
    "revision": "046ba2b5f4cff7d2eaaa1af55caa9fd8"
  },
  {
    "url": "content/js/front.js",
    "revision": "7c6dcfc8495248c2c8771c829beb1aee"
  },
  {
    "url": "content/js/gmaps.init.js",
    "revision": "be5cf7826a2b077a52f71a62aa3976f7"
  },
  {
    "url": "content/js/gmaps.js",
    "revision": "81408a8442c1c9dc2fb8fcdf171339f1"
  },
  {
    "url": "content/js/jquery-1.11.0.min.js",
    "revision": "eaec1712551cd2792f4607f39fab12e7"
  },
  {
    "url": "content/js/jquery.cookie.js",
    "revision": "a79ce0f6eed17894a3d9b854fe700461"
  },
  {
    "url": "content/js/jquery.counterup.min.js",
    "revision": "ef36cca760bf1cd76cfcd0e4dc10cef1"
  },
  {
    "url": "content/js/jquery.parallax-1.1.3.js",
    "revision": "754fcebbf1082f189f19b68192e02fe1"
  },
  {
    "url": "content/js/owl.carousel.js",
    "revision": "5b14510332ba541c4e2680fdbfd6e298"
  },
  {
    "url": "content/js/owl.carousel.min.js",
    "revision": "2fec2de7cc7d2d9a66130311f52b5db8"
  },
  {
    "url": "content/js/respond.min.js",
    "revision": "4019c5f3493663439e6dfb064e5d8c36"
  },
  {
    "url": "content/js/waypoints.min.js",
    "revision": "5eab1a823ae8d3b4741a1b66e34018cc"
  },
  {
    "url": "index.html",
    "revision": "5a16c0072968aab252e18807b58ec835"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
