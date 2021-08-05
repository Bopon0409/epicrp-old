type TFather = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
  12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 42 | 43 | 44

type TMother = 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
  31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 45

type TLeather = 1 | 2 | 3 | 4 | 5 | 6

export interface CreatePersDocs {
  // Окончание создания персонажа
  'character.created': []
  'character.validation': {
    name: string, surname: string, sex: 'male' | 'female', age: number
  },
  // Изменение параметров персонажа
  'character.update': [
    // Родители (иконки родителей в public/images/create-pers/parents)
    [valueName: 'mother', value: TMother],
    [valueName: 'father', value: TFather],

    // Схожесть (значение: от 0 до 1)
    [valueName: 'parentsSimilarity', value: number],
    // Цвет кожи (значение: от 0 до 1)
    [valueName: 'skinColor ', value: number],

    // Форма лица (значение: от -1 до 1)
    [valueName: 'noseWidth', value: number],
    [valueName: 'noseHeight', value: number],
    [valueName: 'noseTipLength', value: number],
    [valueName: 'depthOfTheBridgeOfTheNose', value: number],
    [valueName: 'brokenNose', value: number],
    [valueName: 'eyebrowHeight', value: number],
    [valueName: 'heightOfCheekbones', value: number],
    [valueName: 'cheekboneWidth', value: number],
    [valueName: 'cheekDepth', value: number],
    [valueName: 'lipThickness', value: number],
    [valueName: 'jawWidth', value: number],
    [valueName: 'jawShape', value: number],
    [valueName: 'chinHeight', value: number],
    [valueName: 'chinDepth', value: number],
    [valueName: 'chinIndent', value: number],

    // Особенности кожи
    [valueName: 'chinIndent', value: TLeather],
    [valueName: 'leatherAge', value: TLeather],
    [valueName: 'sunDamage', value: TLeather],
    [valueName: 'freckles', value: TLeather],

    //Глаза
    [valueName: 'eyeSize', value: number], // (значение: от -1 до 1)
    [valueName: 'colorEyes', value: string], // hex цвет

    //Волосы
    [valueName: 'eyebrows', value: number], // (значение: от 0 до 33)
    [valueName: 'colorEyebrows', value: string], // hex цвет
    [valueName: 'beard ', value: number], // (значение: от 0 до 28)
    [valueName: 'colorBeard', value: string], // hex цвет
    [valueName: 'hairstyle ', value: number], // (public/images/create-pers)
    [valueName: 'colorHairstyle', value: string], // hex цвет

    // Одежда
    [valueName: 'shirt', value: number], // id из входного json
    [valueName: 'colorShirt', value: string], // hex цвет
    [valueName: 'pants', value: number], // id из входного json
    [valueName: 'colorPaints', value: string], // hex цвет
    [valueName: 'shoes', value: number], // id из входного json
    [valueName: 'colorShoes', value: string], // hex цвет
  ]
}