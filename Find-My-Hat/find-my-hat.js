const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field, startRow = 0, startCol = 0) {
    this.field = field;
    this.actorRow = startRow;
    this.actorCol = startCol;

    this.field[this.actorRow][this.actorCol] = pathCharacter;
  }


  moveUp() {
    this.actorRow -= 1;
  }

  moveDown() {
    this.actorRow += 1;
  }

  moveLeft() {
    this.actorCol -= 1;
  }

  moveRight() {
    this.actorCol += 1;
  }

  print() {
    console.clear();
    const display = this.field.map(row => row.join('')).join('\n');
    console.log(display);
  }

  static generateField(height, width, percentage = 0.2) {
    const field = new Array(height).fill(null).map(() => new Array(width).fill(fieldCharacter));

    const startRow = Math.floor(Math.random() * height);
    const startCol = Math.floor(Math.random() * width);

    let hatRow, hatCol;
    do {
      hatRow = Math.floor(Math.random() * height);
      hatCol = Math.floor(Math.random() * width);
    } while (hatRow === startRow && hatCol === startCol);

    field[hatRow][hatCol] = hat;

    for (let td = 0; td < height; td++) {
      for (let lr = 0; lr < width; lr++) {
        const isStartPos = (td === startRow && lr === startCol);
        const isHatPos = (td === hatRow && lr === hatCol);

        if (!isStartPos && !isHatPos && Math.random() < percentage) {
          field[td][lr] = hole;
        }
      }
    }

    return { field, startRow, startCol };
  }

  playGame() {
    let playing = true;

    while (playing) {
      this.print();
      const direction = prompt('Move (w/a/s/d, q to quit): ').toLowerCase();

      if (direction === 'q') {
        console.log('You quit the game.');
        playing = false;
        break;
      }

      // การเคลื่อนที่
      if (direction === 'w') this.moveUp();
      else if (direction === 's') this.moveDown();
      else if (direction === 'a') this.moveLeft();
      else if (direction === 'd') this.moveRight();
      else {
        console.log('Invalid input! Use w, a, s, or d.');
        continue;
      }

      if (
        this.actorRow < 0 ||
        this.actorRow >= this.field.length ||
        this.actorCol < 0 ||
        this.actorCol >= this.field[0].length
      ) {
        console.log('🚫 You went out of bounds! Game over.');
        playing = false;
        break;
      }

      const currentTile = this.field[this.actorRow][this.actorCol];

      if (currentTile === hole) {
        console.log('💀 You fell into a hole! Game over');
        playing = false;
      } else if (currentTile === hat) {
        console.log('🎉 You found the hat! You win!');
        playing = false;
      } else {
        this.field[this.actorRow][this.actorCol] = pathCharacter;
      }
    }
  }
}

const { field, startRow, startCol } = Field.generateField(10, 10, 0.1);
const myField = new Field(field, startRow, startCol);
myField.playGame();