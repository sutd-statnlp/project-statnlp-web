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
    "url": "app/app-72735fbcae.js",
    "revision": "3911409646551b4cbc30a4678b513ac0"
  },
  {
    "url": "app/vendor-7897dec923.js",
    "revision": "7897dec9232f34c8755469d45c949f41"
  },
  {
    "url": "content/css/main-18bd7fa8a9.css",
    "revision": "18bd7fa8a94f8c5ec13bfe54eefe54c6"
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
    "url": "content/images/mteam-aldrian-56f56b5d0c.png",
    "revision": "56f56b5d0c3be93d046bf239c2ad94d5"
  },
  {
    "url": "content/images/mteam-amilasilva-94e93d269a.png",
    "revision": "94e93d269a7e93ae223d271cc2afae52"
  },
  {
    "url": "content/images/mteam-guozhijiang-96c9568eec.png",
    "revision": "96c9568eec6ba2717bc3523e2a2f4c83"
  },
  {
    "url": "content/images/mteam-jiezhanming-12ddee1f59.png",
    "revision": "12ddee1f597fb292f641910f2c74c40a"
  },
  {
    "url": "content/images/mteam-lihao-06231d8518.png",
    "revision": "06231d8518738d36adc8cc88e88d4d23"
  },
  {
    "url": "content/images/mteam-limsweekiat-020d421938.png",
    "revision": "020d421938d15c505a0e286bccfe5a1f"
  },
  {
    "url": "content/images/mteam-linyuchen-ac8da7e870.png",
    "revision": "ac8da7e87018849232d405d62e8d4f12"
  },
  {
    "url": "content/images/mteam-luwei-624237b01a.png",
    "revision": "624237b01aa426faeef8659da9aea550"
  },
  {
    "url": "content/images/mteam-peter-e2763ec020.png",
    "revision": "e2763ec020ad6c6001158b5fff1846cc"
  },
  {
    "url": "content/images/mteam-raymond-387adacf1e.png",
    "revision": "387adacf1e832543ca3806674ab2e3a7"
  },
  {
    "url": "content/images/mteam-srajit-4e520e1b9e.png",
    "revision": "4e520e1b9e20127d3cdfc7852074b11e"
  },
  {
    "url": "content/images/mteam-supunabeysinghe-d0e443ad7d.png",
    "revision": "d0e443ad7def78740bc8ca7919081fa9"
  },
  {
    "url": "content/images/mteam-thilini-c0bb126d41.jpg",
    "revision": "c0bb126d416a4d27439bdc553601f04c"
  },
  {
    "url": "content/images/mteam-wangbailin-0336af4487.png",
    "revision": "0336af44877aa63ee2c2f313a9c19319"
  },
  {
    "url": "content/images/mteam-wangyiran-4a64a1286a.png",
    "revision": "4a64a1286afa33dba165b53a2c758f94"
  },
  {
    "url": "content/images/mteam-wubiao-7e28b143f7.png",
    "revision": "7e28b143f7a8dd350e2a1f00a9547c04"
  },
  {
    "url": "content/images/mteam-zhangyan-27aea7d90b.png",
    "revision": "27aea7d90b0df20e2c27b59a97798a55"
  },
  {
    "url": "content/images/mteam-zouyanyan-f463f1519d.png",
    "revision": "f463f1519dce4405e7fe029e9e4b3159"
  },
  {
    "url": "content/images/photogrid-0466182fd4.jpg",
    "revision": "0466182fd46319db2c628eb611da818a"
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
    "revision": "94f8411fd195412f068ba531b3c6738c"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
