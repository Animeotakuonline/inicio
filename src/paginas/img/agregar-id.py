import json

# Lista de diccionarios original
data = [
    {
    imageSrc: "../../img/2023/burn-the-witch-08.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Burn the Witch 0.8",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"278",
  },
  {
    imageSrc: "../../img/2023/jashin-chan-dropkick-seikimatsu-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Jashin-chan Dropkick &quot;Seikimatsu-hen&quot;",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"277",
  },
  {
    imageSrc: "../../img/2023/xiao-lu-he-xiao-lan-4th-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Xiao Lu He Xiao Lan 4th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"276",
  },
  {
    imageSrc: "../../img/2023/huoxing-xi-lu-7-hao.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Huoxing Xi Lu 7 Hao",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"275",
  },
  {
    imageSrc: "../../img/2023/xian-wang-de-richang-shenghuo-4.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "The Daily Life of the Immortal King 4",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"274",
  },
  {
    imageSrc: "../../img/2023/twi-yaba.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Twi-Yaba",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"273",
  },
  {
    imageSrc: "../../img/2023/ran-xia.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ran Xia",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"272",
  },
  {
    imageSrc: "../../img/2023/bu-shi-bu-mie.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bu Shi Bu Mie",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"271",
  },
  {
    imageSrc: "../../img/2023/shi-fang-wu-sheng.jpg",
    dateAdded: "2023-",
    dateOfRelease: "Fecha de emisión",
    name: "Shi Fang Wu Sheng",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"270",
  },
  {
    imageSrc: "../../img/2023/ni-de-rensheng-shi-wo-lai-chi-le.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ni De Rensheng Shi Wo Lai Chi Le",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"269",
  },
  {
    imageSrc: "../../img/2023/qi-hou-bilu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Qi Hou Bilu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"268",
  },
]

# Función para crear un id a partir del nombre
def create_id(name):
    # Convertir a minúsculas, eliminar comillas y caracteres especiales, y reemplazar espacios con guiones
    return name.lower().replace('&quot;', '').replace(' ', '-')

# Añadir el campo id a cada diccionario en la lista
for item in data:
    item['id'] = create_id(item['name'])

# Mostrar el resultado
print(json.dumps(data, indent=2, ensure_ascii=False))
