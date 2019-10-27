// import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Course from '../course.model';
import server from '../../../server';
//
// function bulkData(cId) {
//   return [
//   {
//     "id": "139208460",
//     "title": "Volume 1 Part 1",
//     "desc": "Gh Worship Tutorial Volume 1 Part 1",
//     "youtubeLink": "https://youtu.be/huQqbLr0jzI",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "5592048",
//     "title": "Volume 1 Part 2",
//     "desc": "Gh Worship Tutorial Volume 1 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/Hm4hOGesHnU",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "2729808",
//     "title": "Volume 1 Part 3",
//     "desc": "Gh Worship Tutorial Volume 1 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/-AKuNsFdozQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "24645168",
//     "title": "Volume 1 Part 4",
//     "desc": "Gh Worship Tutorial Volume 1 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/FmIQuWSikfM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "177757920",
//     "title": "Volume 1 Part 5",
//     "desc": "Gh Worship Tutorial Volume 1 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/aeYm7EYpsQU",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "7731875",
//     "title": "Volume 2 Part 1",
//     "desc": "Gh Worship Tutorial Volume 2 Part 1",
//     "youtubeLink": "https://youtu.be/lZ8iugEAVw4",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "20263342",
//     "title": "Volume 2 Part 2",
//     "desc": "Gh Worship Tutorial Volume 2 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/9s08lXLDels",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "528660",
//     "title": "Volume 2 Part 3",
//     "desc": "Gh Worship Tutorial Volume 2 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/4LOVzodcZbE",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "44886260",
//     "title": "Volume 2 Part 4",
//     "desc": "Gh Worship Tutorial Volume 2 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/EJFwF1roAAA",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "37146375",
//     "title": "Volume 2 Part 5",
//     "desc": "Gh Worship Tutorial Volume 2 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/C_yv_YSGzp8",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "31380510",
//     "title": "Volume 3 Part 1",
//     "desc": "Gh Worship Tutorial Volume 3 Part 1",
//     "youtubeLink": "https://youtu.be/NnMRIPeTo2A",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "64368360",
//     "title": "Section 1 Part 1",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 1",
//     "youtubeLink": "https://youtu.be/3fcst-OyoaY",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "28308052",
//     "title": "Section 1 Part 2",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/VUT4U1ElSHw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "144532440",
//     "title": "Section 1 Part 3",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/3ulKiLPz6sY",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "33939972",
//     "title": "Section 1 Part 4",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/AloisvfxEdY",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "260853215",
//     "title": "Section 1 Part 5",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/pd9AyyY52mc",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "181516212",
//     "title": "Section 1 Part 6",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 6",
//     "youtubeLink": "\n\t\thttps://youtu.be/fVc7uxP-3eI",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "826647486",
//     "title": "Section 1 Part 7",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 7",
//     "youtubeLink": "\n\t\thttps://youtu.be/JAaj2eoWX80",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "881673160",
//     "title": "Section 1 Part 8",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 8",
//     "youtubeLink": "\n\t\thttps://youtu.be/nI1BUGe9P3I",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "297531450",
//     "title": "Section 1 Part 9",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 9",
//     "youtubeLink": "\n\t\thttps://youtu.be/aMdHUm9gxKw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "905183400",
//     "title": "Section 1 Part 10",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 10",
//     "youtubeLink": "\n\t\thttps://youtu.be/RptNQvK7kkM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "93034370",
//     "title": "Section 1 Part 11",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 1 Part 11",
//     "youtubeLink": "\n\t\thttps://youtu.be/yVuEbmXz9Ww",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "143654010",
//     "title": "Section 2 Part 1",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 2 Part 1",
//     "youtubeLink": "https://youtu.be/eLhe436OCuA",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "40245444",
//     "title": "Section 2 Part 2",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 2 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/Yss_SXuJR8E",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "48916002",
//     "title": "Section 2 Part 3",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 2 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/d_c8-etSD80",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "27189500",
//     "title": "Section 2 Part 4",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 2 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/TBgtaI6TdMw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "7193692",
//     "title": "Section 3 Part 1",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 3 Part 1",
//     "youtubeLink": "https://youtu.be/0uhxPhsEGFM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "24054920",
//     "title": "Section 3 Part 2",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 3 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/LcU9M54YXOw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "43872105",
//     "title": "Section 3 Part 3",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 3 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/yUuvZN9yPw4",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "9498258",
//     "title": "Section 4 Part 1",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 4 Part 1",
//     "youtubeLink": "https://youtu.be/yKbvqLPNTTQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "129314152",
//     "title": "Section 4 Part 2",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 4 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/WziIP-fy0EE",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "45466896",
//     "title": "Section 4 Part 3",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 4 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/_NRmSUzSYxc",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "435260552",
//     "title": "Section 4 Part 4",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 4 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/UjobJGk__Zs",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "24644100",
//     "title": "Section 5 Part 1",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 5 Part 1",
//     "youtubeLink": "https://youtu.be/tdHzw5zj1x4",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "204062760",
//     "title": "Section 5 Part 2",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 5 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/M_cKoNHrfWU",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "375880464",
//     "title": "Section 5 Part 3",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 5 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/is3EF3feBmQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "9050944",
//     "title": "Section 6 Part 1",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 6 Part 1",
//     "youtubeLink": "https://youtu.be/1QrbPbwNHO0",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "19384200",
//     "title": "Section 6 Part 2",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 6 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/omg8ahg1d20",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "365496300",
//     "title": "Section 6 Part 3",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 6 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/YYDKWlW9viE",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "96074432",
//     "title": "Section 6 Part 4",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 6 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/v85Un2yTdg0",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "101192110",
//     "title": "Section 6 Part 5",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 6 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/SNDd74eRL90",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "61671393",
//     "title": "Section 7 Part 1",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 7 Part 1",
//     "youtubeLink": "https://youtu.be/v1HN_SFab9o",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "37863804",
//     "title": "Section 7 Part 2",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 7 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/HhcdfNailbQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "24525018",
//     "title": "Section 7 Part 3",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 7 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/LIpixysoV88",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "157397568",
//     "title": "Section 7 Part 4",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 7 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/1JQfRE5WmAE",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "4728570",
//     "title": "Section 7 Part 5",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 7 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/XL7txOOuZrw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "39409200",
//     "title": "Section 7 Part 6",
//     "desc": "Gh Praise Master Class Course Section 1 - 7 Section 7 Part 6",
//     "youtubeLink": "\n\t\thttps://youtu.be/XL7txOOuZrw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "22274742",
//     "title": "Volume 1 Part 1",
//     "desc": "How To Find The Progression Of Any Song Volume 1 Part 1",
//     "youtubeLink": "https://youtu.be/trcGrzVuY7M",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "257159448",
//     "title": "Volume 1 Part 2",
//     "desc": "How To Find The Progression Of Any Song Volume 1 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/512MubVgwW8",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "98772912",
//     "title": "Volume 1 Part 3",
//     "desc": "How To Find The Progression Of Any Song Volume 1 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/BuMoA9NtKGM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "424997072",
//     "title": "Volume 1 Part 4",
//     "desc": "How To Find The Progression Of Any Song Volume 1 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/apYf-BityLA",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "84201832",
//     "title": "Volume 2 Part 1",
//     "desc": "How To Find The Progression Of Any Song Volume 2 Part 1",
//     "youtubeLink": "https://youtu.be/35ftbHVX-Yo",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "20253018",
//     "title": "Volume 2 Part 2",
//     "desc": "How To Find The Progression Of Any Song Volume 2 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/Y8Lna5MvCHY",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "179313996",
//     "title": "Volume 2 Part 3",
//     "desc": "How To Find The Progression Of Any Song Volume 2 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/GE9wnj91qTw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "156937616",
//     "title": "Volume 2 Part 4",
//     "desc": "How To Find The Progression Of Any Song Volume 2 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/C1CFguQnMAQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "24606720",
//     "title": "Volume 2 Part 5",
//     "desc": "How To Find The Progression Of Any Song Volume 2 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/UFtvYgrZCzI",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "712276968",
//     "title": "Volume 2 Part 6",
//     "desc": "How To Find The Progression Of Any Song Volume 2 Part 6",
//     "youtubeLink": "\n\t\thttps://youtu.be/6ryNEfAbfiU",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "40439375",
//     "title": "Volume 1 Part 1",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 1 Part 1",
//     "youtubeLink": "https://youtu.be/hgNT22KeooA",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "295925000",
//     "title": "Volume 1 Part 2",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 1 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/rcKeRdRXIw8",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "41975070",
//     "title": "Volume 1 Part 3",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 1 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/YUtp7GZz-jM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "45609652",
//     "title": "Volume 1 Part 4",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 1 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/P_c3ap55Zvs",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "20802860",
//     "title": "Volume 1 Part 5",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 1 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/v3CI_SPnnHc",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "110527320",
//     "title": "Volume 1 Part 6",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 1 Part 6",
//     "youtubeLink": "\n\t\thttps://youtu.be/a98E_j4JhnE",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "193130",
//     "title": "Volume 1 Part 7",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 1 Part 7",
//     "youtubeLink": "\n\t\thttps://youtu.be/1NEAfu-XS00",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "7991310",
//     "title": "Volume 2 Part 1",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 2 Part 1",
//     "youtubeLink": "https://youtu.be/roWsP6PYiME",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "141270768",
//     "title": "Volume 2 Part 2",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 2 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/TfK8n5NwVRs",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "147324459",
//     "title": "Volume 2 Part 3",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 2 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/DwKxVTzzmKk",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "226971360",
//     "title": "Volume 2 Part 4",
//     "desc": "How to play Ghanaian highlife on the piano. Vol 1 & Vol 2 Volume 2 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/GfnNAqN-bN0",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "2666440",
//     "title": "Volume 1 Part 1",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 1 Part 1",
//     "youtubeLink": "https://youtu.be/miowS2_DKCk",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "37051234",
//     "title": "Volume 1 Part 2",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 1 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/nsIQ_kZNbzQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "28713180",
//     "title": "Volume 1 Part 3",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 1 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/J-ZaGu58qCE",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "5281972",
//     "title": "Volume 1 Part 4",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 1 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/zKUYe5mzD18",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "30143232",
//     "title": "Volume 2 Part 1",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 2 Part 1",
//     "youtubeLink": "https://youtu.be/NnMRIPeTo2A",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "89045568",
//     "title": "Volume 2 Part 2",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 2 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/ZbjFS4Y6GWw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "13654914",
//     "title": "Volume 2 Part 3",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 2 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/X1_QUT9RYjM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "223642048",
//     "title": "Volume 2 Part 4",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 2 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/j3it5lq_vtQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "101194780",
//     "title": "Volume 2 Part 5",
//     "desc": "Runs, Licks, Scales, Sevenths & Poly chords Vol 1 & 2 Volume 2 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/rmgkzIhrpCc",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "12570360",
//     "title": "Ebibidwom Chapter Part 1",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 1",
//     "youtubeLink": "https://youtu.be/J8mBXpdoU2k",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "18974088",
//     "title": "Ebibidwom Chapter Part 2",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/npOtLsciG0E",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "17588892",
//     "title": "Ebibidwom Chapter Part 3",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/qA_VMjT9rQA",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "204301992",
//     "title": "Ebibidwom Chapter Part 4",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/UeITAAEWnTE",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "147319475",
//     "title": "Ebibidwom Chapter Part 5",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/Kx3AiTYIBqA",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "116384232",
//     "title": "Ebibidwom Chapter Part 6",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 6",
//     "youtubeLink": "\n\t\thttps://youtu.be/-RMrCn0dFDQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "1089330452",
//     "title": "Ebibidwom Chapter Part 7",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 7",
//     "youtubeLink": "\n\t\thttps://youtu.be/Ds1e2aILNJk",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "28212288",
//     "title": "Ebibidwom Chapter Part 8",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 8",
//     "youtubeLink": "\n\t\thttps://youtu.be/xwCexgxbrjw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "569575080",
//     "title": "Ebibidwom Chapter Part 9",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 9",
//     "youtubeLink": "\n\t\thttps://youtu.be/WvM1yKnpSFQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "1181394900",
//     "title": "Ebibidwom Chapter Part 10",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 10",
//     "youtubeLink": "\n\t\thttps://youtu.be/5XzEaz64UQM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "542628372",
//     "title": "Ebibidwom Chapter Part 11",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-EBIBIDWOM SECTION full Videos Ebibidwom Chapter Part 11",
//     "youtubeLink": "\n\t\thttps://youtu.be/nnpUWXTpMes",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "28435500",
//     "title": "Section 1 Part 1",
//     "desc": "Gh Gospel Reggae tutorial with baselines Vol 1 Section 1 Part 1",
//     "youtubeLink": "https://youtu.be/TuC2CiNRIdY",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "93210056",
//     "title": "Section 1 Part 2",
//     "desc": "Gh Gospel Reggae tutorial with baselines Vol 1 Section 1 Part 2",
//     "youtubeLink": "\n\t\t https://youtu.be/hpmbkrVE9ow",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "221030076",
//     "title": "Section 1 Part 3",
//     "desc": "Gh Gospel Reggae tutorial with baselines Vol 1 Section 1 Part 3",
//     "youtubeLink": "\n\t\t https://youtu.be/S9Y-21Cu45w",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "3843732",
//     "title": "Section 1 Part 1",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 1 Part 1",
//     "youtubeLink": "https://youtu.be/ehY7pKQ4SMc",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "25956672",
//     "title": "Section 1 Part 2",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 1 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/P2rxMEix4X0",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "359810535",
//     "title": "Section 1 Part 3",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 1 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/MmINvQkZbCc",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "288149960",
//     "title": "Section 1 Part 4",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 1 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/pMWyWZeKuxQ",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "8546225",
//     "title": "Section 1 Part 5",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 1 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/QW0s7-QsobI",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "5696712",
//     "title": "Section 1 Part 6",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 1 Part 6",
//     "youtubeLink": "\n\t\thttps://youtu.be/0d7iQKCWstM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "97197968",
//     "title": "Section 1 Part 7",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 1 Part 7",
//     "youtubeLink": "\n\t\thttps://youtu.be/VzBsGphNyIo",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "84252384",
//     "title": "Section 1 Part 8",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 1 Part 8",
//     "youtubeLink": "\n\t\thttps://youtu.be/-3ggaOpL9qM",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "64170869",
//     "title": "Section 2 Part 1",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 2 Part 1",
//     "youtubeLink": "https://youtu.be/V_FFNt2kkD4",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "136174806",
//     "title": "Section 2 Part 2",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 2 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/ZOcTfbJ76wI",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "18772236",
//     "title": "Section 2 Part 3",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 2 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/eDQGoOFda4c",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "16152076",
//     "title": "Section 2 Part 4",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 2 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/EgHo-xzF0lY",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "36448704",
//     "title": "Section 3 Part 1",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 1",
//     "youtubeLink": "https://youtu.be/oyXTBgS4Je8",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "166347764",
//     "title": "Section 3 Part 2",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 2",
//     "youtubeLink": "\n\t\thttps://youtu.be/6vhf0uBcW84",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "182591955",
//     "title": "Section 3 Part 3",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 3",
//     "youtubeLink": "\n\t\thttps://youtu.be/BzHT7ByB9Iw",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "155593360",
//     "title": "Section 3 Part 4",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 4",
//     "youtubeLink": "\n\t\thttps://youtu.be/DbyDMVmyMb0",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "100458750",
//     "title": "Section 3 Part 5",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 5",
//     "youtubeLink": "\n\t\thttps://youtu.be/Z23xrFHeoXc",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "286280604",
//     "title": "Section 3 Part 6",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 6",
//     "youtubeLink": "\n\t\thttps://youtu.be/1fomEWPHYvo",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "867613474",
//     "title": "Section 3 Part 7",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 7",
//     "youtubeLink": "\n\t\thttps://youtu.be/faExf6zliYU",
//     "courseId": cId,
//     "payload": {
//     }
//   },
//   {
//     "id": "168523992",
//     "title": "Section 3 Part 8",
//     "desc": "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 8",
//     "youtubeLink": "\n\t\thttps://youtu.be/JiyiMO4ItJ4",
//     "courseId": cId,
//     "payload": {
//     }
//   }
// ]
// }

describe('Lesson:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('Create A Lesson', async () => {
    const user = await request(server).post('/api/users/register').send({
      name: 'coole',
      email: 'test@email.com',
      password: 'password',
    });

    const channel = await request(server).post('/api/channels/').send({
      userId: user.body.id,
      payload: {},
      name: 'pianoafrik',
      link: 'https:youtube.com/pianoafrik',
    });

    const final = await request(server).post('/api/users/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    const course = await request(server).post('/api/courses/').send({
      channelId: channel.body.id,
      payload: {},
      title: 'Course One',
      desc: 'Course One Description',
      trailerLink: 'https://www.google.com',
    });

    const lesson = await request(server).post('/api/lessons/').send({
      courseId: course.body.id,
      payload: {},
      title: 'Lesson One',
      desc: 'Lesson One Description',
      youtubeLink: 'https://www.google.com',
    });

    console.log(final.body);
  });


  it.only('Edit A Lesson', async () => {
    const user = await request(server).post('/api/users/register').send({
      name: 'coole',
      email: 'test@email.com',
      password: 'password',
    });

    const channel = await request(server).post('/api/channels/').send({
      userId: user.body.u.id,
      payload: {},
      name: 'pianoafrik',
      link: 'https:youtube.com/pianoafrik',
    });

    const final = await request(server).post('/api/users/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    const course = await request(server).post('/api/courses/').send({
      channelId: channel.body.id,
      payload: {},
      title: 'Course One',
      desc: 'Course One Description',
      trailerLink: 'https://www.google.com',
    });

    const payload = bulkData(course.body.courses[0].id);

    // const lessons = await request(server).post(`/api/lessons/bulk.create/${channel.body.id}`).send({
    //   payload,
    // });

    //
    // const lesson = await request(server).post(`/api/lessons/${channel.body.id}`).send({
    //     id: '168523992',
    //     title: "Section 3 Part 8",
    //     desc: "Ghanaian Traditional Music Piano Masterclass Course (GTMPMC)\n\t\t-ADOWA CHAPTER full Videos Section 3 Part 8",
    //     youtubeLink: "\n\t\thttps://youtu.be/JiyiMO4ItJ4",
    //     courseId: course.body.courses[0].id,
    //     payload: {},
    // });

    // console.log(lessons.body.courses[0].lessons);
  });
});
