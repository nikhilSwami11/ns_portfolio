'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3e1793e291b0b712f544de4f7293a84d",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "e6a2b0124283a237159fa07dd95955e6",
"/": "e6a2b0124283a237159fa07dd95955e6",
"main.dart.js": "c7276d7760f41099760c84bf507ce76c",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "98575b61480016dd6c9b88175259c6b6",
"icons/Icon-192.png": "c0991dd602947d441d6a75e0e2528d67",
"icons/Icon-maskable-192.png": "c0991dd602947d441d6a75e0e2528d67",
"icons/Icon-maskable-512.png": "6f1bc3ef9111ad85b733db78d9471ec4",
"icons/Icon-512.png": "6f1bc3ef9111ad85b733db78d9471ec4",
"manifest.json": "d6eb409f55f713b1f5be2b3c2a606750",
"assets/NOTICES": "28e8efcd53df5b9490cb5b87f4ca5d49",
"assets/FontManifest.json": "a06d32e559c5345d93184fdd7f6c1a71",
"assets/AssetManifest.bin.json": "04ef30e9a38bfc5055a10ade97d8943c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "a97bf0923afb7b1ad1d275473fdc5b9a",
"assets/fonts/MaterialIcons-Regular.otf": "f080949150fa34de4371575c13667527",
"assets/assets/images/nikhil_profile.jpeg": "090edda56d925fb47173ae6c5f490079",
"assets/assets/images/lnmiit.jpeg": "2be10415f87de9c55b724efc5536d6a2",
"assets/assets/images/nikhil_profile1.jpg": "aa08da878c6c29c29649383828b5567a",
"assets/assets/images/black_hole.png": "7418e77fa34e8bd8bfc3deee1f0d3ce0",
"assets/assets/images/mps.jpeg": "2aaccf3c29fe31daa547306e56100d8c",
"assets/assets/icons/onsite_logo.jpeg": "d70b699e1e22ec07d616cff92388ccce",
"assets/assets/icons/app_store_icons.png": "90551c945a262b167a660cba6cdadf76",
"assets/assets/icons/snake_icon.png": "ce45eea392419f95da0027bc99611def",
"assets/assets/icons/settings_icon.png": "7ec883c6ec22e18c876b14549678c092",
"assets/assets/icons/fraazo_logo.png": "e937f69fddc8ab5e7bde40b9ea358548",
"assets/assets/icons/github_logo.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/icons/tictactoe_icon.png": "362e2b32097e7fcd7a2f94e9d3693267",
"assets/assets/icons/ios_battery.png": "6b043f8f82316491a468f868de037f70",
"assets/assets/icons/info_icon.png": "28dfea327026a13ae3247a3c5f100c74",
"assets/assets/icons/nf_logo.png": "df7858bdd06c511a8ed1275be0adf90f",
"assets/assets/icons/asu_logo.jpg": "72aacef3e57dca613a1a972f8fd89c12",
"assets/assets/icons/three_dots.png": "1283e228fd4f935f6b2f915a70beac2f",
"assets/assets/icons/calculator_icon.png": "069566b8209ab547903a8964e05c9c43",
"assets/assets/icons/tictactoe_icon1.png": "13cef2b76d9f7e4bf897736cd815ef7b",
"assets/assets/icons/instagram_logo.png": "9e517e082edee90e7eebc0d0482f74e1",
"assets/assets/icons/nikhil_icon.png": "3d6f436b580e9318b8f32631eeef4cf7",
"assets/assets/icons/linkedin_logo.png": "340a112c7da6d22492fe8b358946f305",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/CourierPrime-Bold.ttf": "4acfa45d29d240044e0075a8e58f0862",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/CourierPrime-Regular.ttf": "fba4686ed1d1b4ef05ab14db78805dbe",
"assets/assets/data/portfolio.json": "640695338e0658f2490eab0c9c6bee0a",
"assets/assets/gif/cat.gif": "0b30b558d728099473fb7dd00605a25b",
"assets/assets/gif/meow.gif": "5ac66335d5478f8b6c20608d554e04d4",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
