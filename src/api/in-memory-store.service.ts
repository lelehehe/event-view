import { Product } from '../app/shared';

export class InMemoryStoreService {
  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let speakers = [
      {
        'id': 11,
        'name': 'Chewbacca',
        'twitter': '@im_chewy'
      },
      {
        'id': 12,
        'name': 'Rey',
        'twitter': '@rey'
      },
      {
        'id': 13,
        'name': 'Finn (FN2187)',
        'twitter': '@finn'
      },
      {
        'id': 14,
        'name': 'Han Solo',
        'twitter': '@i_know'
      },
      {
        'id': 15,
        'name': 'Leia Organa',
        'twitter': '@organa'
      },
      {
        'id': 16,
        'name': 'Luke Skywalker',
        'twitter': '@chosen_one_son'
      },
      {
        'id': 17,
        'name': 'Poe Dameron',
        'twitter': '@i_am_poe'
      },
      {
        'id': 18,
        'name': 'Kylo Ren',
        'twitter': '@daddy_issues'
      },
      {
        'id': 19,
        'name': 'Supreme Commander Snoke',
        'twitter': '@snoker'
      },
      {
        'id': 20,
        'name': 'R2-D2',
        'twitter': '@r2d2'
      },
      {
        'id': 21,
        'name': 'BB8',
        'twitter': '@bb_eight'
      },
      {
        'id': 22,
        'name': 'C-3PO',
        'twitter': '@goldy'
      },
      {
        'id': 23,
        'name': 'Maz Kanata',
        'twitter': '@mazzzy'
      },
      {
        'id': 24,
        'name': 'Captain Phasma',
        'twitter': '@fazma'
      },
      {
        'id': 25,
        'name': 'General Hux',
        'twitter': '@hux'
      },
      {
        'id': 26,
        'name': 'Lor San Tekka',
        'twitter': '@lor_san'
      }
    ];

    let sessions = [
      {
        'id': 130,
        'name': 'Angular 2 First Look',
        'level': 'beginner'
      },
      {
        'id': 132,
        'name': 'RxJS',
        'level': 'beginner'
      },
      {
        'id': 133,
        'name': 'Angular Material',
        'level': 'beginner'
      },
      {
        'id': 134,
        'name': 'Redux',
        'level': 'beginner'
      },
      {
        'id': 135,
        'name': 'React',
        'level': 'beginner'
      },
      {
        'id': 136,
        'name': 'TypeScript',
        'level': 'beginner'
      },
      {
        'id': 137,
        'name': 'ES2015',
        'level': 'beginner'
      },
      {
        'id': 138,
        'name': 'Mongo',
        'level': 'beginner'
      },
      {
        'id': 139,
        'name': 'Redis',
        'level': 'beginner'
      },
      {
        'id': 140,
        'name': 'Node',
        'level': 'beginner'
      },
      {
        'id': 141,
        'name': 'Express',
        'level': 'beginner'
      }
    ];

    let rooms = [
      {
        'id': 30,
        'name': 'Millennium Falcon',
      },
      {
        'id': 32,
        'name': 'X-Wing Fighter',
        'type': 'space'
      },
      {
        'id': 33,
        'name': 'Imperial Star Destroyer',
        'type': 'space'
      },
      {
        'id': 34,
        'name': 'AT-AT Walker',
        'type': 'land'
      },
      {
        'id': 35,
        'name': 'TIE Fighter',
        'type': 'space'
      },
      {
        'id': 36,
        'name': 'B-Wing Fighter',
        'type': 'space'
      },
      {
        'id': 37,
        'name': 'ETA-2 Jedi Starfighter',
        'type': 'space'
      },
      {
        'id': 38,
        'name': 'TIE Interceptor',
        'type': 'space'
      },
      {
        'id': 39,
        'name': 'X-34 Landspeeder',
        'type': 'land'
      },
      {
        'id': 40,
        'name': 'Snow Speeder',
        'type': 'land'
      },
      {
        'id': 41,
        'name': 'X-34 Landspeeder',
        'type': 'land'
      }
    ];

    let products = [
      {
          id: 1,
          name: 'salmon', 
          desciption: 'Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.', 
          price: 23,
          image: '1.0.jpg',
          extra_images: ['1.1.jpg', '1.2.jpg','1.3.jpg','1.4.jpg']
      },
      {
          id: 2,
          name: 'dumpling', 
          desciption: 'Dumpling is a broad classification for a dish that consists of small pieces of dough (made from a variety of starch sources), often wrapped around a filling (as in ravioli or wontons). The dough can be based on bread, flour, or potatoes, and may be filled with fish, meat, sweets, or vegetables. They may be cooked by boiling, frying, simmering, or steaming. Dumplings may be savoury or sweet and can be eaten by themselves, with gravy or sauce, or in soups or stews.', 
          price: 12,
          image: '2.0.jpg',
          extra_images: ['2.1.jpg', '2.2.jpg','2.3.jpg','2.4.jpg']
      }
      
    ];
    return { rooms, speakers, sessions, products };
  }
}
