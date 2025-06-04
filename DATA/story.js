var data_items = [
    {
        "name": "GDP-650C A-90-SERIES",
        "type": "PSU",
        "time": "",
        "price": [2500, 5399],
        "icon": "GDN_650C_A_90.png",
        "vend": "CHIEFTEC",
        "link": "https://www.chieftec.eu/products-detail/109/A-90-SERIES/111/GDP-650C",
        "have": false
    },
    {
        "name": "F4-3000C15Q-16GRR (EOL)",
        "type": "RAM",
        "time": "",
        "price": [3500, 16900],
        "icon": "F4-3000C15Q-16GRR.webp",
        "vend": "G.SKILL",
        "link": "https://www.gskill.com/product/165/172/1535953960/F4-3000C15Q-16GRR-EOL",
        "have": false
    },
    {
        "name": "CUSO",
        "type": "RAM",
        "time": "",
        "price": [3200, 0],
        "icon": "",
        "vend": "CUSO",
        "link": "https://aliexpress.ru/store/912510572?spm=a2g2w.detail.feedback.3.20375613aba3fg",
        "have": false
    },
    {
        "name": "B450M DS3H (rev. 1.x)",
        "type": "MB",
        "time": "",
        "price": [3800, 6000],
        "icon": "B450M_DS3H.webp",
        "vend": "GIGABYTE",
        "link": "https://www.gigabyte.ru/products/page/mb/b450m_ds3hrev_10#kf",
        "have": false
    },
    {
        "name": "PRIME B450M-K II",
        "type": "MB",
        "time": "",
        "price": [4400, 8300],
        "icon": "PRIME_B450M-K_II.webp",
        "vend": "ASUS",
        "link": "https://www.asus.com/ru/motherboards-components/motherboards/prime/prime-b450m-k-ii/",
        "have": false
    },
    {
        "name": "RX 580",
        "type": "GPU",
        "time": "27-12-22",
        "price": [5000, 0],
        "icon": "",
        "vend": "",
        "link": "",
        "have": false
    },
    {
        "name": "RX 580",
        "type": "GPU",
        "time": "27-12-22",
        "price": [5000, 0],
        "icon": "",
        "vend": "",
        "link": "",
        "have": false
    },
    {
        "name": "Jonsbo 140mm 3pin (29шт)",
        "type": "FAN",
        "time": "02-01-23",
        "price": [150, 250],
        "icon": "jonsbo_140mm.webp",
        "vend": "JONSBO",
        "link": "https://www.jonsbo.com/en/",
        "have": false
    },
    {
        "name": "Jonsbo 120mm 14sm 3pin (27шт)",
        "type": "FAN",
        "time": "02-01-23",
        "price": [150, 250],
        "icon": "jonsbo_140mm.webp",
        "vend": "JONSBO",
        "link": "https://www.jonsbo.com/en/",
        "have": false
    },
    {
        "name": "Jonsbo 120mm 34sm 3pin (21шт)",
        "type": "FAN",
        "time": "02-01-23",
        "price": [150, 250],
        "icon": "jonsbo_140mm.webp",
        "vend": "JONSBO",
        "link": "https://www.jonsbo.com/en/",
        "have": false
    },
    {
        "name": "MQ01ABD100",
        "type": "HDD",
        "time": "04-01-23",
        "price": [450, 4500],
        "icon": "",
        "vend": "TOSHIBA",
        "link": "https://toshiba.semicon-storage.com/eu/storage/product/internal-specialty/pc/articles/mq01abd-series.html",
        "have": false
    },
    {
        "name": "System Power 9 500W",
        "type": "PSU",
        "time": "12-01-23",
        "price": [2500, 3999],
        "icon": "",
        "vend": "be quiet!",
        "link": "https://www.bequiet.com/ru/powersupply/1280",
        "have": false
    },
    {
        "name": "Cylon Mini Tempered Glass",
        "type": "CC",
        "time": "14-01-23",
//        "price": [2500, 0],
        "icon": ["Cylon_Mini_Tempered_Glass.png", 2, 2],
        "vend": "AeroCool",
        "link": "https://aerocool.io/ru/product/cylon-mini-tempered-glass/",
        "have": true
    },
    {
        "name": "GA-F2A55M-DS2",
        "type": "MB",
        "time": "",
        "price": [0, 0],
        "icon": "",
        "vend": "GIGABYTE",
        "link": "https://www.gigabyte.ru/products/page/mb/ga-f2a55m-ds2rev_10/kf",
        "have": false
    },
    {
        "name": "GTX 1070",
        "type": "GPU",
        "time": "",
        "icon": ["gtx_1070.jpg", 1, 2],
        "vend": "Asus",
        "link": "",
        "have": true
    },
    {
        "name": "GT 730",
        "type": "GPU",
        "time": "",
        "icon": ["gt_730.webp", 1, 2],
        "vend": "Asus",
        "link": "",
        "have": true
    },
    {
        "name": "GTX 1070 TI",
        "type": "GPU",
        "time": "",
        "icon": ["gtx_1070_ti_msi_duke.jpg", 1, 2],
        "vend": "MSI",
        "link": "",
        "have": true
    },
    
    {
        "name": "Jonsbo 120mm 34sm 3pin+Molex",
        "type": "FAN",
        "time": "02-01-23",
//        "price": [150, 250],
        "icon": ["jonsbo_140mm.webp", 1, 1],
        "vend": "JONSBO",
        "link": "https://www.jonsbo.com/en/",
        "have": true
    },
    {
        "name": "i70c PWM",
        "type": "FAN",
        "time": "",
        "icon": ["i70c_PWM.webp", 1, 1],
        "vend": "CoolerMaster",
        "link": "",
        "have": true
    },
    {
        "name": "ARDOR GAMING Immortality",
        "type": "GPU",
        "time": "",
        "icon": ["AG-FL-IM104GY-W.webp", 1, 3],
        "vend": "ARDOR",
        "link": "",
        "have": true
    },

    {
        "name": "Cyclop M100R1",
        "type": "CAM",
        "time": "",
        "icon": ["Cyclop_M100R1.png", 1, 1],
        "vend": "ZET GAMING",
        "link": "",
        "have": true
    },
];