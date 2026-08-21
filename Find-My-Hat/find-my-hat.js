const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.playerRow = 0;
    this.playerCol = 0;

    this.field[0][0] = pathCharacter;
  }

  print() {
    console.clear();
    const display = this.field.map(row => row.join('')).join('\n');
    console.log(display);
  }

  static generateField(height, width, percentage = 0.2) {
    const field = new Array(height).fill(null).map(() => new Array(width).fill(fieldCharacter));

    for (let td = 0; td < height; td++) {
      for (let lr = 0; lr < width; lr++) {
        if (Math.random() < percentage) {
          field[td][lr] = hole;
        }
      }
    }

    let hatRow, hatCol;
    do {
      hatRow = Math.floor(Math.random() * height);
      hatCol = Math.floor(Math.random() * width);
    } while (hatRow === 0 && hatCol === 0);

    field[hatRow][hatCol] = hat;
    return field;
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


      if (direction === 'w') this.playerRow -= 1;
      else if (direction === 's') this.playerRow += 1;
      else if (direction === 'a') this.playerCol -= 1;
      else if (direction === 'd') this.playerCol += 1;
      else {
        console.log('Invalid input! Use w, a, s, or d.');
        continue;
      }

      if (
        this.playerRow < 0 ||
        this.playerRow >= this.field.length ||
        this.playerCol < 0 ||
        this.playerCol >= this.field[0].length
      ) {
        console.log('You quit or walked off the field.');
        playing = false;
        break;
      }


      const currentTile = this.field[this.playerRow][this.playerCol];

      if (currentTile === hole) {
        console.log('Sorry, you fell in a hole!');
        playing = false;
      } else if (currentTile === hat) {
        console.log('You found your hat!');
        playing = false;
      } else {

        this.field[this.playerRow][this.playerCol] = pathCharacter;
      }
    }
  }
}


const myField = new Field(Field.generateField(10, 10, 0.1));
myField.playGame();