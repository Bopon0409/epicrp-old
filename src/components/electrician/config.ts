import { IItem } from './models'

export const timers = [10, 30, 60]

export const hintText = `В данной мини - игре Вам предстоит вращать фигуры при
  помощи левой кнопки мыши так, чтобы все они были замкнуты между собой. На
  выполнение этой задачи у Вас будет 10 секунд. Если Вы не сможете справиться 
  за 10 секунд, игра будет окончена.`

export const testInit: IItem[] = [
  {
    figure: 1,
    position: [1, 1],
    rotation: 1
  },
  {
    figure: 1,
    position: [1, 2],
    rotation: 1
  },
  {
    figure: 1,
    position: [1, 3],
    rotation: 1
  },
  {
    figure: 1,
    position: [2, 1],
    rotation: 1
  },
  {
    figure: 1,
    position: [2, 2],
    rotation: 1
  },
  {
    figure: 1,
    position: [2, 3],
    rotation: 1
  },
  {
    figure: 1,
    position: [3, 1],
    rotation: 1
  },
  {
    figure: 1,
    position: [3, 2],
    rotation: 1
  },
  {
    figure: 1,
    position: [3, 3],
    rotation: 1
  }
]

export const testFinish: IItem[] = [
  { figure: 1, position: [1, 1], rotation: 1 },
  {
    figure: 1,
    position: [1, 2],
    rotation: 1
  },
  {
    figure: 1,
    position: [1, 3],
    rotation: 1
  },
  {
    figure: 1,
    position: [2, 1],
    rotation: 1
  },
  {
    figure: 1,
    position: [2, 2],
    rotation: 1
  },
  {
    figure: 1,
    position: [2, 3],
    rotation: 1
  },
  {
    figure: 1,
    position: [3, 1],
    rotation: 2
  },
  {
    figure: 1,
    position: [3, 2],
    rotation: 2
  },
  {
    figure: 1,
    position: [3, 3],
    rotation: 2
  }
]