(function(window, undefined) {
  var dictionary = {
    "ddc92d21-e075-4042-947d-017e55f9357b": "müze",
    "27a57681-edc9-4104-8d28-0f51fdb9e73a": "tiyatro",
    "73d9e691-4248-4a88-a9fb-3de4f8b99a75": "uyetiyatro",
    "4046a99f-8e2d-4cc2-baaf-8f26a261f79c": "HATIRLATMA DÜZENLE",
    "d5f9c893-bc39-427a-9f10-0a76ef4a76e3": "uyemüze",
    "cbe0d774-3b3d-4d28-b9b5-c4ee8bf34677": "uyeanasayfa",
    "97c5880e-4838-4ac7-9332-beae086204a8": "uyesöyleşi",
    "66303c1d-4761-43d2-9998-072da2af0ae2": "uyekonser",
    "da2f946f-a810-47c7-83ad-f545bbca0968": "Hatırlatma Ekle",
    "bfcc2c4f-69f9-4f9b-9409-d9c6331bd213": "davet",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Giriş Yap",
    "b8ff71d6-a8b9-447b-b9ac-38818586b8a6": "Üye Ol",
    "b55c1867-84b7-40d9-a39f-ee983f25771c": "Etkinlikler",
    "9f08ff0e-8793-4eb2-933f-a5cd4dd6b91a": "Şifremi Unuttum",
    "93e40a0f-3d30-4ac1-b5ce-4a5de0c64ff4": "uyeEtkinlikler",
    "a2427786-c7b1-41a0-9131-3e7fa5f33255": "uyearama",
    "7372961e-fac0-48d0-9a03-a99db7c77fa9": "muzetiyatro",
    "aab92da2-0080-41ef-b9d1-900699910cf8": "arama",
    "e2608544-fad6-4a9b-9d80-07722285854f": "konser",
    "34b3dbc4-dc62-4b08-bb23-041c7a623cd2": "uyemuzetiyatro",
    "21170c17-b8c1-43f6-9d7f-36ccbc400ed7": "anasayfa",
    "3ca21155-dc9f-413d-84af-ae2efd7aa365": "her etkinlikler",
    "10fa06ca-ba1b-42bb-9f8e-5bebc682f9e5": "söyleşi",
    "33b959a6-03b0-43ee-84da-4b9caf0833e9": "uye her etkinlikler",
    "2a81aa0f-a3d7-4799-a914-b690bd16e3fe": "Profilim",
    "1b087462-ce89-4e96-a9b4-49f4b2f668a3": "Hatırlatma Etkinliklerim",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);