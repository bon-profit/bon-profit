function initData() {
  jimData.variables["selectedRes"] = "";
  jimData.variables["search"] = "";
  jimData.variables["loggedUser"] = "false";
  jimData.variables["updateFilter"] = "0";
  jimData.variables["reviewCreated"] = "false";
  jimData.variables["userCreated"] = "false";
  jimData.variables["listMapToggle"] = "list";
  jimData.datamasters["reviews"] = [
    {
      "id": 1,
      "datamaster": "reviews",
      "userdata": {
        "id": "01",
        "rest_id": "12",
        "photo": "chi_03",
        "user": "Pere Font",
        "reviews": "3",
        "timeago_text": "3 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_03.jpg",
        "rating": "7.0"
      }
    },
    {
      "id": 2,
      "datamaster": "reviews",
      "userdata": {
        "id": "02",
        "rest_id": "12",
        "photo": "chi_02",
        "user": "Maria Serra",
        "reviews": "3",
        "timeago_text": "8 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_02.jpg",
        "rating": "5.6"
      }
    },
    {
      "id": 3,
      "datamaster": "reviews",
      "userdata": {
        "id": "03",
        "rest_id": "17",
        "photo": "ita_07",
        "user": "Pere Font",
        "reviews": "3",
        "timeago_text": "15 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\ita_07.jpg",
        "rating": "7.2"
      }
    },
    {
      "id": 4,
      "datamaster": "reviews",
      "userdata": {
        "id": "04",
        "rest_id": "05",
        "photo": "jap_02",
        "user": "Arnau Soler",
        "reviews": "2",
        "timeago_text": "32 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\jap_02.jpg",
        "rating": "5.0"
      }
    },
    {
      "id": 5,
      "datamaster": "reviews",
      "userdata": {
        "id": "05",
        "rest_id": "05",
        "photo": "jap_03",
        "user": "Carles Serrano",
        "reviews": "3",
        "timeago_text": "49 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\jap_03.jpg",
        "rating": "8.4"
      }
    },
    {
      "id": 6,
      "datamaster": "reviews",
      "userdata": {
        "id": "06",
        "rest_id": "05",
        "photo": "jap_04",
        "user": "Gerard Adrià",
        "reviews": "5",
        "timeago_text": "1 h 29 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\jap_04.jpg",
        "rating": "7.5"
      }
    },
    {
      "id": 7,
      "datamaster": "reviews",
      "userdata": {
        "id": "07",
        "rest_id": "11",
        "photo": "ita_03",
        "user": "Gerard Adrià",
        "reviews": "5",
        "timeago_text": "1 h 46 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\ita_03.jpg",
        "rating": "7.1"
      }
    },
    {
      "id": 8,
      "datamaster": "reviews",
      "userdata": {
        "id": "08",
        "rest_id": "21",
        "photo": "chi_07",
        "user": "Gerard Adrià",
        "reviews": "5",
        "timeago_text": "1 h 58 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_07.jpg",
        "rating": "2.2"
      }
    },
    {
      "id": 9,
      "datamaster": "reviews",
      "userdata": {
        "id": "09",
        "rest_id": "16",
        "photo": "jap_05",
        "user": "Didac Rius",
        "reviews": "2",
        "timeago_text": "2 h 24 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\jap_05.jpg",
        "rating": "4.5"
      }
    },
    {
      "id": 10,
      "datamaster": "reviews",
      "userdata": {
        "id": "10",
        "rest_id": "12",
        "photo": "chi_04",
        "user": "Carles Serrano",
        "reviews": "3",
        "timeago_text": "2 h 31 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_04.jpg",
        "rating": "2.5"
      }
    },
    {
      "id": 11,
      "datamaster": "reviews",
      "userdata": {
        "id": "11",
        "rest_id": "15",
        "photo": "ita_06",
        "user": "Mireia Mestre",
        "reviews": "2",
        "timeago_text": "2 h 49 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\ita_06.jpg",
        "rating": "5.7"
      }
    },
    {
      "id": 12,
      "datamaster": "reviews",
      "userdata": {
        "id": "12",
        "rest_id": "21",
        "photo": "chi_09",
        "user": "Arnau Soler",
        "reviews": "2",
        "timeago_text": "2 h 55 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_09.jpg",
        "rating": "7.4"
      }
    },
    {
      "id": 13,
      "datamaster": "reviews",
      "userdata": {
        "id": "13",
        "rest_id": "11",
        "photo": "ita_02",
        "user": "Raul López",
        "reviews": "2",
        "timeago_text": "3 h 54 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\ita_02.jpg",
        "rating": "8.3"
      }
    },
    {
      "id": 14,
      "datamaster": "reviews",
      "userdata": {
        "id": "14",
        "rest_id": "11",
        "photo": "ita_01",
        "user": "Maria Serra",
        "reviews": "3",
        "timeago_text": "4 h 38 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\ita_01.jpg",
        "rating": "8.8"
      }
    },
    {
      "id": 15,
      "datamaster": "reviews",
      "userdata": {
        "id": "15",
        "rest_id": "21",
        "photo": "chi_06",
        "user": "Pere Font",
        "reviews": "3",
        "timeago_text": "8 h 34 min ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_06.jpg",
        "rating": "7.1"
      }
    },
    {
      "id": 16,
      "datamaster": "reviews",
      "userdata": {
        "id": "16",
        "rest_id": "12",
        "photo": "chi_01",
        "user": "Àgata Vallespí",
        "reviews": "7",
        "timeago_text": "1 day ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_01.jpg",
        "rating": "6.0"
      }
    },
    {
      "id": 17,
      "datamaster": "reviews",
      "userdata": {
        "id": "17",
        "rest_id": "15",
        "photo": "ita_05",
        "user": "Oriol Reina",
        "reviews": "1",
        "timeago_text": "3 day ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\ita_05.jpg",
        "rating": "4.9"
      }
    },
    {
      "id": 18,
      "datamaster": "reviews",
      "userdata": {
        "id": "18",
        "rest_id": "05",
        "photo": "jap_01",
        "user": "Raul López",
        "reviews": "2",
        "timeago_text": "4 day ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\jap_01.jpg",
        "rating": "3.8"
      }
    },
    {
      "id": 19,
      "datamaster": "reviews",
      "userdata": {
        "id": "19",
        "rest_id": "21",
        "photo": "chi_08",
        "user": "Maria Serra",
        "reviews": "3",
        "timeago_text": "4 day ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_08.jpg",
        "rating": "5.9"
      }
    },
    {
      "id": 20,
      "datamaster": "reviews",
      "userdata": {
        "id": "20",
        "rest_id": "17",
        "photo": "ita_08",
        "user": "Carles Serrano",
        "reviews": "3",
        "timeago_text": "5 day ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\ita_08.jpg",
        "rating": "6.0"
      }
    },
    {
      "id": 21,
      "datamaster": "reviews",
      "userdata": {
        "id": "21",
        "rest_id": "15",
        "photo": "ita_04",
        "user": "Àgata Vallespí",
        "reviews": "7",
        "timeago_text": "1 week ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\ita_04.jpg",
        "rating": "8.0"
      }
    },
    {
      "id": 22,
      "datamaster": "reviews",
      "userdata": {
        "id": "22",
        "rest_id": "12",
        "photo": "chi_05",
        "user": "Gerard Adrià",
        "reviews": "5",
        "timeago_text": "1 week ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_05.jpg",
        "rating": "5.5"
      }
    },
    {
      "id": 23,
      "datamaster": "reviews",
      "userdata": {
        "id": "23",
        "rest_id": "21",
        "photo": "chi_10",
        "user": "Jordi Cruz",
        "reviews": "3",
        "timeago_text": "2 weeks ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\chi_10.jpg",
        "rating": "8.1"
      }
    },
    {
      "id": 24,
      "datamaster": "reviews",
      "userdata": {
        "id": "24",
        "rest_id": "16",
        "photo": "jap_06",
        "user": "Mireia Mestre",
        "reviews": "2",
        "timeago_text": "2 weeks ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\jap_06.jpg",
        "rating": "3.1"
      }
    },
    {
      "id": 25,
      "datamaster": "reviews",
      "userdata": {
        "id": "25",
        "rest_id": "16",
        "photo": "jap_07",
        "user": "Jordi López",
        "reviews": "3",
        "timeago_text": "2 weeks ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\jap_07.jpg",
        "rating": "3.3"
      }
    },
    {
      "id": 26,
      "datamaster": "reviews",
      "userdata": {
        "id": "26",
        "rest_id": "07",
        "photo": "med_01",
        "user": "Didac Rius",
        "reviews": "2",
        "timeago_text": "2 weeks ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_01.jpg",
        "rating": "5.8"
      }
    },
    {
      "id": 27,
      "datamaster": "reviews",
      "userdata": {
        "id": "27",
        "rest_id": "04",
        "photo": "med_02",
        "user": "Jordi Cruz",
        "reviews": "3",
        "timeago_text": "3 weeks ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_02.jpg",
        "rating": "3.3"
      }
    },
    {
      "id": 28,
      "datamaster": "reviews",
      "userdata": {
        "id": "28",
        "rest_id": "06",
        "photo": "med_03",
        "user": "Jordi López",
        "reviews": "3",
        "timeago_text": "3 weeks ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_03.jpg",
        "rating": "3.8"
      }
    },
    {
      "id": 29,
      "datamaster": "reviews",
      "userdata": {
        "id": "29",
        "rest_id": "01",
        "photo": "med_04",
        "user": "Cristina Adell",
        "reviews": "3",
        "timeago_text": "1 month ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_04.jpg",
        "rating": "5.8"
      }
    },
    {
      "id": 30,
      "datamaster": "reviews",
      "userdata": {
        "id": "30",
        "rest_id": "09",
        "photo": "med_05",
        "user": "Cristina Adell",
        "reviews": "3",
        "timeago_text": "1 month ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_05.jpg",
        "rating": "4.5"
      }
    },
    {
      "id": 31,
      "datamaster": "reviews",
      "userdata": {
        "id": "31",
        "rest_id": "10",
        "photo": "med_06",
        "user": "Laia Aguiló",
        "reviews": "2",
        "timeago_text": "1 month ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_06.jpg",
        "rating": "3.5"
      }
    },
    {
      "id": 32,
      "datamaster": "reviews",
      "userdata": {
        "id": "32",
        "rest_id": "13",
        "photo": "med_07",
        "user": "Cristina Adell",
        "reviews": "3",
        "timeago_text": "2 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_07.jpg",
        "rating": "8.6"
      }
    },
    {
      "id": 33,
      "datamaster": "reviews",
      "userdata": {
        "id": "33",
        "rest_id": "14",
        "photo": "med_08",
        "user": "Laia Aguiló",
        "reviews": "2",
        "timeago_text": "2 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_08.jpg",
        "rating": "2.4"
      }
    },
    {
      "id": 34,
      "datamaster": "reviews",
      "userdata": {
        "id": "34",
        "rest_id": "18",
        "photo": "med_09",
        "user": "Jordi Cruz",
        "reviews": "3",
        "timeago_text": "3 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_09.jpg",
        "rating": "2.6"
      }
    },
    {
      "id": 35,
      "datamaster": "reviews",
      "userdata": {
        "id": "35",
        "rest_id": "20",
        "photo": "med_10",
        "user": "Jordi López",
        "reviews": "3",
        "timeago_text": "3 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_10.jpg",
        "rating": "7.2"
      }
    },
    {
      "id": 36,
      "datamaster": "reviews",
      "userdata": {
        "id": "36",
        "rest_id": "07",
        "photo": "med_11",
        "user": "Mario Alamany",
        "reviews": "2",
        "timeago_text": "3 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_11.jpg",
        "rating": "8.4"
      }
    },
    {
      "id": 37,
      "datamaster": "reviews",
      "userdata": {
        "id": "37",
        "rest_id": "04",
        "photo": "med_12",
        "user": "Raul Sebastià",
        "reviews": "3",
        "timeago_text": "4 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_12.jpg",
        "rating": "3.8"
      }
    },
    {
      "id": 38,
      "datamaster": "reviews",
      "userdata": {
        "id": "38",
        "rest_id": "06",
        "photo": "med_13",
        "user": "Àgata Vallespí",
        "reviews": "7",
        "timeago_text": "5 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_13.jpg",
        "rating": "8.1"
      }
    },
    {
      "id": 39,
      "datamaster": "reviews",
      "userdata": {
        "id": "39",
        "rest_id": "01",
        "photo": "med_14",
        "user": "Àgata Vallespí",
        "reviews": "7",
        "timeago_text": "5 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_14.jpg",
        "rating": "6.4"
      }
    },
    {
      "id": 40,
      "datamaster": "reviews",
      "userdata": {
        "id": "40",
        "rest_id": "09",
        "photo": "med_15",
        "user": "Elisenda Duch",
        "reviews": "3",
        "timeago_text": "6 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_15.jpg",
        "rating": "2.8"
      }
    },
    {
      "id": 41,
      "datamaster": "reviews",
      "userdata": {
        "id": "41",
        "rest_id": "10",
        "photo": "med_16",
        "user": "Gemma Fabregà",
        "reviews": "2",
        "timeago_text": "6 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_16.jpg",
        "rating": "8.2"
      }
    },
    {
      "id": 42,
      "datamaster": "reviews",
      "userdata": {
        "id": "42",
        "rest_id": "13",
        "photo": "med_17",
        "user": "Gerard Adrià",
        "reviews": "5",
        "timeago_text": "8 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_17.jpg",
        "rating": "8.6"
      }
    },
    {
      "id": 43,
      "datamaster": "reviews",
      "userdata": {
        "id": "43",
        "rest_id": "14",
        "photo": "med_18",
        "user": "Raul Sebastià",
        "reviews": "3",
        "timeago_text": "8 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_18.jpg",
        "rating": "3.6"
      }
    },
    {
      "id": 44,
      "datamaster": "reviews",
      "userdata": {
        "id": "44",
        "rest_id": "18",
        "photo": "med_19",
        "user": "Àgata Vallespí",
        "reviews": "7",
        "timeago_text": "9 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_19.jpg",
        "rating": "7.3"
      }
    },
    {
      "id": 45,
      "datamaster": "reviews",
      "userdata": {
        "id": "45",
        "rest_id": "20",
        "photo": "med_20",
        "user": "Adrià Torner",
        "reviews": "1",
        "timeago_text": "10 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\med_20.jpg",
        "rating": "8.7"
      }
    },
    {
      "id": 46,
      "datamaster": "reviews",
      "userdata": {
        "id": "46",
        "rest_id": "02",
        "photo": "mex_01",
        "user": "Mario Alamany",
        "reviews": "2",
        "timeago_text": "11 months ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\mex_01.jpg",
        "rating": "9.0"
      }
    },
    {
      "id": 47,
      "datamaster": "reviews",
      "userdata": {
        "id": "47",
        "rest_id": "02",
        "photo": "mex_02",
        "user": "Elisenda Duch",
        "reviews": "3",
        "timeago_text": "1 year ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\mex_02.jpg",
        "rating": "8.4"
      }
    },
    {
      "id": 48,
      "datamaster": "reviews",
      "userdata": {
        "id": "48",
        "rest_id": "02",
        "photo": "mex_03",
        "user": "Àgata Vallespí",
        "reviews": "7",
        "timeago_text": "1 year ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\mex_03.jpg",
        "rating": "7.2"
      }
    },
    {
      "id": 49,
      "datamaster": "reviews",
      "userdata": {
        "id": "49",
        "rest_id": "02",
        "photo": "mex_04",
        "user": "Àgata Vallespí",
        "reviews": "7",
        "timeago_text": "1 year ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\mex_04.jpg",
        "rating": "2.4"
      }
    },
    {
      "id": 50,
      "datamaster": "reviews",
      "userdata": {
        "id": "50",
        "rest_id": "08",
        "photo": "mex_05",
        "user": "Elisenda Duch",
        "reviews": "3",
        "timeago_text": "1 year ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\mex_05.jpg",
        "rating": "8.6"
      }
    },
    {
      "id": 51,
      "datamaster": "reviews",
      "userdata": {
        "id": "51",
        "rest_id": "08",
        "photo": "mex_06",
        "user": "Raul Sebastià",
        "reviews": "3",
        "timeago_text": "2 years ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\mex_06.jpg",
        "rating": "7.5"
      }
    },
    {
      "id": 52,
      "datamaster": "reviews",
      "userdata": {
        "id": "52",
        "rest_id": "08",
        "photo": "mex_07",
        "user": "Gemma Fabregà",
        "reviews": "2",
        "timeago_text": "2 years ago",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "photo_path": "E:\\Administrador\\Documents\\UOC\\06-Interaccio-persona-ordinador\\PRACTICA_PART_3\\photos\\mex_07.jpg",
        "rating": "5.2"
      }
    }
  ];

  jimData.datamasters["rest"] = [
    {
      "id": 1,
      "datamaster": "rest",
      "userdata": {
        "id": "01",
        "name": "La Carreta",
        "rating": "8.2",
        "cuisine": "Spanish Mediterranean",
        "address": "Ave. Gaudi 8, 08025 Barcelona, España",
        "phone": "934330908",
        "minprice": "10",
        "maxprice": "25",
        "email": "sagradafamilia@origen99.com",
        "reviews": "148",
        "dogs": "false",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/2d228375-8499-40bf-951e-52c2f1aa262d.jpg",
        "latitude": "41.405169",
        "longitude": "2.174588",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4051693+2.1745875000000296&ll=41.4051693+2.1745875000000296",
        "tags": "La Carreta, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 2,
      "datamaster": "rest",
      "userdata": {
        "id": "02",
        "name": "Cantina Mexicana",
        "rating": "6.4",
        "cuisine": "Mexican",
        "address": "Valencia 427, 08013 Barcelona, España",
        "phone": "936676668",
        "minprice": "34",
        "maxprice": "45",
        "email": "lacantinabarcelona@gmail.com",
        "reviews": "382",
        "dogs": "true",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/060928fd-4d51-4fa6-af24-eee9177a25fd.jpg",
        "latitude": "41.402276",
        "longitude": "2.175632",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4022758+2.175631800000019&ll=41.4022758+2.175631800000019",
        "tags": "Cantina Mexicana, Mexican, Restaurante, Mejicano, Mexican, Méjico, Mejicana, Aguachile, Bolillos, Burrito, Camote, Cemitas, Ceviche, Chalupa, Chapulines, Escamoles, Charales, Chicharrón, Chilaquiles, Chilaquiles, Chimichangas, Choriqueso, Chorizo, Cochinita, Cocido, Corunda, Curtido, Elote, Enchilada, Enfrijoladas, Entomatadas, Fajitas, Flautas, Guacamole, Flautas, Frijoles charros, Fritada, Gorditas, Gringas, Huauzontles, Huaraches, Jicama, Jocoque, Lengua, Machaca, Mancha manteles, Memela, Menudo, Molotes, Menudo, Mixiotes, Mole de olla, Mole poblano, Molletes, Molotes, Moronga, Nachos, Pambazos, Panucho, Papadzules, Parilladas, Pastel azteca, Pejelagarto, Picadillo, Quesadillas, Queso, Rajas con crema, Romeritos, Salbutes, Salsa, Sincronizadas, Tacos al pastor, Tacos, Taco al pastor, Tamales, Taquitos, Tlacoyos, Tlayudas, Tortas, Romeritos, Tortillas, Tostadas, Totopo, Tripas, Venado, Venison, Yuca, Cassava"
      }
    },
    {
      "id": 3,
      "datamaster": "rest",
      "userdata": {
        "id": "03",
        "name": "Sindur",
        "rating": "7.5",
        "cuisine": "Indian Asiatic",
        "address": "Còrsega 211-bis, 08036 Barcelona, España",
        "phone": "934105819",
        "minprice": "25",
        "maxprice": "30",
        "email": "sindurbcn@gmail.com",
        "reviews": "283",
        "dogs": "false",
        "card": "false",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/9d50fdf3-3749-4bd0-8659-cefc23dd06d7.jpg",
        "latitude": "41.391297",
        "longitude": "2.151989",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3912972+2.151988500000016&ll=41.3912972+2.151988500000016",
        "tags": "Sindur, Indian Asiatic, Indian, India, Hindú, Aloo gobi, Baati, Bhatura, Biryani, Chaat, Chana masala, Chapati, Falooda, Gulqand, Khichdi, Kulcha, Kulfi, Makki di roti, Naan, Palak paneer, Paratha, Peda, Pollo con mantequilla, Pollo tandoori, Rājmā, Samosa, Shahi paneer, Singori, Pakhal, Rasgulla, Sandesh, Bonda, Dosa, Hyderabadi Biryani, Idli, Pesarattu, Pulihora, Puttu, Rasam, Sambhar, Uttapam, Vada, Bhakri, Dahi vada, Dhokla, Khakhra, Poha, Vada pav, Vindaloo"
      }
    },
    {
      "id": 4,
      "datamaster": "rest",
      "userdata": {
        "id": "04",
        "name": "O'Retorno",
        "rating": "6.2",
        "cuisine": "Spanish Mediterranean",
        "address": "Mallorca, 08036 Barcelona, España",
        "phone": "934531104",
        "minprice": "20",
        "maxprice": "45",
        "email": "oretorno@gmail.com",
        "reviews": "167",
        "dogs": "true",
        "card": "true",
        "accessibility": "false",
        "gluten": "true",
        "photo_path": "./images/3163adb2-6ba8-4e33-90a9-80fdcdb9a18f.jpg",
        "latitude": "41.388199",
        "longitude": "2.155063",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3881991+2.155063499999983&ll=41.3881991+2.155063499999983",
        "tags": "O'Retorno, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 5,
      "datamaster": "rest",
      "userdata": {
        "id": "05",
        "name": "Kaguya-Hime",
        "rating": "9.4",
        "cuisine": "Japanese Sushi Asiatic",
        "address": "Bailen 221, 08012 Barcelona, España",
        "phone": "931798664",
        "minprice": "30",
        "maxprice": "45",
        "email": "reservas@kaguyahimebcn.com",
        "reviews": "452",
        "dogs": "false",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/6949e19d-320e-4de7-9092-0b8add1d2df2.jpg",
        "latitude": "41.402771",
        "longitude": "2.162905",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4027706+2.1629052000000684&ll=41.4027706+2.1629052000000684",
        "tags": "Kaguya-Hime, Japanese Sushi Asiatic, Japo, Japones, Japanese, Japonesa, Sushi, Niguiri, Nigiri, Makizushi, Miso Soup, Yakitori, Tempura, Edamame, Ramen, Mochi, Okonomiyaki, Sashimi, Oden, Soba, Natto, Onigiri, Japanese Curry Rice, Udon, Kaiseki, Yakiniku, Takoyaki, Yuba, Sukiyaki, Kare raisu, Shabu, Green Tea"
      }
    },
    {
      "id": 6,
      "datamaster": "rest",
      "userdata": {
        "id": "06",
        "name": "Azul",
        "rating": "3.4",
        "cuisine": "Spanish Mediterranean",
        "address": "Calle de Provenza, 54 08029, 08029 Barcelona, España",
        "phone": "933217156",
        "minprice": "25",
        "maxprice": "35",
        "email": "info@azul.com",
        "reviews": "85",
        "dogs": "false",
        "card": "false",
        "accessibility": "false",
        "gluten": "false",
        "photo_path": "./images/e3d0833c-a090-4cc5-ab9d-f5ecf69ac1b6.jpg",
        "latitude": "41.382881",
        "longitude": "2.146022",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3828808+2.1460217999999713&ll=41.3828808+2.1460217999999713",
        "tags": "Azul, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 7,
      "datamaster": "rest",
      "userdata": {
        "id": "07",
        "name": "Origen 99",
        "rating": "5.8",
        "cuisine": "Spanish Mediterranean",
        "address": "Rossello 154, 08036 Barcelona, España",
        "phone": "933234547",
        "minprice": "20",
        "maxprice": "40",
        "email": "rosellon@origen99.com",
        "reviews": "286",
        "dogs": "true",
        "card": "true",
        "accessibility": "true",
        "gluten": "true",
        "photo_path": "./images/d29450c1-1364-4890-9f36-07040d9657c7.jpg",
        "latitude": "41.391136",
        "longitude": "2.154858",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.39113589999999+2.1548579000000245&ll=41.39113589999999+2.1548579000000245",
        "tags": "Origen 99, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 8,
      "datamaster": "rest",
      "userdata": {
        "id": "08",
        "name": "Tlaxcal",
        "rating": "6.7",
        "cuisine": "Mexican",
        "address": "Comercio 27, 08003 Barcelona, España",
        "phone": "932684134",
        "minprice": "15",
        "maxprice": "32",
        "email": "info@tlaxcal.com",
        "reviews": "147",
        "dogs": "false",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/e11c4ab0-0ba7-4f85-9a28-a3aa62c6f41a.jpg",
        "latitude": "41.386823",
        "longitude": "2.1738",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.386823+2.1738004000000046&ll=41.386823+2.1738004000000046",
        "tags": "Tlaxcal, Mexican, Restaurante, Mejicano, Mexican, Méjico, Mejicana, Aguachile, Bolillos, Burrito, Camote, Cemitas, Ceviche, Chalupa, Chapulines, Escamoles, Charales, Chicharrón, Chilaquiles, Chilaquiles, Chimichangas, Choriqueso, Chorizo, Cochinita, Cocido, Corunda, Curtido, Elote, Enchilada, Enfrijoladas, Entomatadas, Fajitas, Flautas, Guacamole, Flautas, Frijoles charros, Fritada, Gorditas, Gringas, Huauzontles, Huaraches, Jicama, Jocoque, Lengua, Machaca, Mancha manteles, Memela, Menudo, Molotes, Menudo, Mixiotes, Mole de olla, Mole poblano, Molletes, Molotes, Moronga, Nachos, Pambazos, Panucho, Papadzules, Parilladas, Pastel azteca, Pejelagarto, Picadillo, Quesadillas, Queso, Rajas con crema, Romeritos, Salbutes, Salsa, Sincronizadas, Tacos al pastor, Tacos, Taco al pastor, Tamales, Taquitos, Tlacoyos, Tlayudas, Tortas, Romeritos, Tortillas, Tostadas, Totopo, Tripas, Venado, Venison, Yuca, Cassava"
      }
    },
    {
      "id": 9,
      "datamaster": "rest",
      "userdata": {
        "id": "09",
        "name": "La Font del Gat",
        "rating": "7",
        "cuisine": "Spanish Mediterranean",
        "address": "P. Santa Madrona 28, 08038 Barcelona, España",
        "phone": "932890404",
        "minprice": "19",
        "maxprice": "41",
        "email": "info@lafontdelgat.es",
        "reviews": "258",
        "dogs": "true",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/190807e5-3870-48bd-9185-b017f77d3ed8.jpg",
        "latitude": "41.36773",
        "longitude": "2.15772",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.36773+2.1577200000000403&ll=41.36773+2.1577200000000403",
        "tags": "La Font del Gat, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 10,
      "datamaster": "rest",
      "userdata": {
        "id": "10",
        "name": "Les Quinze Nits",
        "rating": "7.7",
        "cuisine": "Spanish Mediterranean",
        "address": "Plaza Real, 6, 08002 Barcelona, España",
        "phone": "933173075",
        "minprice": "21",
        "maxprice": "35",
        "email": "15nits@grupandilana.com",
        "reviews": "143",
        "dogs": "false",
        "card": "true",
        "accessibility": "false",
        "gluten": "true",
        "photo_path": "./images/9b0c2c44-f331-46ea-b4f0-60cb34a2c0e9.jpg",
        "latitude": "41.380498",
        "longitude": "2.175091",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3804981+2.175091199999997&ll=41.3804981+2.175091199999997",
        "tags": "Les Quinze Nits, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 11,
      "datamaster": "rest",
      "userdata": {
        "id": "11",
        "name": "La Macchina",
        "rating": "7.3",
        "cuisine": "Italian Pizza Pasta",
        "address": "Astúries, 17, 08012 Barcelona, España",
        "phone": "648085209",
        "minprice": "32",
        "maxprice": "49",
        "email": "res@spoonik.com",
        "reviews": "356",
        "dogs": "false",
        "card": "true",
        "accessibility": "false",
        "gluten": "false",
        "photo_path": "./images/c80189c1-9284-446a-adcb-758dcb1b15b0.jpg",
        "latitude": "41.40298",
        "longitude": "2.15358",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4029797+2.15358040000001&ll=41.4029797+2.15358040000001",
        "tags": "La Macchina, Italian Pizza Pasta, Restaurante, Ristorante, Italiano, Italiana, Abbacchio, vinagre, ahumado, ajo, ajo y aceite, cordero, agridulce, Al dente, macarrones, Amaretto, Anace / anís, anguilas, aperitivo, Arborio, Arogosta, Orange, arancine, ardor, asado, espárragos, Baccala , jacuzzi, vinagre balsámico, albahaca, beignets, galletas, carne, mezcladas cocidas corzos, roscón, chuletas, sopa, pan tostado, pudín, Gourmet, Hunter, calamares, Calzone, canela, Cannellini, cannoli, Capocollo, Caponata, Capozzelle, Alcaparras Capon, alcachofas, Carnaroli, Cassata, coliflor, col, garbanzos, Cioppino, cebollas, conservas, Cotto, mejillones, crema, crepes, agrio, crudo, dulce, dulces, Beans, relleno, Farro, hígado, Fiesta figura, filete, hinojo, focaccia, queso, Fra diablo, las fresas, tortillas, fritos, frutas, mariscos, champiñones, gambas, Giardiniera, claveles, Gnocchi, el queso Grana Padano, cangrejo, Grappa, Cuadrícula, palitos de pan, acolchar acolchado, Lauro, lentejas, limón, carne cerdo, almendras, Manguitos, Carne res, Marinara, Marítimo, Marsala, mascarpone, berenjena, mortadela, Mosto mozzarella, Navidad, avellanas, nuez moscada, nueces, aceite oliva, orégano, cebada, ostras, tocino, Panella, panettone, rallado, Panna, Cotta, crema batida, parmesano, Pascua, pasta quebrada, pastel, Pecorino, pimientos, Pesto, picante, Pignoli, guisantes, Pizelle, la pizza Dolce, Polenta, pólipos, pollo, albóndigas, tomates, porchetta, Porcini, primavera, jamón, Provolone, Ragu, pirata, ribollita, ricotta, arroz, risotto, Rollatini, romana, Romero, rústico, salami, salsa, salchicha, salado, Saltari, Carnes, Sage, sambuca, San Giuseppe sardinas, vieiras, apio, Sfogliatelle, Sopressata, España, kebabs, espinacas, Stega, estofado, salsas, Taralli, atún, turrón, torta, una fiesta, EW, uvas, verduras, ternera, almejas, Zabaglione, azafrán, trotón, jengibre, sopa calabaza Zeppole, Aceto, Affumicato, Aglio, Aglio e olio, Agnello, Agrodolce, Amaretti, Anace/Anice, Anguille, Anisette, Antipasto, Arancia, Arancine, Ardente, Arrostito, Arrosto, Asparagi, Baccala, Bagno caldo, Balsamico, Basilico, Bigne, Biscotti, Bistecca, Bollito misto, Bottarga, Braciolette, Braciole, Brodo, Bruschetta, Budino, Buongustaio, Cacciatore, Calamari, Cannella, Cannoli, Capperi, Cappone, Carciofi, Carne, Cavolfiore, Cavolo, Ceci, Cipolle, Conserva, Cotolette, Cozze, Crema, Crespelle, Crostata, Crudo, Dolci, Fagioli, Farcita, Fegato, Festa, Fico, Filetto, Finocchio, Focaccia, Formaggio, diavolo, Fragole, Frittata, Frittelle, Fritto, Frutta, Frutti di mare, Funghi, Gamberetti, Gardiniera, Garofani, Granchio, Griglia, Grissini, Imbottire, Imbottita, Lenticchie, Limone, Maiale, Mandorle, Manicotti, Manzo, Marinare, Mascarpone, Melanzane, Minestra, Minestrina, Minestrone, Mortadella, Mozzarella, Natale, Nocciole, Noce Moscata, Noci, Olio, Olio Origano, Orzo, Ostriche, Pancetta, Pane, Panettone, Pangrattato, Panna montata, Parmigiano, Pasqua, Pasta Frolla, Pasticcio, Peperoncini, Piccante, Piselli, Pizza Polipi, Pollo, Polpette, Pomodori, Porchetta, Primavera, Prosciutto, Rapini, Ribollita, Ricotta, Ripieni, Riso, Risotto, Romano, Rosmarino, Rustico, Salami, Salsa, Salsiccia, Salso, Salumi, Salvia, Sambuca, Giuseppe, Sarde, Scaloppine, Sedani, Spagna, Spiedini, Spinaci, Stufato, Sughi, Sugo Tonno, Torrone, Torta, Una festa, Uove, Uva, Verdure, Vitello, Vongole, Zafferano, Zampone, Zenzero, Zucca, Zuppa"
      }
    },
    {
      "id": 12,
      "datamaster": "rest",
      "userdata": {
        "id": "12",
        "name": "Wok & Bol",
        "rating": "7.5",
        "cuisine": "Chinese Asiatic",
        "address": "Diputacio, 294, 08009 Barcelona, España",
        "phone": "933027675",
        "minprice": "15",
        "maxprice": "27",
        "email": "info@wokandbol.com",
        "reviews": "56",
        "dogs": "true",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/a8b37fbd-9456-4adf-bb1b-9f741d10816d.jpg",
        "latitude": "41.392906",
        "longitude": "2.170575",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3929055+2.170574600000009&ll=41.3929055+2.170574600000009",
        "tags": "Wok & Bol, Chinese Asiatic, Rollitos de primavera, Tallarines con berros, Chop suey, Lumpia, Pato pequin laqueado a la pekinesa, Chow mein, Sopa wantán, Wanton mee, Char kway teow, Zongzi, Pollo con arroz de Hainan, Chun kun, Arroz chaufa, Cerdo agridulce, Tallarines Lo Mein, Huevos Foo Young"
      }
    },
    {
      "id": 13,
      "datamaster": "rest",
      "userdata": {
        "id": "13",
        "name": "Pulpero de Lugo",
        "rating": "6.8",
        "cuisine": "Spanish Mediterranean",
        "address": "Calle Maragall 9, 08930 Sant Adrià de Besòs, España",
        "phone": "933810721",
        "minprice": "18",
        "maxprice": "32",
        "email": "pulperodelugo@gmail.com",
        "reviews": "87",
        "dogs": "true",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/3499bdfd-fcf5-4b15-a8dd-33748e3d4268.jpg",
        "latitude": "41.429881",
        "longitude": "2.219558",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4298814+2.2195581999999376&ll=41.4298814+2.2195581999999376",
        "tags": "Pulpero de Lugo, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 14,
      "datamaster": "rest",
      "userdata": {
        "id": "14",
        "name": "Senyor Parellada",
        "rating": "7.8",
        "cuisine": "Spanish Mediterranean",
        "address": "Carrer Argenteria 37, 08023 Barcelona, España",
        "phone": "933105094",
        "minprice": "16",
        "maxprice": "44",
        "email": "fonda@senyorparellada.com",
        "reviews": "127",
        "dogs": "false",
        "card": "false",
        "accessibility": "false",
        "gluten": "false",
        "photo_path": "./images/188f75d0-8696-4fad-9319-54364f34ca21.jpg",
        "latitude": "41.383779",
        "longitude": "2.180054",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3837792+2.1800544000000173&ll=41.3837792+2.1800544000000173",
        "tags": "Senyor Parellada, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 15,
      "datamaster": "rest",
      "userdata": {
        "id": "15",
        "name": "BelleBuon",
        "rating": "7.4",
        "cuisine": "Italian Pizza Pasta",
        "address": "Travessera de Gracia, 441, 08025 Barcelona, España",
        "phone": "935141971",
        "minprice": "21",
        "maxprice": "35",
        "email": "bellebuon@gmail.com",
        "reviews": "243",
        "dogs": "false",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/14ac5a3f-780a-4ba1-9868-bed1cb1d4f6d.jpg",
        "latitude": "41.411335",
        "longitude": "2.173162",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4113347+2.1731618000000026&ll=41.4113347+2.1731618000000026",
        "tags": "BelleBuon, Italian Pizza Pasta, Restaurante, Ristorante, Italiano, Italiana, Abbacchio, vinagre, ahumado, ajo, ajo y aceite, cordero, agridulce, Al dente, macarrones, Amaretto, Anace / anís, anguilas, aperitivo, Arborio, Arogosta, Orange, arancine, ardor, asado, espárragos, Baccala , jacuzzi, vinagre balsámico, albahaca, beignets, galletas, carne, mezcladas cocidas corzos, roscón, chuletas, sopa, pan tostado, pudín, Gourmet, Hunter, calamares, Calzone, canela, Cannellini, cannoli, Capocollo, Caponata, Capozzelle, Alcaparras Capon, alcachofas, Carnaroli, Cassata, coliflor, col, garbanzos, Cioppino, cebollas, conservas, Cotto, mejillones, crema, crepes, agrio, crudo, dulce, dulces, Beans, relleno, Farro, hígado, Fiesta figura, filete, hinojo, focaccia, queso, Fra diablo, las fresas, tortillas, fritos, frutas, mariscos, champiñones, gambas, Giardiniera, claveles, Gnocchi, el queso Grana Padano, cangrejo, Grappa, Cuadrícula, palitos de pan, acolchar acolchado, Lauro, lentejas, limón, carne cerdo, almendras, Manguitos, Carne res, Marinara, Marítimo, Marsala, mascarpone, berenjena, mortadela, Mosto mozzarella, Navidad, avellanas, nuez moscada, nueces, aceite oliva, orégano, cebada, ostras, tocino, Panella, panettone, rallado, Panna, Cotta, crema batida, parmesano, Pascua, pasta quebrada, pastel, Pecorino, pimientos, Pesto, picante, Pignoli, guisantes, Pizelle, la pizza Dolce, Polenta, pólipos, pollo, albóndigas, tomates, porchetta, Porcini, primavera, jamón, Provolone, Ragu, pirata, ribollita, ricotta, arroz, risotto, Rollatini, romana, Romero, rústico, salami, salsa, salchicha, salado, Saltari, Carnes, Sage, sambuca, San Giuseppe sardinas, vieiras, apio, Sfogliatelle, Sopressata, España, kebabs, espinacas, Stega, estofado, salsas, Taralli, atún, turrón, torta, una fiesta, EW, uvas, verduras, ternera, almejas, Zabaglione, azafrán, trotón, jengibre, sopa calabaza Zeppole, Aceto, Affumicato, Aglio, Aglio e olio, Agnello, Agrodolce, Amaretti, Anace/Anice, Anguille, Anisette, Antipasto, Arancia, Arancine, Ardente, Arrostito, Arrosto, Asparagi, Baccala, Bagno caldo, Balsamico, Basilico, Bigne, Biscotti, Bistecca, Bollito misto, Bottarga, Braciolette, Braciole, Brodo, Bruschetta, Budino, Buongustaio, Cacciatore, Calamari, Cannella, Cannoli, Capperi, Cappone, Carciofi, Carne, Cavolfiore, Cavolo, Ceci, Cipolle, Conserva, Cotolette, Cozze, Crema, Crespelle, Crostata, Crudo, Dolci, Fagioli, Farcita, Fegato, Festa, Fico, Filetto, Finocchio, Focaccia, Formaggio, diavolo, Fragole, Frittata, Frittelle, Fritto, Frutta, Frutti di mare, Funghi, Gamberetti, Gardiniera, Garofani, Granchio, Griglia, Grissini, Imbottire, Imbottita, Lenticchie, Limone, Maiale, Mandorle, Manicotti, Manzo, Marinare, Mascarpone, Melanzane, Minestra, Minestrina, Minestrone, Mortadella, Mozzarella, Natale, Nocciole, Noce Moscata, Noci, Olio, Olio Origano, Orzo, Ostriche, Pancetta, Pane, Panettone, Pangrattato, Panna montata, Parmigiano, Pasqua, Pasta Frolla, Pasticcio, Peperoncini, Piccante, Piselli, Pizza Polipi, Pollo, Polpette, Pomodori, Porchetta, Primavera, Prosciutto, Rapini, Ribollita, Ricotta, Ripieni, Riso, Risotto, Romano, Rosmarino, Rustico, Salami, Salsa, Salsiccia, Salso, Salumi, Salvia, Sambuca, Giuseppe, Sarde, Scaloppine, Sedani, Spagna, Spiedini, Spinaci, Stufato, Sughi, Sugo Tonno, Torrone, Torta, Una festa, Uove, Uva, Verdure, Vitello, Vongole, Zafferano, Zampone, Zenzero, Zucca, Zuppa"
      }
    },
    {
      "id": 16,
      "datamaster": "rest",
      "userdata": {
        "id": "16",
        "name": "Kibuka",
        "rating": "8.2",
        "cuisine": "Japanese Sushi Asiatic",
        "address": "Calle Verdi, 64, 08012 Barcelona, España",
        "phone": "934159217",
        "minprice": "22",
        "maxprice": "27",
        "email": "mailkibuka@kibuka.com",
        "reviews": "76",
        "dogs": "true",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/51cdd2f4-1702-4f1f-b419-c74c8b212921.jpg",
        "latitude": "41.404879",
        "longitude": "2.155835",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4048785+2.1558345999999347&ll=41.4048785+2.1558345999999347",
        "tags": "Kibuka, Japanese Sushi Asiatic, Japo, Japones, Japanese, Japonesa, Sushi, Niguiri, Nigiri, Makizushi, Miso Soup, Yakitori, Tempura, Edamame, Ramen, Mochi, Okonomiyaki, Sashimi, Oden, Soba, Natto, Onigiri, Japanese Curry Rice, Udon, Kaiseki, Yakiniku, Takoyaki, Yuba, Sukiyaki, Kare raisu, Shabu, Green Tea"
      }
    },
    {
      "id": 17,
      "datamaster": "rest",
      "userdata": {
        "id": "17",
        "name": "A Tavola",
        "rating": "7.4",
        "cuisine": "Italian Pizza Pasta",
        "address": "Plaça Eivissa, 2, 08032 Barcelona, España",
        "phone": "933576224",
        "minprice": "19",
        "maxprice": "34",
        "email": "hola@atavola.com",
        "reviews": "23",
        "dogs": "false",
        "card": "true",
        "accessibility": "false",
        "gluten": "false",
        "photo_path": "./images/603e68ad-c47e-4572-b4fc-af66879d09cf.jpg",
        "latitude": "41.430001",
        "longitude": "2.161187",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4300012+2.161187199999972&ll=41.4300012+2.161187199999972",
        "tags": "A Tavola, Italian Pizza Pasta, Restaurante, Ristorante, Italiano, Italiana, Abbacchio, vinagre, ahumado, ajo, ajo y aceite, cordero, agridulce, Al dente, macarrones, Amaretto, Anace / anís, anguilas, aperitivo, Arborio, Arogosta, Orange, arancine, ardor, asado, espárragos, Baccala , jacuzzi, vinagre balsámico, albahaca, beignets, galletas, carne, mezcladas cocidas corzos, roscón, chuletas, sopa, pan tostado, pudín, Gourmet, Hunter, calamares, Calzone, canela, Cannellini, cannoli, Capocollo, Caponata, Capozzelle, Alcaparras Capon, alcachofas, Carnaroli, Cassata, coliflor, col, garbanzos, Cioppino, cebollas, conservas, Cotto, mejillones, crema, crepes, agrio, crudo, dulce, dulces, Beans, relleno, Farro, hígado, Fiesta figura, filete, hinojo, focaccia, queso, Fra diablo, las fresas, tortillas, fritos, frutas, mariscos, champiñones, gambas, Giardiniera, claveles, Gnocchi, el queso Grana Padano, cangrejo, Grappa, Cuadrícula, palitos de pan, acolchar acolchado, Lauro, lentejas, limón, carne cerdo, almendras, Manguitos, Carne res, Marinara, Marítimo, Marsala, mascarpone, berenjena, mortadela, Mosto mozzarella, Navidad, avellanas, nuez moscada, nueces, aceite oliva, orégano, cebada, ostras, tocino, Panella, panettone, rallado, Panna, Cotta, crema batida, parmesano, Pascua, pasta quebrada, pastel, Pecorino, pimientos, Pesto, picante, Pignoli, guisantes, Pizelle, la pizza Dolce, Polenta, pólipos, pollo, albóndigas, tomates, porchetta, Porcini, primavera, jamón, Provolone, Ragu, pirata, ribollita, ricotta, arroz, risotto, Rollatini, romana, Romero, rústico, salami, salsa, salchicha, salado, Saltari, Carnes, Sage, sambuca, San Giuseppe sardinas, vieiras, apio, Sfogliatelle, Sopressata, España, kebabs, espinacas, Stega, estofado, salsas, Taralli, atún, turrón, torta, una fiesta, EW, uvas, verduras, ternera, almejas, Zabaglione, azafrán, trotón, jengibre, sopa calabaza Zeppole, Aceto, Affumicato, Aglio, Aglio e olio, Agnello, Agrodolce, Amaretti, Anace/Anice, Anguille, Anisette, Antipasto, Arancia, Arancine, Ardente, Arrostito, Arrosto, Asparagi, Baccala, Bagno caldo, Balsamico, Basilico, Bigne, Biscotti, Bistecca, Bollito misto, Bottarga, Braciolette, Braciole, Brodo, Bruschetta, Budino, Buongustaio, Cacciatore, Calamari, Cannella, Cannoli, Capperi, Cappone, Carciofi, Carne, Cavolfiore, Cavolo, Ceci, Cipolle, Conserva, Cotolette, Cozze, Crema, Crespelle, Crostata, Crudo, Dolci, Fagioli, Farcita, Fegato, Festa, Fico, Filetto, Finocchio, Focaccia, Formaggio, diavolo, Fragole, Frittata, Frittelle, Fritto, Frutta, Frutti di mare, Funghi, Gamberetti, Gardiniera, Garofani, Granchio, Griglia, Grissini, Imbottire, Imbottita, Lenticchie, Limone, Maiale, Mandorle, Manicotti, Manzo, Marinare, Mascarpone, Melanzane, Minestra, Minestrina, Minestrone, Mortadella, Mozzarella, Natale, Nocciole, Noce Moscata, Noci, Olio, Olio Origano, Orzo, Ostriche, Pancetta, Pane, Panettone, Pangrattato, Panna montata, Parmigiano, Pasqua, Pasta Frolla, Pasticcio, Peperoncini, Piccante, Piselli, Pizza Polipi, Pollo, Polpette, Pomodori, Porchetta, Primavera, Prosciutto, Rapini, Ribollita, Ricotta, Ripieni, Riso, Risotto, Romano, Rosmarino, Rustico, Salami, Salsa, Salsiccia, Salso, Salumi, Salvia, Sambuca, Giuseppe, Sarde, Scaloppine, Sedani, Spagna, Spiedini, Spinaci, Stufato, Sughi, Sugo Tonno, Torrone, Torta, Una festa, Uove, Uva, Verdure, Vitello, Vongole, Zafferano, Zampone, Zenzero, Zucca, Zuppa"
      }
    },
    {
      "id": 18,
      "datamaster": "rest",
      "userdata": {
        "id": "18",
        "name": "Txetxu Taverna",
        "rating": "6.6",
        "cuisine": "Spanish Mediterranean",
        "address": "Tajo, 29, 08031 Barcelona, España",
        "phone": "934205880",
        "minprice": "23",
        "maxprice": "46",
        "email": "info@txetxu-taverna.es",
        "reviews": "31",
        "dogs": "false",
        "card": "true",
        "accessibility": "false",
        "gluten": "false",
        "photo_path": "./images/82849ddc-fc46-4258-8628-536b9eb19f53.jpg",
        "latitude": "41.429798",
        "longitude": "2.162455",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.4297978+2.1624553000000333&ll=41.4297978+2.1624553000000333",
        "tags": "Txetxu Taverna, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 19,
      "datamaster": "rest",
      "userdata": {
        "id": "19",
        "name": "Koh-i-noor india",
        "rating": "8.7",
        "cuisine": "Indian",
        "address": "Carrer del Marques de Campo Sagrado, 3, 08015 Barcelona, España",
        "phone": "931799048",
        "minprice": "15",
        "maxprice": "50",
        "email": "lamacchina@gmail.com",
        "reviews": "143",
        "dogs": "false",
        "card": "false",
        "accessibility": "false",
        "gluten": "false",
        "photo_path": "./images/0549c086-d579-4c12-a414-e0d0b19ae140.jpg",
        "latitude": "41.375567",
        "longitude": "2.163469",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3755671+2.1634685000000218&ll=41.3755671+2.1634685000000218",
        "tags": "Koh-i-noor india, Indian, Indian, India, Hindú, Aloo gobi, Baati, Bhatura, Biryani, Chaat, Chana masala, Chapati, Falooda, Gulqand, Khichdi, Kulcha, Kulfi, Makki di roti, Naan, Palak paneer, Paratha, Peda, Pollo con mantequilla, Pollo tandoori, Rājmā, Samosa, Shahi paneer, Singori, Pakhal, Rasgulla, Sandesh, Bonda, Dosa, Hyderabadi Biryani, Idli, Pesarattu, Pulihora, Puttu, Rasam, Sambhar, Uttapam, Vada, Bhakri, Dahi vada, Dhokla, Khakhra, Poha, Vada pav, Vindaloo"
      }
    },
    {
      "id": 20,
      "datamaster": "rest",
      "userdata": {
        "id": "20",
        "name": "Viana",
        "rating": "7.4",
        "cuisine": "Spanish Mediterranean",
        "address": "Carrer del Vidre, 7, 08002 Barcelona, España",
        "phone": "934638295",
        "minprice": "22",
        "maxprice": "34",
        "email": "info@vianabcn.com",
        "reviews": "165",
        "dogs": "true",
        "card": "false",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/5758987c-cc55-42f2-90c4-ee793cbe167a.jpg",
        "latitude": "41.379832",
        "longitude": "2.176298",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3798315+2.1762982000000193&ll=41.3798315+2.1762982000000193",
        "tags": "Viana, Spanish Mediterranean, Español, Española, Restaurante, Jamon, Vegetariano, Vegetal, Abulon, Adobo, Almeja, Aceituna, Agridulce, Ajo, Albahaca, Alcachofa, Alcaparras, Albóndigas, Allioli, Almendras, Anchoas, Ahumado, Arenque, Arroz, Almejas, Angulas, Atún, Azafrán, Bacalao, Berenjena, Besugo, Brasa, Butifarra, Caballa, Cabrales, Cabrito asado, Cacahuetes, Calamares, Callos, Canela, Cangrejo, Castaña, Cazón, Cebollas, Cherne, Cigala, Cigarra, Col, Codorniz, Conejo, Costillas, Crudo, Crujiente, crocante, Dorada En Escabeche, Ensalada, Escalfado, Estofado, Flan, Galera, Gambas, Garbanzos, Gazpacho, Guisantes, Habas, Helado, Higado, Higos, Hinojo, Huevos Idiazábal, Jamón, Jabugo, Judías, Langosta, LechónTostón Cochinillo, Lenguado, Liebre Mahón, Mantequilla, Manzana, Mariscos, Mejillones, Melocotón, Membrillo, Menestra, Morcilla, Merluza, Miel, Natillas, Naranja, Necora, Ñora, Oca, Ostras, Paella, Pan, Patatas, Pato, Pescado, Pera, Perdiz, Percebes, Pez de San Pedro, Espada, Pimienta, Pimientos, Piña, Piperada, Pisto Manchego, Plátano, Pollo, Pomelo, Puerros, Pulpo Queso, Rape, Raya, Revuelto, A la Romana, Romero, Romesco Xato, Salbitxada, Rodaballo, Roncal, Sabor, Salchica, Salmonete, Sardinas, Sepia, Setas, Sidra, Sofrito, Solomillo, Sopa, Tarta, Ternera, Ternera Picada, Tetilla, Tiburon, Tila, Tomate, Tomillo, Tortilla, Trucha, Venado ciervo, Vieiras Zamburiña, Zanahorias, Zarzuela, Zumo Basque Specialties Bonito, Centollo or Txangurro, Ensalada Kiskillas, Kokotxa, Lubina a pimienta verde, Marmitako, Mero, Necoras, Perretxiku, Porrusalda, Txirlas, Txipirones en su tinta, Piil, Bizkaina, Soda Fried Chicken Pollo frito Egg and sausage sandwich Emparedado huevo y salchichas Bacon cheeseburger Hamburguesa queso con tocino French fries papas fritas Milk shake Batido Deep fried cheese sticks Palitos Fish chips Pescado Pepperoni Tuna melt Atun derretido Caesar salad ensalada Cesar Hamburger chili Chile hamburguesa Nachos Popcorn shrimp Palomitas maíz Churros Cheesecake Tarta Hot dog Pancho Teriyaki chicken teriyaki fillet Sándwich filete pescado Beef burrito Burrito carne Taco nuggets Nuggets pollo Leche Cold cut frío Chef\u2019s del chef Burger Sausages Salchichas Noodles Fideos Pasta Donuts Potato Patatas Crisps maiz Sweets Dulces Biscuits Galletas Ice Cream Helado wedges Trozos papa Pancakes Panqueques"
      }
    },
    {
      "id": 21,
      "datamaster": "rest",
      "userdata": {
        "id": "21",
        "name": "L'Olla de Si Chuan",
        "rating": "6.5",
        "cuisine": "Chinese Asiatic",
        "address": "Carrer d'Aragó, 224, 08011 Barcelona, España",
        "phone": "934023475",
        "minprice": "22",
        "maxprice": "38",
        "email": "si.chuan@gmail.com",
        "reviews": "231",
        "dogs": "false",
        "card": "true",
        "accessibility": "true",
        "gluten": "false",
        "photo_path": "./images/9f04210e-6e03-4d26-bf0f-70ed13339035.jpg",
        "latitude": "41.388382",
        "longitude": "2.16047",
        "google_maps": "http://maps.google.com/maps?&z=10&q=41.3883816+2.1604701999999634&ll=41.3883816+2.1604701999999634",
        "tags": "L'Olla de Si Chuan, Chinese Asiatic, Rollitos de primavera, Tallarines con berros, Chop suey, Lumpia, Pato pequin laqueado a la pekinesa, Chow mein, Sopa wantán, Wanton mee, Char kway teow, Zongzi, Pollo con arroz de Hainan, Chun kun, Arroz chaufa, Cerdo agridulce, Tallarines Lo Mein, Huevos Foo Young"
      }
    }
  ];

  jimData.datamasters["cuisine"] = [
    {
      "id": 1,
      "datamaster": "cuisine",
      "userdata": {
        "type": ""
      }
    },
    {
      "id": 2,
      "datamaster": "cuisine",
      "userdata": {
        "type": "Asiatic"
      }
    },
    {
      "id": 3,
      "datamaster": "cuisine",
      "userdata": {
        "type": "Chinese"
      }
    },
    {
      "id": 4,
      "datamaster": "cuisine",
      "userdata": {
        "type": "Indian"
      }
    },
    {
      "id": 5,
      "datamaster": "cuisine",
      "userdata": {
        "type": "Italian"
      }
    },
    {
      "id": 6,
      "datamaster": "cuisine",
      "userdata": {
        "type": "Japanese"
      }
    },
    {
      "id": 7,
      "datamaster": "cuisine",
      "userdata": {
        "type": "Mediterranean"
      }
    },
    {
      "id": 8,
      "datamaster": "cuisine",
      "userdata": {
        "type": "Mexican"
      }
    },
    {
      "id": 9,
      "datamaster": "cuisine",
      "userdata": {
        "type": "Spanish"
      }
    }
  ];

  jimData.isInitialized = true;
}