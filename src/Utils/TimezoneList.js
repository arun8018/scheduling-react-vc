const timeZoneData = {
  "Pacific/Midway": "(GMT-11:00) Coordinated Universal Time",
  "Pacific/Honolulu": "(GMT-10:00) - Hawaiian Standard Time",
  "America/Anchorage": "(GMT-09:00) Alaska - AKDT",
  "America/Santa_Isabel": "(GMT-08:00) Baja California - PDT",
  "America/Dawson": "(GMT-07:00) Pacific Time (US & Canada) - PDT",
  "America/Los_Angeles": "(GMT-08:00) Pacific Time (US & Canada) - PST",
  "America/Creston": "(GMT-07:00) Arizona - UMST",
  "America/Chihuahua": "(GMT-07:00) Chihuahua, La Paz, Mazatlan - MDT",
  "America/Boise": "(GMT-07:00) Mountain Time (US & Canada) - MDT",
  "America/Belize": "(GMT-06:00) Central America - CAST",
  "America/Chicago": "(GMT-06:00) Central Time (US & Canada) - CDT",
  "America/Bahia_Banderas":
    "(GMT-06:00) Guadalajara, Mexico City, Monterrey - CDT",
  "America/Regina": "(GMT-06:00) Saskatchewan - CCST",
  "America/Bogota": "(GMT-05:00) Bogota, Lima, Quito - SPST",
  "America/Detroit": "(GMT-05:00) Eastern Time (US & Canada) - EDT",
  "America/Indiana/Marengo": "(GMT-05:00) Indiana (East) - UEDT",
  "America/Caracas": "(GMT-04:30) Caracas - VST",
  "America/Asuncion": "(GMT-04:00) Asuncion - PYT",
  "America/Glace_Bay": "(GMT-04:00) Atlantic Time (Canada) - ADT",
  "America/Campo_Grande": "(GMT-04:00) Cuiaba - CBST",
  "America/Anguilla": "(GMT-04:00) Georgetown, La Paz, Manaus, San Juan - SWST",
  "America/Santiago": "(GMT-04:00) Santiago - PSST",
  "America/St_Johns": "(GMT-03:30) Newfoundland - NDT",
  "America/Sao_Paulo": "(GMT-03:00) Brasilia - ESAST",
  "America/Argentina/La_Rioja": "(GMT-03:00) Buenos Aires - AST",
  "America/Araguaina": "(GMT-03:00) Cayenne, Fortaleza - SEST",
  "America/Godthab": "(GMT-03:00) Greenland - GDT",
  "America/Montevideo": "(GMT-03:00) Montevideo - MST",
  "America/Bahia": "(GMT-03:00) Salvador - BST",
  "America/Noronha": "(GMT-02:00) Coordinated Universal Time-02 - U",
  "America/Scoresbysund": "(GMT-01:00) Azores - ADT",
  "Atlantic/Cape_Verde": "(GMT-01:00) Cape Verde Is. - CVST",
  "Africa/Casablanca": "(GMT) Casablanca - MDT",
  "America/Danmarkshavn": "(GMT) Coordinated Universal Time - UTC",
  "Europe/Isle_of_Man": "(GMT) Edinburgh, London - GMT",
  "Europe/Isle_of_Man ": "(GMT+01:00) Edinburgh, London - BST",
  "Atlantic/Canary": "(GMT) Dublin, Lisbon - GDT",
  "Africa/Abidjan": "(GMT) Monrovia, Reykjavik - GST",
  "Arctic/Longyearbyen":
    "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna - WEDT",
  "Europe/Belgrade":
    "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague - CEDT",
  "Africa/Ceuta": "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris - RDT",
  "Europe/Sarajevo": "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb - CEDT",
  "Africa/Algiers": "(GMT+01:00) West Central Africa - WCAST",
  "Africa/Windhoek": "(GMT+01:00) Windhoek - NST",
  "Asia/Nicosia": "(GMT+02:00) Athens, Bucharest - GDT",
  "Asia/Beirut": "(GMT+02:00) Beirut - MEDT",
  "Africa/Cairo": "(GMT+02:00) Cairo - EST",
  "Asia/Damascus": "(GMT+02:00) Damascus - SDT",
  "Asia/Nicosia ": "(GMT+02:00) E. Europe - EEDT",
  "Africa/Blantyre": "(GMT+02:00) Harare, Pretoria - SAST",
  "Europe/Helsinki":
    "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius - FDT",
  "Europe/Istanbul": "(GMT+03:00) Istanbul - TDT",
  "Asia/Jerusalem": "(GMT+02:00) Jerusalem - JDT",
  "Africa/Tripoli": "(GMT+02:00) Tripoli - LST",
  "Asia/Amman": "(GMT+03:00) Amman - JST",
  "Asia/Baghdad": "(GMT+03:00) Baghdad - AST",
  "Europe/Kaliningrad": "(GMT+02:00) Kaliningrad - KST",
  "Asia/Aden": "(GMT+03:00) Kuwait, Riyadh - AST",
  "Africa/Addis_Ababa": "(GMT+03:00) Nairobi - EAST",
  "Europe/Kirov": "(GMT+03:00) Moscow, St. Petersburg, Volgograd, Minsk - MSK",
  "Europe/Astrakhan": "(GMT+04:00) Samara, Ulyanovsk, Saratov - SAMT",
  "Asia/Tehran": "(GMT+03:30) Tehran - IDT",
  "Asia/Dubai": "(GMT+04:00) Abu Dhabi, Muscat - AST",
  "Asia/Baku": "(GMT+04:00) Baku - ADT",
  "Indian/Mahe": "(GMT+04:00) Port Louis - MST",
  "Asia/Tbilisi": "(GMT+04:00) Tbilisi - GET",
  "Asia/Yerevan": "(GMT+04:00) Yerevan - CST",
  "Asia/Kabul": "(GMT+04:30) Kabul - AST",
  "Antarctica/Mawson": "(GMT+05:00) Ashgabat, Tashkent - WAST",
  "Asia/Yekaterinburg": "(GMT+05:00) Yekaterinburg - YEKT",
  "Asia/Karachi": "(GMT+05:00) Islamabad, Karachi - PKT",
  "Asia/Kolkata": "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi - IST",
  "Asia/Colombo": "(GMT+05:30) Sri Jayawardenepura - SLST",
  "Asia/Kathmandu": "(GMT+05:45) Kathmandu - NST",
  "Antarctica/Vostok": "(GMT+06:00) Nur-Sultan (Astana) - CAST",
  "Asia/Dhaka": "(GMT+06:00) Dhaka - BST",
  "Asia/Rangoon": "(GMT+06:30) Yangon (Rangoon) - MST",
  "Antarctica/Davis": "(GMT+07:00) Bangkok, Hanoi, Jakarta - SAST",
  "Asia/Novokuznetsk": "(GMT+07:00) Novosibirsk - NCAST",
  "Asia/Hong_Kong": "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi - CST",
  "Asia/Krasnoyarsk": "(GMT+08:00) Krasnoyarsk - NAST",
  "Asia/Brunei": "(GMT+08:00) Kuala Lumpur, Singapore - MPST",
  "Antarctica/Casey": "(GMT+08:00) Perth - WAST",
  "Asia/Taipei": "(GMT+08:00) Taipei - TST",
  "Asia/Choibalsan": "(GMT+08:00) Ulaanbaatar - UST",
  "Asia/Irkutsk": "(GMT+08:00) Irkutsk - NAEST",
  "Asia/Dili": "(GMT+09:00) Osaka, Sapporo, Tokyo - JST",
  "Asia/Pyongyang": "(GMT+09:00) Seoul - KST",
  "Australia/Adelaide": "(GMT+09:30) Adelaide - CAST",
  "Australia/Darwin": "(GMT+09:30) Darwin - ACST",
  "Australia/Brisbane": "(GMT+10:00) Brisbane - EAST",
  "Australia/Melbourne": "(GMT+10:00) Canberra, Melbourne, Sydney - AEST",
  "Australia/Sydney" : "(GMT+11:00) Canberra, Melbourne, Sydney - AEDT",
  "Antarctica/DumontDUrville": "(GMT+10:00) Guam, Port Moresby - WPST",
  "Australia/Currie": "(GMT+10:00) Hobart - TST",
  "Asia/Chita": "(GMT+09:00) Yakutsk - YST",
  "Antarctica/Macquarie": "(GMT+11:00) Solomon Is., New Caledonia - CPST",
  "Asia/Sakhalin": "(GMT+11:00) Vladivostok - VST",
  "Antarctica/McMurdo": "(GMT+12:00) Auckland, Wellington - NZST",
  "Pacific/Fiji": "(GMT+12:00) Fiji - FST",
  "Asia/Anadyr": "(GMT+12:00) Magadan - MST",
  "Asia/Kamchatka": "(GMT+12:00) Petropavlovsk-Kamchatsky - Old - KDT",
  "Pacific/Apia": "(GMT+13:00) Samoa - SST",
};

export default function TimezoneList() {
  let formattedTimezone = Object.entries(timeZoneData).map(
    ([value, label]) => ({
      value,
      label,
    })
  );
  return formattedTimezone;
}
